import { localVarExists, scriptIncludes, isType, globalVarExists } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "16_verzweigung_bugshoot";

let instructions = `
<ol>
<li>Deklariere globale Variablen <i>startTime</i>, <i>roundTime</i>, <i>best</i> und <i>bugCount</i>.
    <ul>
        <li>Initialisiere <i>startTime</i> mit <code><a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now">Date.now()</a></code></li>
        <li>Initialisiere <i>roundTime</i> mit 0. In dieser Variable wird deine Rundenzeit in Millisekunden gemessen.</li>
        <li>Initialisiere <i>best</i> mit <code><a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE">Number.MAX_VALUE</a></code>. Hier merkst du dir die Bestzeit. Zu Beginn sollte es ein sehr hoher
            Wert sein :-)</li>
        <li>Initialisiere <i>bugCount</i> mit 10.</li>
    </ul>
</li>
<li>Füge in der Funktion <i>bugSpawn</i> eine Bedingung ein: Wenn <i>bugCount</i> größer ist als 0 werden Käfer erzeugt, ansonsten ist die Runde beendet.</li>
<li>Verändere die entsprechende Code-Zeile so, dass im <code>innerText</code> des Elements <i>timerEl</i> die vergangene Zeit anhand der Startzeit errechnet und angezeigt wird.</li>
<li>Passe die Funktion <i>hit</i> so an, dass: Wenn bugCount gleich 0 ist, dann weise der Variable <i>roundTime</i> die aktuell verstrichene Zeit zu (siehe oben) und setze <code>innerHTML</code> von <i>fieldEL</i> auf "" damit alle Bugs verschwinden.</li>
<li>Füge im else-Zweig in der Funktion <i>bugSpawn</i> eine verschachtelte Verzweigung ein: Wenn <i>roundTime</i> kleiner ist als <i>best</i>, dann weise <i>best</i> den Wert von <i>roundTime</i> zu und weise dem <code>innerText</code> von <i>bestEl</i>            den neuen Wert von best zu.</li>
<li>Ergänze die Funktion <i>restart</i> und setze die Variablen <i>startTime</i>, <i>roundTime</i> und <i>bugCount</i> auf ihre Anfangswerte zurück.</li>
<li>Teste das Spiel!</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return globalVarExists("startTime") },
    function() { return isType(startTime, "startTime", "number") },
    function() { return globalVarExists("roundTime") },
    function() { return isType(roundTime, "roundTime", "number") },
    function() { return globalVarExists("best") },
    function() { return isType(best, "best", "number") },
    function() { return globalVarExists("bugCount") },
    function() { return isType(bugCount, "bugCount", "number") },
    function() { return scriptIncludes(">=") },
    function() { return scriptIncludes("fieldEl.innerHTML") },
    function() { return scriptIncludes("<") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();