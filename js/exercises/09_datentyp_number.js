import { localVarExists, globalVarExists, valueEquals, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "09_datentyp_number";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>zahl1</i> und initialisiere sie mit dem Wert <i>10</i></li>
<li>Deklariere eine lokale Variable <i>zahl2</i> und initialisiere sie mit dem Wert <i>4.1</i></li>
<li>Deklariere eine globale Variable <i>ergebnis</i> und speichere in ihr das Ergebnis der Multiplikation von <i>zahl1</i> und <i>zahl2</i></li>
<li>Inkrementiere die Variable <i>ergebnis</i> um eins</li>
</ol>
`;

let tips = [];


let validationFuncs = [
    function() { return localVarExists(zahl1, "zahl1") },
    function() { return valueEquals(zahl1, "zahl1", 10) },
    function() { return isType(zahl1, "zahl1", "number") },
    function() { return localVarExists(zahl2, "zahl2") },
    function() { return valueEquals(zahl2, "zahl2", 4.1) },
    function() { return isType(zahl2, "zahl2", "number") },
    function() { return globalVarExists("ergebnis") },
    function() { return isType(ergebnis, "ergebnis", "number") },
    function() { return valueEquals(ergebnis, "ergebnis", 42) }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();