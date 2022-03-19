import { scriptIncludes, valueEquals, innerTextEquals, consoleContains } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "13_bedingungen";

let instructions = `
<ol>
<li>Formuliere die Bedingung 1: Wenn <i>health</i> größer ist als 100, dann ... </li>
<li>Füge eine Ausgabe in das HTML Element mit der <i>id: statid</i> mit Hilfe der Funktion <em>document.getElementById()</em> ein, welche die aktuellen Werte von health und lives in der Form <i>"Gesundheit: 100 - Leben: 3"</i>ausgibt. Tipp: Schau dir das Beispiel bei Bedingung 2 an.</li>
<li>Formuliere die Bedingung 2: Wenn <i>strength</i> kleiner gleich ist wie <i>enemy</i>, dann ...</li>
<li>Formuliere die Bedingung 3: Wenn <i>equipment</i> den Wert <i>"Schwert"</i> hat, dann ...</li>
<li>Öffne die Entwicklertools deines Browsers und sieh dir die Ausgabe in der Console an.</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return scriptIncludes(">") },
    function() { return valueEquals(lives, "lives", 4) },
    function() { return innerTextEquals("statid", "Gesundheit: 100 - Leben: 4") },
    //function() { return consoleContains("Gesundheit: 100 - Leben: 4") }, TODO: Console abfangen und prüfen
    function() { return scriptIncludes("<=") },
    function() { return valueEquals(health, "health", 80) },
    function() { return scriptIncludes("===") },
    function() { return valueEquals(strength, "strength", 15) }    
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();