import { innerTextEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "04_html_el_man_1";

let instructions = `
<ol>
<li>Greife auf die Überschrift mit der id <em>idvonueberschrift</em> zu. Tipp: Nutze die Funktion <em>document.getElementById(<b>id</b>)</em>!</li>
<li>Ändere den innerText des Elements auf "Hi".</li>
</ol>
`;

let tips = [];

let validationFuncs = [
  function() { return innerTextEquals("idvonueberschrift", "Hi") },
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();

// Tests
// document.getElementById("idvonueberschrift").innerText = "Hi";

