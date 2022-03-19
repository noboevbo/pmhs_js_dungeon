import { localVarExists, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "14_bedingte_anweisungen";

let instructions = `
<ol>
<li>Implementiere die Funktion <i>zahlenraten()</i> wie beschrieben. Sie liest die Eingabe des Benutzers aus dem Feld mit der <i>id: eingabe1</i> als number (valueAsNumber), speichere sie in einer lokalen Variable <i>ein</i> und entscheidet:
    <ul>
        <li>Wenn die Zahl in <i>ein</i> gleich ist wie <i>zufall</i>, dann gib in einem <i>alert</i> "Runde gewonnen!" aus, weise <i>zufall</i> einen neuen Zufallswert zu und beende die Funktion mit <em>return true</em>.</li>
        <li>Wenn die Zahl in <i>ein</i> größer ist als <i>zufall</i>, dann gib in einem <i>alert</i> "Zahl ist zu groß!" aus. Ansonsten gibt in einem <i>alert</i> "Zahl ist zu klein!" aus. </li>
    </ul>
</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    //function() { return localVarExists(ein, "ein") }, TODO: lässt sich noch nicht prüfen wegen Scope
    //function() { return isType(ein, "ein", "number") },
    function() { return scriptIncludes("document.getElementById(") },
    function() { return scriptIncludes("valueAsNumber") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("return true") },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("===") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();