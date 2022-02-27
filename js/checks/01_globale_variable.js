import { validate, isNonEmptyString } from '../check_helper.js';

let exerciseID = "01_globale_variable";

let validationFuncs = [
  function() { return isNonEmptyString(window.spielername) }
]

function beforeSuccess() {
  localStorage.setItem("01_playerName", spielername);
}

function afterSuccess() {
  window.parent.updatePageVariables();
}

function beforeFail() {
  localStorage.removeItem("01_playerName");
}

let tipps = [
  {level: 1, text: "Eine globale Variable wird mit dem Schlüsselwort var definiert"},
  {level: 2, text: "Ein String wird immer in Gänsefüßchen gesetzt, z.B. \"Text\""},
  {level: 3, text: "Die Lösung ist var spielername = \"Ein Name\""}
]

window.onload = function() { 
  window.parent.initializeTipps(tipps);
  validate(exerciseID, validationFuncs, beforeSuccess, afterSuccess, beforeFail);
};
// Tests
    // var spielername = "Hans";
    // let spielername = "Hans";
    // var spielername = 42;

