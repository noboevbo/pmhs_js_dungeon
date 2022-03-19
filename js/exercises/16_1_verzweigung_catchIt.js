import { scriptIncludes, isType, globalVarExists, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "16_1_verzweigung_catchIt";

let instructions = `
<ol>
<li>Deklariere die globalen Variablen <i>score</i> und <i>seconds</i> und initialisiere beide mit 0.</li>
<li>Füge in der Funktion <i>moveIt</i> Bedingte Anweisungen ein: Wenn <i>seconds</i> größer ist als 30 (Zeit abgeleufen), dann wird das Spiel mit Hilfe der Funktion <a href="https://www.mediaevent.de/javascript/setinterval.html"><code>clearInterval(timer)</code></a>            angehalten und anschließend eine Meldung in einem Alert-Dialog ausgegeben, die den erreichten score enthält.</li>
<li>Passe die Funktion <i>hit</i> so an, dass der Wert der Variable <i>score</i> um eins erhöht wird (nutze dazu die kürzest mögliche Schreibweise) und anschließend der innerText des <i>countEl</i> diesen Wert erhält.</li>
<li>Ergänze die Funktion <i>restart</i> und setze die Variablen <i>timer</i>, <i>score</i> und <i>seconds</i> auf ihre Anfangswerte zurück.</li>
<li>Teste das Spiel!</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return globalVarExists("score") },
    function() { return isType(score, "score", "number") },
    function() { return valueEquals(score, "score", 0) },
    function() { return globalVarExists("seconds") },
    function() { return isType(seconds, "seconds", "number") },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("clearInterval(timer)") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("score++") },
    function() { return scriptIncludes("countEl.innerText") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();