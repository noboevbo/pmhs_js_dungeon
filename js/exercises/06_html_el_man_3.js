import { hasCorrectStyleValue } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "06_html_el_man_3";

let instructions = `
<ol>
<li>Greife auf die Überschrift mit der id <em>idvonueberschrift</em> zu. Tipp: Nutze die Funktion <em>document.getElementById(<b>id</b>)</em>!</li>
<li>Ändere den CSS Style so, dass der Hintergrund vom Text gelb (<em>yellow</em>) wird!</li>
</ol>
`;

let tips = [];

let validationFuncs = [
  function() { return hasCorrectStyleValue("idvonueberschrift", "backgroundColor", "yellow") },
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();

// Tests
// document.getElementById("idvonueberschrift").style.backgroundColor = "yellow";