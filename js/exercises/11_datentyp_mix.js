import { localVarExists, globalVarExists, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "11_datentyp_mix";

let instructions = `
<ol>
<li>Deklariere die globalen Variablen <i>tmp1</i>, <i>tmp2</i>, <i>score1</i> und <i>score2</i>. Initialisiere alle mit dem Wert <i>0</i>.</li>
<li>Deklariere eine globale Variable <i>kampf</i> und weise ihr den Wert "" (leerer String) zu.</li>
<li>Füge folgende Anweisungen in die Funktion <em>buttonGeklickt()</em> ein</li>
<li>Greife auf die HTML Eingabefelder (id: <em>eingabe1</em> und id: <em>eingabe2</em>) zu. Tipp: Nutze die Funktion <em>document.getElementById(<b>ID</b>)</em>!</li>
<li>Lies jeweils die nummerischen Werte (valueAsNumber) der Eingabefelder aus und speichere sie in <em>tmp1</em> und <em>tmp2</em>.</li>
<li>Addiere den Wert von <i>tmp1</i> zu <i>score1</i> und den von <i>tmp2</i> zu <i>score2</i>.</li>
<li>Speichere in <i>kampf</i> das Ergebnis der Konkatenation (Verketting von Zeichen mit '+') von <i>score1</i>, <i>" vs. "</i> und <i>score2</i></li>
<li>Greife auf die Überschrift mit der id <em>ergebnis</em> zu und ändere den innerText des Elements auf auf den Wert von <i>kampf</i>.</li>Tipp: Nutze für den Zugriff auf das Element <em>document.getElementById(<b>id</b>).innerText</em></li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return globalVarExists("score1") },
    function() { return isType(score1, "score1", "number") },
    function() { return globalVarExists("score2") },
    function() { return isType(score2, "score2", "number") },
    function() { return globalVarExists("tmp1") },
    function() { return isType(tmp1, "tmp1", "number") },
    function() { return globalVarExists("tmp2") },
    function() { return isType(tmp2, "tmp2", "number") },
    function() { return globalVarExists("kampf") },
    function() { return isType(kampf, "kampf", "string") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();