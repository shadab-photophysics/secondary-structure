function getValueByKey(object, row) {http://www.beta-sheet.org/page29/page51/page53/index.html
  return object[row];
}

const currentIDs = {
  "bulge": 0,
  "piturn": 0,
  "alphaturn": 0,
  "betaturn": 0,
  "gammaturn": 0,
  "deltaturn": 0,
  "epsilonturn": 0
}

const currentMeasurementLabels = {
  "piturn": 0,
  "alphaturn": 0,
  "betaturn": 0,
  "gammaturn": 0,
  "deltaturn": 0,
  "epsilonturn": 0
}

var contentLoaded = {
"secondarystructures": false,
"helices": false,
"strands": false,
"turns": false,
"regular": false,
"distorted": false,
"threeten": false,
"pihelix": false,
"parallel": false,
"antiparallel": false,
"lefttwist": false,
"relaxed": false,
"righttwist": false,
"bulge": false,
"piturns": false,
"alphaturns": false,
"betaturns": false,
"gammaturns": false,
"epsilonturns": false,
"deltaturns": false,
"coil": false
}

var jmol_helices = 'jmol_helices';
var jmol_strands = 'jmol_strands';
var jmol_turns = 'jmol_turns';
var jmol_regular = 'jmol_regular';
var jmol_distorted = 'jmol_distorted';
var jmol_310 = 'jmol_310';
var jmol_pi = 'jmol_pi';
var jmol_parallel = 'jmol_parallel';
var jmol_lefttwist = 'jmol_lefttwist';
var jmol_relaxed = 'jmol_relaxed';
var jmol_righttwist = 'jmol_righttwist';
var jmol_bulge = 'jmol_bulge';
var jmol_piturn = 'jmol_piturn';
var jmol_alphaturn = 'jmol_alphaturn';
var jmol_betaturn = 'jmol_betaturn';
var jmol_gammaturn = 'jmol_gammaturn';
var jmol_deltaturn = 'jmol_deltaturn';
var jmol_epsilonturn = 'jmol_epsilonturn';
var jmol_coil = 'jmol_coil';