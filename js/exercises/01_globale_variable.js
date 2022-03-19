import {
  isNonEmptyString
} from "../exercise/validation_helper.js";
import {
  Exercise
} from '../exercise/exercise_base.js';


let exerciseID = "01_globale_variable";

let instructions = `
<ol>
<li>Deklariere eine globale Variable mit dem Variablennamen <em>spielername</em>.</li>
<li>Initialisiere die Variable mit einem beliebigen <em>string</em>.</li>
</ol>
`;

let validationFuncs = [
  function () {
    return isNonEmptyString(window.spielername)
  }
];

let tips = [{
    level: 1,
    title: "Globale Variablen anlegen",
    content: "Eine globale Variable wird mit dem Schlüsselwort var definiert"
  },
  {
    level: 2,
    title: "Strings anlegen",
    content: "Ein String wird immer in Gänsefüßchen gesetzt, z.B. \"Text\""
  },
  {
    level: 3,
    title: "Lösung anzeigen",
    content: "Die Lösung ist var spielername = \"Ein Name\""
  }
];

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