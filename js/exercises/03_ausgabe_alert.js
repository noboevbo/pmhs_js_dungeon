import { scriptIncludes, isConst, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "03_ausgabe_alert";

let instructions = `
<ol>
<li>Deklariere eine Konstante mit dem Variablennamen <em>id</em> und initialisiere diese mit einem Wert des Datentyps <em>number</em>.</li>
<li>Gib die Variable <em>id</em> über den <em>alert()</em> Befehl aus.</li>
</ol>
`;

let tips = [];

let validationFuncs = [
  function() { return isConst("id") },
  function() { return isType(id, "id", "number") },
  function() { return scriptIncludes("alert(") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();


// Tests
    // var id = 42;
    // const id = "42";
    // const id = 42;
    // alert(id);