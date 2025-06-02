var JmolInfo = {
 width:'100%',
 height:'100%',
 color:'#FFFFFF',
 j2sPath:'jsmol/jsmol/j2s',
 serverURL:'jsmol/jsmol/php/jsmol.php',
 use:'html5',
 loadStructCallback:'moleculeLoaded',
 measureCallback:'measurementDone',
 messageCallback:'messageReceived'
}

var jmol_intro = 'jmol_intro';
 
var typingTimer;
var doneTypingInterval = 500;
var sequenceChanges = [];

var dragState = 0;
var introDihedralAngles = [];
var scriptBusy = false;

//var iframe = window.parent.document.getElementById("widget");
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var innerDoc = document;

function messageReceived() {
	let message = arguments[1];
	//console.log("JSMol: " + message);
	if (message.startsWith("Measurement Information")) {
		//console.log("Measurement Information obtained.");
		introDihedralAngles = message.split(/\r?\n|\r|\n/g);
		introDihedralAngles.forEach((item, index, arr) => {
			introDihedralAngles[index] = item.split("\t");
		});
		dragState = 1;
	}
	if (message == "Script completed") {
		//console.log("JSMol: " + message);
		scriptBusy = false;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// Restrict input to one letter codes for amino acids
	const regex = new RegExp("^[acdefghiklmnpqrstvwy]*$");
	
	const sequenceInput = innerDoc.getElementById("sequence");

	sequenceInput.addEventListener("beforeinput", (event) => {
	  if (event.data != null && !regex.test(event.data)) 
	    event.preventDefault();
	});
	
	// Monitor key strokes in the sequence
	
	sequenceInput.onkeyup = function(evt) {
		clearTimeout(typingTimer);
		typingTimer = setTimeout(commitSequenceChanges, doneTypingInterval);
	};
	
	sequenceInput.onkeydown = function(evt) {
		clearTimeout(typingTimer);
		const allowedKeyCodes = [8, 46, 65, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 80, 81, 82, 83, 84, 86, 87, 89]; // Only look for Backspace, Delete, and the 20 single letter amino acid codes
		if (allowedKeyCodes.includes(evt.keyCode)) {
			storeSequenceChanges(evt);
		}
	};
	
	// Monitor dragging in sequence input field
	
	var dragging = false;
	
	sequenceInput.ondragstart = function(evt) {
		if (dragging == false) {
			dragging = true;
			storeSequenceChanges(evt);
		}
	};

	sequenceInput.ondragend = function(evt) {
		dragging = false;
		Jmol.script(jmol_intro, 'script preLoadingScript.txt;');
		storeSequenceChanges(evt);
		commitSequenceChanges();
	};
	
	// Show molecule for default sequence

	mainTextControl();

	$('#JmolDiv_intro').html( Jmol.getAppletHtml(jmol_intro, JmolInfo) );
	Jmol.script(jmol_intro, 'set disablePopupMenu FALSE;frank off;set perspectiveDepth off;selectionHalos ON;color SELECTIONHALOS [158,36,123];set showHiddenSelectionHalos FALSE;');

	sequenceInitialise();
	
	console.log("Sequence initialised.");
	
	updateRamachandran();
});