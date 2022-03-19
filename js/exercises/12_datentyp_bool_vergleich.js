import { localVarExists, globalVarExists, scriptIncludes, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "12_datentyp_bool_vergleich";

let instructions = `
<ol>
<li>Deklariere die lokale Variable <i>score1</i> initialisiert mit <i>42</i> und <i>score2</i> initialisiert mit <i>21</i>.</li>
<li>Deklariere eine lokale Variable <i>wahr</i> und weise ihr den Wert <i>true</i> zu.</li>
<li>Deklariere eine globale Variable <i>test1</i> und weise ihr das Ergebnis des Vergleichs <i>score1 kleiner gleich score2</i> zu.</li>
<li>Deklariere eine globale Variable <i>test2</i> und weise ihr das Ergebnis des Vergleichs <i>score1 ungleich score2</i> zu.</li>
<li>Deklariere eine globale Variable <i>test3</i> und weise ihr das Ergebnis des Vergleichs <i>wahr gleich test2</i> (auch gleicher Datentyp) zu.</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return localVarExists(score1, "score1") },
    function() { return valueEquals(score1, "score1", 42) },
    function() { return localVarExists(score2, "score2") },
    function() { return valueEquals(score2, "score2", 21) },
    function() { return localVarExists(wahr, "wahr") },
    function() { return valueEquals(wahr, "wahr", true) },
    function() { return globalVarExists("test1") },
    function() { return valueEquals(test1, "test1", false) },
    function() { return globalVarExists("test2") },
    function() { return valueEquals(test2, "test2", true) },
    function() { return globalVarExists("test3") },
    function() { return valueEquals(test3, "test3", true) },
    function() { return scriptIncludes("!==") },
    function() { return scriptIncludes("<=") },
    function() { return scriptIncludes("===") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();