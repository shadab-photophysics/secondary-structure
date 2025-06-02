const moleculeProps = {
    "idealalpha": {
    "type": "helices",
    "chains": [["A", "A"]],
    "residues": [[2, 22]]
  },
    "2TRX": {
    "type": "strands",
    "chains": [["A", "A"], ["A", "A"], ["A", "A"], ["A", "A"], ["A", "A"]],
    "residues": [[3, 8], [21, 28], [53, 59], [76, 82], [86, 92]]
  },
    "1ARB": {
    "type": "turns",
    "chains": [["A", "A"]],
    "residues": [[109, 114]]
  },
  "6EC0": {
    "type": "regular",
    "chains": [["A", "A"]],
    "residues": [[225, 331]]
  },
  "1U4G": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[134, 149]],
    "caption": "Natural α-helix with small irregularities"
  },
  "1V54": {
    "type": "distorted",
    "chains": [["E", "E"]],
    "residues": [[80, 97]],
    "caption": "A kink in an α-helix"
  },
  "1QOY": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[18, 36]],
    "caption": "Distortions of an α-helix leading to a looser C-terminus"
  },
  "2CPP": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[258, 276]],
    "caption": "A strong kink due to a Pro residue in a slightly distorted α-helix"
  },
  "1TVF": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[73, 91]],
    "caption": "Difference between body and N-terminus of an α-helix"
  },
  "5MBN": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[3, 19]],
    "caption": "An α<sub>π</sub> cap at the C-terminus of an α-helix leading to higher curvature"
  },
  "1QTE": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[21, 36]],
    "caption": "Transition from a helix to a turn region with gradually increasing curvatures and interspersed high torsions"
  },
  "1RWZ": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[8, 23]],
    "caption": "C-terminal caps of α-helix"
  },
  "1KSS": {
    "type": "distorted",
    "chains": [["A", "A"]],
    "residues": [[543, 556]],
    "caption": "N-terminal caps of α-helix"
  },
  "1GPB": {
    "type": "310",
    "chains": [["A", "A"]],
    "residues": [[515, 525]]
  },
  "2QD1": {
    "type": "pi",
    "chains": [["A", "A"]],
    "residues": [[341, 361]]
  },
  "2BEG": {
    "type": "parallel",
    "chains": [["B", "B"], ["C", "C"], ["D", "D"]],
    "residues": [[18, 26], [18, 26], [18, 26]]
  },
  "1OFS": {
    "type": "lefttwist",
    "chains": [["A", "A"], ["B", "B"]],
    "residues": [[2, 8], [39, 46]]
  },
  "1BA7": {
    "type": "righttwist",
    "chains": [["A", "A"], ["A", "A"]],
    "residues": [[94, 96], [104, 106]]
  },
  "2YXF": {
    "type": "relaxed",
    "chains": [["A", "A"], ["A", "A"]],
    "residues": [[51, 56], [62, 69]]
  },
  "3CNA": {
    "type": "bulge",
    "chains": [["A", "A"], ["A", "A"]],
    "residues": [[35, 36], [27, 27]],
    "subtype": ["Classic bulge"],
    "caption": ["Bulge between a narrow pair of hydrogen bonds, with residue at position 1 in approximately α-helical conformation and residue at position 2 in approximately normal β conformation. All three side chains are on the same side of the β sheet."]
  },
  "4CHA": {
    "type": "bulge",
    "chains": [["C", "C"], ["C", "C"]],
    "residues": [[196, 197], [213, 213]],
    "subtype": ["G1 β-bulge"],
    "caption": ["Bulge with glycine in position 1 with torsion angles that are favorable only for glycine."]
  },
  "5CPA": {
    "type": "bulge",
    "chains": [["A", "A"], ["A", "A"], ["A", "A"], ["A", "A"]],
    "residues": [[130, 131], [140, 140], [199, 200], [271, 271]],
    "subtype": ["Gx NH β-bulge", "Gx CO bulge"],
    "caption": ["Carbonyls on both sides of the α-carbon in position x are used to form the hydrogen bonds with the other strand. In the Gx type, glycine is probably preferred because a side chain would point almost directly into the other strand.", "The NH groups on both sides of the α-carbon in position x are used to form the hydrogen bonds with the other strand. In the Gx type, glycine is probably preferred because a side chain would point almost directly into the other strand."]
  },
  "155C": {
    "type": "bulge",
    "chains": [["A", "A"], ["A", "A"]],
    "residues": [[35, 36], [19, 19]],
    "subtype": ["Parallel bulge"],
    "caption": ["Bulge with residue x on a parallel strand. Bulges are very rare in parallel β sheet."]
  },
  "6LUX": {
    "type": "bulge",
    "chains": [["A", "A"], ["A", "A"]],
    "residues": [[46, 47], [81, 81]],
    "subtype": ["Wide bulge"],
    "caption": ["Bulge between a wide pair of hydrogen bonds on antiparallel β-strands."]
  },
  "2BK9": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[147, 150]],
    "subtype": ["Type I"],
    "caption": ["Type I β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -60°, ψ<sub>i+1</sub> = -30°, φ<sub>i+2</sub> = -90°, and ψ<sub>i+2</sub> = 0°."]
  },
  "1KKO": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[77, 80]],
    "subtype": ["Type I'"],
    "caption": ["Type I' β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = 60°, ψ<sub>i+1</sub> = 30°, φ<sub>i+2</sub> = 90°, and ψ<sub>i+2</sub> = 0°.</br>Type I' is the mirror image of the backbone conformation of type I."]
  },
  "1H16": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[424, 427]],
    "subtype": ["Type II"],
    "caption": ["Type II β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -60°, ψ<sub>i+1</sub> = 120°, φ<sub>i+2</sub> = 80°, and ψ<sub>i+2</sub> = 0°."]
  },
  "1UXA": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[213, 216]],
    "subtype": ["Type II'"],
    "caption": ["Type II' β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = 60°, ψ<sub>i+1</sub> = -120°, φ<sub>i+2</sub> = -80°, and ψ<sub>i+2</sub> = 0°.</br>Type II' is the mirror image of the backbone conformation of type II."]
  },
  "1JYK": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[32, 35]],
    "subtype": ["Type IV<sub>1</sub>"],
    "caption": ["Type IV<sub>1</sub>. Type IV includes any β-turns that do not match any of the criteria for other types."]
  },
  "1URS": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[296, 299]],
    "subtype": ["Type IV<sub>2</sub>"],
    "caption": ["Type IV<sub>2</sub>. Type IV includes any β-turns that do not match any of the criteria for other types."]
  },
  "1PA7": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[125, 128]],
    "subtype": ["Type IV<sub>3</sub>"],
    "caption": ["Type IV<sub>3</sub>. Type IV includes any β-turns that do not match any of the criteria for other types."]
  },
  "1QWG": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[194, 197]],
    "subtype": ["Type IV<sub>4</sub>"],
    "caption": ["Type IV<sub>4</sub>. Type IV includes any β-turns that do not match any of the criteria for other types."]
  },
  "1HBN": {
    "type": "betaturn",
    "chains": [["E", "E"]],
    "residues": [[163, 166]],
    "subtype": ["Type VI<sub>a1</sub>"],
    "caption": ["Type VI<sub>a1</sub> β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -60°, ψ<sub>i+1</sub> = 120°, φ<sub>i+2</sub> = -90°, and ψ<sub>i+2</sub> = 0°.</br>This type, just as the other VI types, is characterised by a cis-proline in position i+2."]
  },
  "1IQ6": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[68, 71]],
    "subtype": ["Type VI<sub>a2</sub>"],
    "caption": ["Type VI<sub>a2</sub> β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -120°, ψ<sub>i+1</sub> = 120°, φ<sub>i+2</sub> = -60°, and ψ<sub>i+2</sub> = 0°.</br>This type, just as the other VI types, is characterised by a cis-proline in position i+2."]
  },
  "1YT3": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[141, 144]],
    "subtype": ["Type VI<sub>b</sub>"],
    "caption": ["Type VI<sub>b</sub> β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -135°, ψ<sub>i+1</sub> = 135°, φ<sub>i+2</sub> = -75°, and ψ<sub>i+2</sub> = 160°.</br>This type, just as the other VI types, is characterised by a cis-proline in position i+2."]
  },
  "1SU8": {
    "type": "betaturn",
    "chains": [["A", "A"]],
    "residues": [[435, 438]],
    "subtype": ["Type VIII"],
    "caption": ["Type VIII β-turn. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = -60°, ψ<sub>i+1</sub> = -30°, φ<sub>i+2</sub> = -120°, and ψ<sub>i+2</sub> = 120°."]
  },
  "1AAP": {
    "type": "alphaturn",
    "chains": [["B", "B"]],
    "residues": [[24, 28]],
    "subtype": ["Type I-α<sub>RS</sub>"],
    "caption": ["Type I-α<sub>RS</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (-60 ± 11)°, ψ<sub>i+1</sub> = (-29 ± 13)°, φ<sub>i+2</sub> = (-72 ± 14)°, ψ<sub>i+2</sub> = (-29 ± 15)°, φ<sub>i+3</sub> = (-96 ± 20)°, and ψ<sub>i+3</sub> = (-20 ± 17)°."]
  },
  "1FCB": {
    "type": "alphaturn",
    "chains": [["B", "B"]],
    "residues": [[372, 376]],
    "subtype": ["Type I-α<sub>LS</sub>"],
    "caption": ["Type I-α<sub>LS</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (48 ± 22)°, ψ<sub>i+1</sub> = (42 ± 14)°, φ<sub>i+2</sub> = (67 ± 9)°, ψ<sub>i+2</sub> = (33 ± 14)°, φ<sub>i+3</sub> = (70 ± 11)°, and ψ<sub>i+3</sub> = (32 ± 12)°."]
  },
  "3COX": {
    "type": "alphaturn",
    "chains": [["A", "A"]],
    "residues": [[453, 457]],
    "subtype": ["Type II-α<sub>RS</sub>"],
    "caption": ["Type II-α<sub>RS</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (-59 ± 10)°, ψ<sub>i+1</sub> = (129 ± 15)°, φ<sub>i+2</sub> = (88 ± 15)°, ψ<sub>i+2</sub> = (-16 ± 19)°, φ<sub>i+3</sub> = (-91 ± 22)°, and ψ<sub>i+3</sub> = (-32 ± 18)°."]
  },
  "1L76": {
    "type": "alphaturn",
    "chains": [["A", "A"]],
    "residues": [[27, 31]],
    "subtype": ["Type II-α<sub>LS</sub>"],
    "caption": ["Type II-α<sub>LS</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (53 ± 15)°, ψ<sub>i+1</sub> = (-137 ± 25)°, φ<sub>i+2</sub> = (-95 ± 12)°, ψ<sub>i+2</sub> = (81 ± 23)°, φ<sub>i+3</sub> = (57 ± 5)°, and ψ<sub>i+3</sub> = (38 ± 8)°."]
  },
  "4GCR": {
    "type": "alphaturn",
    "chains": [["A", "A"]],
    "residues": [[136, 140]],
    "subtype": ["Type I-α<sub>LU</sub>"],
    "caption": ["Type I-α<sub>LU</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (-61 ± 12)°, ψ<sub>i+1</sub> = (158 ± 15)°, φ<sub>i+2</sub> = (64 ± 17)°, ψ<sub>i+2</sub> = (37 ± 21)°, φ<sub>i+3</sub> = (62 ± 12)°, and ψ<sub>i+3</sub> = (39 ± 8)°."]
  },
  "1BBP": {
    "type": "alphaturn",
    "chains": [["C", "C"]],
    "residues": [[142, 146]],
    "subtype": ["Type I-α<sub>RU</sub>"],
    "caption": ["Type I-α<sub>RU</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (59 ± 18)°, ψ<sub>i+1</sub> = (-157 ± 31)°, φ<sub>i+2</sub> = (-67 ± 17)°, ψ<sub>i+2</sub> = (-29 ± 20)°, φ<sub>i+3</sub> = (-68 ± 12)°, and ψ<sub>i+3</sub> = (-39 ± 12)°."]
  },
  "1GP1": {
    "type": "alphaturn",
    "chains": [["B", "B"]],
    "residues": [[75, 79]],
    "subtype": ["Type II-α<sub>LU</sub>"],
    "caption": ["Type II-α<sub>LU</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (-65 ± 15)°, ψ<sub>i+1</sub> = (-20 ± 15)°, φ<sub>i+2</sub> = (-90 ± 17)°, ψ<sub>i+2</sub> = (16 ± 44)°, φ<sub>i+3</sub> = (86 ± 18)°, and ψ<sub>i+3</sub> = (37 ± 27)°."]
  },
  "1CMS": {
    "type": "alphaturn",
    "chains": [["A", "A"]],
    "residues": [[11, 15]],
    "subtype": ["Type II-α<sub>RU</sub>"],
    "caption": ["Type II-α<sub>RU</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (54 ± 8)°, ψ<sub>i+1</sub> = (39 ± 15)°, φ<sub>i+2</sub> = (67 ± 13)°, ψ<sub>i+2</sub> = (-5 ± 31)°, φ<sub>i+3</sub> = (-125 ± 11)°, and ψ<sub>i+3</sub> = (-34 ± 32)°."]
  },
  "1S01": {
    "type": "alphaturn",
    "chains": [["A", "A"]],
    "residues": [[166, 170]],
    "subtype": ["Type I-α<sub>C</sub>"],
    "caption": ["Type I-α<sub>C</sub>. For this type, values of dihedral angles are close to: φ<sub>i+1</sub> = (-103 ± 23)°, ψ<sub>i+1</sub> = (143 ± 4)°, φ<sub>i+2</sub> = (-85 ± 8)°, ψ<sub>i+2</sub> = (2 ± 6)°, φ<sub>i+3</sub> = (-54 ± 6)°, and ψ<sub>i+3</sub> = (-39 ± 9)°."]
  },
  "2AYH": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[96, 101]],
    "subtype": ["Type π<sub>αL</sub>"],
    "caption": ["Type π<sub>αL</sub>. For this type, the residue in position <i>i</i>+4 has a left-handed α-helical (α<sub>L</sub>) conformation."]
  },
  "4ENL": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[67, 73]],
    "subtype": ["Type π<sub>αR</sub>"],
    "caption": ["Type π<sub>αR</sub>. For this type, the residue in position <i>i</i>+4 has a right-handed α-helical (α<sub>R</sub>) conformation.</br>Most of the time, residues in positions <i>i</i>+1 to <i>i</i>+3 also have α<sub>R</sub> conformation, so π<sub>αR</sub>-turns are, essentially, helical structures; however, they introduce a distortion that loosens the typical helical structure in the middle or at the ends of α-helices."]
  },
  "1HMY": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[127, 132]],
    "subtype": ["Type π'<sub>αL</sub>"],
    "caption": ["Type π'<sub>αL</sub>. For this type, the peptide bonds that connect the central residues of the turn have dihedral angles of similar magnitudes as in π<sub>αL</sub>-turns, but of opposite signs, i.e., π'<sub>αL</sub>-turns are mirror images of π<sub>αL</sub>-turns."]
  },
  "1RND": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[111, 116]],
    "subtype": ["Type π<sub>β</sub>"],
    "caption": ["Type π<sub>β</sub>. For this type, the residue in position <i>i</i>+4 has a β conformation, and the residue at position <i>i</i>+3 is a conserved <i>cis</i>-Pro."]
  },
  "1E1H": {
    "type": "piturn",
    "chains": [["B", "B"]],
    "residues": [[324, 329]],
    "subtype": ["Type π-NHB"],
    "caption": ["Type π-NHB. In this type, a main-chain hydrogen bond between residues <i>i</i> and <i>i</i>+5 is absent (π-NHB)."]
  },
  "1AJS": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[162, 167]],
    "subtype": ["Type π-HB, isolated"],
    "caption": ["Type π-HB, isolated. In this type, a main-chain hydrogen bond between residues <i>i</i> and <i>i</i>+5 is present (π-HB). In the example shown, the π-turn is part of a β-hairpin motif."]
  },
  "16PK": {
    "type": "piturn",
    "chains": [["A", "A"]],
    "residues": [[382, 387]],
    "subtype": ["Type π-HB SCH<sub>+β</sub>"],
    "caption": ["Type π-HB SCH<sub>+β</sub>. In this type, a main-chain hydrogen bond between residues <i>i</i> and <i>i</i>+5 is present (π-HB); moreover, there is a Schellman (SCH) motif with an additional hydrogen bond between residues <i>i</i> and <i>i</i>+4 as part of an internal β-turn (+β). The π-turn shown terminates the end of an α-helix, as is characteristic for the Schellman motif."]
  },
  "8TLN": {
    "type": "gammaturn",
    "chains": [["E", "E"]],
    "residues": [[25, 27]],
    "subtype": ["Classic"],
    "caption": ["The classic γ-turn is typically found at the end of a β-hairpin. It is stabilised by two hydrogen bonds one of which is straight, while the other one is strongly bent."]
  },
  "2SGA": {
    "type": "gammaturn",
    "chains": [["A", "A"]],
    "residues": [[113, 115]],
    "subtype": ["Inverse"],
    "caption": ["The inverse γ-turn is rarely part of β-hairpins. It is stabilised by only one hydrogen bond and gives rise to a kink."]
  },
  "1NJH": {
    "type": "deltaturn",
    "chains": [["A", "A"]],
    "residues": [[63, 64]],
    "subtype": ["Gly-Pro"],
    "caption": ["Gly-Pro. According to conformational energy calculations, the most favourable dihedral angles are: φ<sub>i</sub> = 173°, ψ<sub>i</sub> = 85°, φ<sub>i+1</sub> = -75°, and ψ<sub>i+1</sub> = 167°."]
  },
  "2BMH": {
    "type": "deltaturn",
    "chains": [["A", "A"]],
    "residues": [[195, 196]],
    "subtype": ["Asp-Pro"],
    "caption": ["Asp-Pro. This is a more unusual example for δ-turns where both dihedral angles of the proline are negative so that the residue has a right-handed helical conformation."]
  },
  "1KB0": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[617, 619]],
    "subtype": ["1"],
    "caption": ["Family 1."]
  },
  "1QXY": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[171, 173]],
    "subtype": ["2"],
    "caption": ["Family 2."]
  },
  "3O12": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[110, 112]],
    "subtype": ["3"],
    "caption": ["Family 3."]
  },
  "2RA6": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[93, 95]],
    "subtype": ["4"],
    "caption": ["Family 4."]
  },
  "3F9M": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[227, 229]],
    "subtype": ["5"],
    "caption": ["Family 5."]
  },
  "1HPG": {
    "type": "epsilonturn",
    "chains": [["A", "A"]],
    "residues": [[221, 223]],
    "subtype": ["6"],
    "caption": ["Family 6."]
  },
  "1LRI": {
    "type": "coil",
    "chains": [["A", "A"], ["A", "A"], ["A", "A"]],
    "residues": [[1, 3], [33, 42], [67, 72]]
  }
};