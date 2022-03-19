import { getSuccessResultObj, getFailResultObj, localVarExists, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "07_input_field_1";

let instructions = `
<ol>
<li>Greife auf das HTML Element des Eingabefeldes (id: <em>eingabe1</em>) zu. Tipp: Nutze die Funktion <em>document.getElementById(<b>ID</b>)</em>!</li>
<li>Lies den Wert des Eingabefeldes aus und speichere ihn in eine lokale Variable mit dem Variablennamen <em>spielername</em>. <b>Tipp</b>: Auf den Wert von einem Eingabefeld greifst du über elementXYZ<b>.value</b> zu</li>
</ol>
`;

let tips = [];

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


let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();

// Tests
    // var spielername = document.getElementById("eingabe1").value;
    // let spielername = "x";
    // let spielername = document.getElementById("eingabe1").value;