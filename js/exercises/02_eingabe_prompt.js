import {
  isNonEmptyString,
  localVarExists,
  getSuccessResultObj,
  getFailResultObj,
  scriptIncludes
} from "../exercise/validation_helper.js";
import {
  Exercise
} from '../exercise/exercise_base.js';

let exerciseID = "02_eingabe_prompt";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable mit dem Variablennamen <em>spielername</em>.</li>
<li>Initialisiere die Variable über eine Benutzereingabe (<em>prompt("Spielername eingeben")</em>)</li>
</ol>
`;

let tips = [];

function spielernameExists() {
  if (typeof (spielername) !== "undefined") {
    return getSuccessResultObj();
  } else {
    return getFailResultObj("Die lokale Variable spielername existiert nicht.")
  }
}

let validationFuncs = [
  function () {
    return spielernameExists()
  },
  function () {
    return localVarExists(spielername, "spielername")
  },
  function () {
    return isNonEmptyString(spielername, "spielername")
  },
  function () {
    return scriptIncludes("prompt(")
  }
]

class ExerciseA extends Exercise {
  constructor(exerciseID, instructions, tips, validationFuncs) {
    super(exerciseID, instructions, tips, validationFuncs);
  }

  beforeSuccess() {
    localStorage.setItem("01_playerName", spielername);
  }

  afterSuccess() {
    window.parent.postMessage(getEmptyUpdatePageVariablesMessage(), window.origin);
  }

  beforeFail() {
    localStorage.removeItem("01_playerName");
  }
}

let exercise = new ExerciseA(exerciseID, instructions, tips, validationFuncs);
window.onload = exercise.init();