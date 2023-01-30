import { localVarExists, scriptIncludes, isType, getSuccessResultObj, getFailResultObj } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "21_array_numbers";

let instructions = `<p> Im folgenden sollen die sogenannten Fibonacci-Zahlen berechnet werden.</p>
<ol>
<li>Deklariere eine lokale Variable <i>fib</i> und initialisiere sie als Array mit
    den Werten 1, 1. </li>
    <li>Deklariere eine lokale Variable <i>i</i> und initialisiere sie mit 2.</li>
<li>Solange <i>i</i> kleiner ist als 10:
    <ul>
        <li>Weise dem Array <i>fib</i> and der Position <i>i</i> die Summe der Werte von <i>fib</i> an den Positionen <i>i-1</i> und <i>i-2</i> zu.</li>
        <li>Inkrementiere i.</li>
    </ul>
<li>Deklariere eine lokale Variable <i>ausgabe</i> und weise ihr einen String zu der die Länge des Arrays und den Inhalt des Arrays enthält.</li>
<li>Gib den Wert der Variablen <i>ausgabe</i> in einem Alert-Dialog aus.</li>
</ol>
`;

let tips = [{
    level: 1,
    title: "Arrays deklarieren und initialisieren",
    content: "Ein <a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array'>Array</a> kann in der Literalschreibweise mit [] eckigen Klammern deklariert und initialisiert werden. Die Werte des Arrays werden mit Komma getrennt aufgelistet."
  }
 ];

function isVarArray(a, n) {
    if (Array.isArray(a)) {
      return getSuccessResultObj();
    } else {
      return getFailResultObj("Die Variable ${n} ist kein Array.")
    }
  }
  

let validationFuncs = [
    function() { return localVarExists("fib") },
    function() { return isVarArray(fib, "fib")},
    function() { return localVarExists("i") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes("<")},
    function() { return scriptIncludes("fib[i]")},
    function() { return scriptIncludes("fib[i-1]")},
    function() { return scriptIncludes("fib[i-2]")},
    function() { return scriptIncludes("fib.length")},
    function() { return scriptIncludes("alert(")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();