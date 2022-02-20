import { validate, getSuccessResultObj, getFailResultObj, localVarExists, valueEquals } from '../check_helper.js';

let exerciseID = "07_input_field_1";

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
  function() { return valueEquals(spielername, "spielername", "Hans") }
]


window.onload = function() { validate(exerciseID, validationFuncs) };

// Tests
    // var spielername = document.getElementById("eingabe1").value;
    // let spielername = "x";
    // let spielername = document.getElementById("eingabe1").value;