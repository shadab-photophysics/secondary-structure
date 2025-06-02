// Handle selection of secondary structure element in overview
var coll = document.getElementsByClassName("clickeable");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(evt) {
	evt.stopPropagation();
	var divID = evt.target.id;
	// First, hide all content
	var coll = document.getElementsByClassName("sscontent");
	var i;
	for (i = 0; i < coll.length; i++) {
		if (coll[i].id != divID) {
			coll[i].style.display = 'none';
		}
	}
	if (document.getElementById(divID + "_content")) {
		if (divID != 'mainBox') {
			document.getElementById(divID + "_content").style.display = 'flex';
			if (contentLoaded[divID] == false) {
				let residues, chanis;
				switch(divID) {
					case "helices":
						$('#JmolDiv_helices').html( Jmol.getAppletHtml(jmol_helices, JmolInfo) );
						Jmol.script(jmol_helices, 'set disablePopupMenu TRUE;frank off;load idealalpha.pdb;trace only;trace 0.2;hide (*.HA);set perspectiveDepth off;zoom 250;select (*.CB or *.CA);color (*.CB) [149, 192, 61];wireframe on;wireframe reset;color [158,36,123];color (*.CB) [149, 192, 61];script helicesScript.txt;');
					break;
					case "strands":
						residues = getValueByKey(moleculeProps, "2TRX")["residues"];
						chains = getValueByKey(moleculeProps, "2TRX")["chains"];
						var currentSelection = "(" + getSelectionString(residues, chains) + ")";
						$('#JmolDiv_strands').html( Jmol.getAppletHtml(jmol_strands, JmolInfo) );
						Jmol.script(jmol_strands, 'set disablePopupMenu TRUE;frank off;load 2trx.pdb;cartoon only;set cartoonFancy on;color [158,36,123];select {' + currentSelection + ' and (*.CB or *.CA)};color (*.CB) [149, 192, 61];wireframe on;wireframe reset;select {' + currentSelection + ' and backbone};hbonds calculate;set hbondsBackbone TRUE;hbonds on;color hbonds [247,148,36];hbonds 0.1;');
					break;
					case "turns":
						$('#JmolDiv_turns').html( Jmol.getAppletHtml(jmol_turns, JmolInfo) );
						Jmol.script(jmol_turns, 'set disablePopupMenu TRUE;frank off;load 1arb.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "regular":
						$('#JmolDiv_regular').html( Jmol.getAppletHtml(jmol_regular, JmolInfo) );
						Jmol.script(jmol_regular, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 6ec0.pdb;hide chain=B;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "distorted":
						$('#JmolDiv_distorted').html( Jmol.getAppletHtml(jmol_distorted, JmolInfo) );
						distorted(0);
					break;
					case "threeten":
						$('#JmolDiv_310').html( Jmol.getAppletHtml(jmol_310, JmolInfo) );
						Jmol.script(jmol_310, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 1gpb.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "pihelix":
						$('#JmolDiv_pi').html( Jmol.getAppletHtml(jmol_pi, JmolInfo) );
						Jmol.script(jmol_pi, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 2qd1.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "parallel":
						$('#JmolDiv_parallel').html( Jmol.getAppletHtml(jmol_parallel, JmolInfo) );
						Jmol.script(jmol_parallel, 'set disablePopupMenu FALSE;frank off;set perspectiveDepth off;load 2beg.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "lefttwist":
						$('#JmolDiv_lefttwist').html( Jmol.getAppletHtml(jmol_lefttwist, JmolInfo) );
						Jmol.script(jmol_lefttwist, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 1ofs.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "relaxed":
						$('#JmolDiv_relaxed').html( Jmol.getAppletHtml(jmol_relaxed, JmolInfo) );
						Jmol.script(jmol_relaxed, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 2yxf.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "righttwist":
						$('#JmolDiv_righttwist').html( Jmol.getAppletHtml(jmol_righttwist, JmolInfo) );
						Jmol.script(jmol_righttwist, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 1ba7.pdb;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
					case "bulge":
						$('#JmolDiv_bulge').html( Jmol.getAppletHtml(jmol_bulge, JmolInfo) );
						bulge(0);
					break;
					case "piturns":
						$('#JmolDiv_piturn').html( Jmol.getAppletHtml(jmol_piturn, JmolInfo) );
						turn(0, 'piturn');
					break;
					case "alphaturns":
						$('#JmolDiv_alphaturn').html( Jmol.getAppletHtml(jmol_alphaturn, JmolInfo) );
						turn(0, 'alphaturn');
					break;
					case "betaturns":
						$('#JmolDiv_betaturn').html( Jmol.getAppletHtml(jmol_betaturn, JmolInfo) );
						turn(0, 'betaturn');
					break;
					case "gammaturns":
						$('#JmolDiv_gammaturn').html( Jmol.getAppletHtml(jmol_gammaturn, JmolInfo) );
						turn(0, 'gammaturn');
					break;
					case "epsilonturns":
						$('#JmolDiv_epsilonturn').html( Jmol.getAppletHtml(jmol_epsilonturn, JmolInfo) );
						turn(0, 'epsilonturn');
					break;
					case "deltaturns":
						$('#JmolDiv_deltaturn').html( Jmol.getAppletHtml(jmol_deltaturn, JmolInfo) );
						turn(0, 'deltaturn');
					break;
					case "coil":
						$('#JmolDiv_coil').html( Jmol.getAppletHtml(jmol_coil, JmolInfo) );
						Jmol.script(jmol_coil, 'set disablePopupMenu TRUE;frank off;set perspectiveDepth off;load 1lri.pdb;hide chain=B;cartoon only;set cartoonFancy on;color [158,36,123];');
					break;
				}
				contentLoaded[divID] = true;
			} else {
				switch(divID) {
					case "helices":
						setView('idealalpha', '0');
					break;
					case "strands":
						setView('2TRX', '0');
					break;
					case "turns":
						setView('1ARB', '0');
					break;
					case "pihelix":
						setView('2QD1', '1');
					break;
					case "threeten":
						setView('1GPB', '1');
					break;
				}
			}
			if (divID == "distorted") {
				distorted(0); // Jmol applet is empty if this is not called again
			}
		}
	}
  });
}