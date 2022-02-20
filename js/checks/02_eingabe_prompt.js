import { validate, isNonEmptyString, localVarExists, getSuccessResultObj, getFailResultObj, scriptIncludes, noop } from '../check_helper.js';

let exerciseID = "02_eingabe_prompt";

function spielernameExists() {
  if(typeof(spielername) !== "undefined") {
    return getSuccessResultObj();
  } else {
    return getFailResultObj("Die lokale Variable spielername existiert nicht.")
  }
}

let validationFuncs = [
  function() { return spielernameExists() },
  function() { return localVarExists(spielername, "spielername") },
  function() { return isNonEmptyString(spielername, "spielername") },
  function() { return scriptIncludes("prompt(") }
]

function beforeSuccess() {
  localStorage.setItem("02_playerName", spielername);
}

function beforeFail() {
  localStorage.removeItem("02_playerName");
}

window.onload = function() { validate(exerciseID, validationFuncs, beforeSuccess, noop, beforeFail) };



