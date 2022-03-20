import { localVarExists, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "18_2_while_mailstring";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>i</i> und initialisiere sie mit dem Wert 0.</li>
<li>Solange i kleiner ist als die länge der Variable <i>str</i>:
    <ul>
        <li>Wenn die Variable <i>str</i> an der Position <i>i</i> dem Wert '@' entspricht, dann brich die Schleife an dieser Stelle ab.</li>
        <li>Inkrementiere <i>i</i>.</li>
    </ul>
</li>
<li>Wenn der Wert von <i>i</i> der Länge der Variable <i>str</i> entspricht, dann gib in einem Alert-Dialog 'Keine Mailadresse' aus.</li>
<li>Ansonsten gib in einem Alert-Dialog 'E-Mail okay.' aus</li>
</ol>
`;

let tips = [
  {
    level: 1,
    title: "String als Array",
    content: "Ein String kann wie ein Array einzelner Zeichen verstanden werden. Entsprechend kann mit <i>str.length</i> auf dessen Länge zugegriffen werden oder mit str[3] auf die vierte Position im String."
  },
  {
    level: 2,
    title: "Abbrechen einer Schleife",
    content: "Mit dem Befehl <a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/break'><i>break</i></a> wird die aktuelle Schleife abgebrochen."
  },
 ];

let validationFuncs = [
    function() { return localVarExists(i, "i") },
    function() { return isType(i, "i", "number") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes("<")},
    function() { return scriptIncludes("str.length")},
    function() { return scriptIncludes("str[i]")},
    function() { return scriptIncludes("if")},
    function() { return scriptIncludes("===")},
    function() { return scriptIncludes("break")},
    function() { return scriptIncludes("i++")},
    function() { return scriptIncludes("alert")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();