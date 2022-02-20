import { validate, noop, isNonEmptyString } from '../check_helper.js';

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

window.onload = function() { validate(exerciseID, validationFuncs, beforeSuccess, afterSuccess, beforeFail) };

// Tests
    // var spielername = "Hans";
    // let spielername = "Hans";
    // var spielername = 42;

