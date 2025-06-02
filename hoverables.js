// Handle hoverables behavior
var coll = document.getElementsByClassName("hoverable");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    var coll = document.getElementsByClassName("hoverable");
    for (i = 0; i < coll.length; i++) {
	if (coll[i] != this) {
		coll[i].dataset.active = false;
	}
    }
    if (this.dataset.active == "false") {
	    var toggle, residues, chains, currentSelection;
	    var commands = "";
	    switch (this.id) {
		case "helices_text1":
			commands += '!exit;reset;set perspectiveDepth off;zoom 250;';
			commands += 'select all;trace only;trace 0.2;color trace [158,36,123];' // Show trace only
			commands += 'select (*.CB or *.CA);wireframe on;wireframe reset;color TRANSLUCENT 1;'; // Show sidechains
			commands += 'color (*.CA) [158,36,123];color (*.CB) [149, 192, 61];'; // Color sidechains
			commands += 'select all;hbonds off;' // Hide hydrogen bonds
			commands += 'dipole bonds off;'; // Hide dipoles
			commands += 'script helicesScript.txt;'; // Show axis and axis arrow
			Jmol.script(jmol_helices, commands);
			toggle = document.getElementById("helices_backbone_toggle");
			toggle.innerHTML = "Show backbone atoms";
			toggle.dataset.backbone = "hidden";
			toggle = document.getElementById("helices_sidechains_toggle");
			toggle.innerHTML = "Hide sidechains";
			toggle.dataset.sidechains = "visible";
			toggle = document.getElementById("helices_hbonds_toggle");
			toggle.innerHTML = "Show h-bonds";
			toggle.dataset.hbonds = "hidden";
			toggle = document.getElementById("helices_axis_toggle");
			toggle.innerHTML = "Hide helical axis";
			toggle.dataset.axis = "visible";
			toggle = document.getElementById("helices_termini_toggle");
			toggle.innerHTML = "Show termini &amp; caps";
			toggle.dataset.termini = "hidden";
			toggle = document.getElementById("helices_dipoles_toggle");
			toggle.innerHTML = "Show dipole moments";
			toggle.dataset.termini = "hidden";
			
		break;
		case "helices_text2":
			commands += '!exit;reset;set perspectiveDepth on;zoom 150;rotate y -45;rotate z 35;';
			commands += 'select all;trace only;trace 0.2;color trace [158,36,123];' // Show trace only
			commands += 'select (sidechains or *.CA);wireframe off;'; // Hide sidechains
			commands += 'delete $ line1;delete $ line2;'; // Hide axis and axis arrow
			commands += 'select backbone;hbonds calculate;set hbondsBackbone TRUE;hbonds on;color hbonds [247,148,36];hbonds 0.1;'; // Show hydrogen bonds
			commands += 'color trace [158,36,123];'; // Color trace
			commands += 'select (2-5);color trace [0, 90, 157];select (19-22);color trace [181, 23, 38];'; // Color termini
			commands += 'select (2);color trace blue;select (22);color trace red;'; // Color caps
			commands += 'dipole bonds off;'; // Hide dipoles
			Jmol.script(jmol_helices, commands);
			toggle = document.getElementById("helices_backbone_toggle");
			toggle.innerHTML = "Show backbone atoms";
			toggle.dataset.backbone = "hidden";
			toggle = document.getElementById("helices_sidechains_toggle");
			toggle.innerHTML = "Show sidechains";
			toggle.dataset.sidechains = "hidden";
			toggle = document.getElementById("helices_hbonds_toggle");
			toggle.innerHTML = "Hide h-bonds";
			toggle.dataset.hbonds = "visible";
			toggle = document.getElementById("helices_axis_toggle");
			toggle.innerHTML = "Show helical axis";
			toggle.dataset.axis = "hidden";
			toggle = document.getElementById("helices_termini_toggle");
			toggle.innerHTML = "Hide termini &amp; caps";
			toggle.dataset.termini = "visible";
			toggle = document.getElementById("helices_dipoles_toggle");
			toggle.innerHTML = "Show dipole moments";
			toggle.dataset.dipoles = "hidden";
		break;
		case "helices_text3":
			commands += '!exit;reset;set perspectiveDepth on;zoom 100;rotate x 90;rotate y 135;';
			commands += 'delete $ line1;delete $ line2;'; // Hide axis and axis arrow
			commands += 'select all;hbonds off;'; // Hide hydrogen bonds
			commands += 'select all;color atoms cpk;wireframe on;wireframe reset;select all;color atoms TRANSLUCENT 0.75;'; // Show backbone
			commands += 'dipole calculate bonds;dipole bonds on;dipole WIDTH 0.2 CROSS OFFSET 1.0 OFFSETSIDE 0.6;set dipoleScale 2;color dipole black;'; // Show dipoles
			commands += 'trace off;'; // Hide trace
			commands += 'select (sidechains or *.CA);wireframe off;'; // Hide sidechains
			
			commands += 'select {atomName=HN and resno=2};label \"<color black>δ<sup>+</sup></color>\";';
			commands += 'select {atomName=O and resno=22};label \"<color black>δ<sup>-</sup></color>\";';
			
			Jmol.script(jmol_helices, commands);
			toggle = document.getElementById("helices_backbone_toggle");
			toggle.innerHTML = "Hide backbone atoms";
			toggle.dataset.backbone = "visible";
			toggle = document.getElementById("helices_sidechains_toggle");
			toggle.innerHTML = "Show sidechains";
			toggle.dataset.sidechains = "hidden";
			toggle = document.getElementById("helices_hbonds_toggle");
			toggle.innerHTML = "Show h-bonds";
			toggle.dataset.hbonds = "hidden";
			toggle = document.getElementById("helices_axis_toggle");
			toggle.innerHTML = "Show helical axis";
			toggle.dataset.axis = "hidden";
			toggle = document.getElementById("helices_termini_toggle");
			toggle.innerHTML = "Show termini &amp; caps";
			toggle.dataset.termini = "hidden";
			toggle = document.getElementById("helices_dipoles_toggle");
			toggle.innerHTML = "Hide dipole moments";
			toggle.dataset.dipoles = "visible";
		break;
		case "strands_text1":
			residues = getValueByKey(moleculeProps, "2TRX")["residues"];
			chains = getValueByKey(moleculeProps, "2TRX")["chains"];
			commands += '!exit;';
			commands += 'select (sidechains or *.CA);wireframe off;'; // Hide sidechains
			currentSelection = "(" + getSelectionString(residues, chains) + ")";
			commands += 'select {' + currentSelection + ' and backbone};hbonds calculate;set hbondsBackbone TRUE;hbonds on;color hbonds [247,148,36];hbonds 0.1;'; // Show hydrogen bonds
			commands += getAlignmentCommands(jmol_strands, residues[2][0], residues[2][1], chains[0][0], chains[0][1]);
			commands += 'delete $ parallel; delete $ antiparallel; color cartoon [158,36,123];';
			commands += 'zoom 200;rotate x -30;translate y -12;rotate spin y 5;';
			Jmol.script(jmol_strands, commands);
		break;
		case "strands_text2":
			residues = getValueByKey(moleculeProps, "2TRX")["residues"];
			chains = getValueByKey(moleculeProps, "2TRX")["chains"];
			commands += '!exit;';
			commands += 'select (sidechains or *.CA);wireframe off;'; // Hide sidechains
			commands += 'select all;hbonds off;'; // Hide hydrogen bonds
			commands += getAlignmentCommands(jmol_strands, residues[2][0], residues[2][1], chains[0][0], chains[0][1]);
			commands += 'zoom 200;rotate x -30;translate y -12;rotate spin y 5;';
			commands += 'script strandsScript.txt;'; // Indicate parallel and anti-parallel strands alternatingly
			Jmol.script(jmol_strands, commands);
		break;
		case "strands_text3":
			residues = getValueByKey(moleculeProps, "2TRX")["residues"];
			chains = getValueByKey(moleculeProps, "2TRX")["chains"];
			commands += '!exit;';
			commands += 'select all;hbonds off;'; // Hide hydrogen bonds
			currentSelection = "(" + getSelectionString(residues, chains) + ")";
			commands += 'select {' + currentSelection + ' and (*.CB or *.CA)};color (*.CB) [149, 192, 61];wireframe on;wireframe reset;'; // Show sidechains
			commands += getAlignmentCommands(jmol_strands, residues[2][0], residues[2][1], chains[0][0], chains[0][1]);
			commands += 'delete $ parallel; delete $ antiparallel; color cartoon [158,36,123];';
			commands += 'zoom 200;rotate x -30;translate y -12;rotate spin y 5;';
			Jmol.script(jmol_strands, commands);
		break;
	    }
	    this.dataset.active = true;
    }
  });
}