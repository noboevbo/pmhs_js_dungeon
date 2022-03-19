import { localVarExists, globalVarExists, valueEquals, isType, innerTextEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "10_datentyp_string";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>player1</i> und initialisiere sie mit dem Wert <i>Mario</i></li>
<li>Deklariere eine lokale Variable <i>player2</i> und initialisiere sie mit dem Wert <i>Sonic</i></li>
<li>Deklariere eine globale Variable <i>kampf</i> und speichere in ihr das Ergebnis der Konkatenation (Verketting von Zeichen mit '+') von <i>player1</i>, <i>" vs. "</i> und <i>player2</i></li>
<li>Greife auf die Überschrift mit der id <em>kampfid</em> zu und ändere den innerText des Elements auf auf den Wert von <i>kampf</i>.</li>Tipp: Nutze für den Zugriff auf das Element <em>document.getElementById(<b>id</b>).innerText</em></li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return localVarExists(player1, "player1") },
    function() { return valueEquals(player1, "player1", "Mario") },
    function() { return isType(player1, "player1", "string") },
    function() { return localVarExists(player2, "player2") },
    function() { return valueEquals(player2, "player2", "Sonic") },
    function() { return isType(player2, "player2", "string") },
    function() { return globalVarExists("kampf") },
    function() { return isType(kampf, "kampf", "string") },
    function() { return valueEquals(kampf, "kampf", "Mario vs. Sonic") },
    function() { return innerTextEquals("kampfid", "Mario vs. Sonic") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();