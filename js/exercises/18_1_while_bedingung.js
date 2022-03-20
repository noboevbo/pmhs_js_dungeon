import { localVarExists, scriptIncludes, isType, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "18_while_durchschnitt";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>i</i> und initialisiere sie mit dem Wert 0.</li>
<li>Deklariere eine lokale Variable <i>n</i> und initialisiere sie mit dem Wert 0.</li>
<li>Definiere eine While-Schleife, die wiederholt wird solange i kleiner ist als 100.
    <ul>
        <li>Erhöhe den Wert von <i>i</i> um eins.</li>
        <li>Weise der Variablen <i>n</i> den Wert von <i>n</i> + <i>i</i> zu.</li>
    </ul>
</li>
<li>Gib auf der Console den Wert von <i>n</i> aus.</li>
</ol>
`;

let tips = [{
    level: 1,
    title: "While-Schleifen definieren",
    content: "Eine While-Schleife wird mit dem Schlüsselwort <i>while</i> gefolgt von einer Bedingungn in () definiert. Der Schleifenkörper in {} wird wiederholt solange die Bedingung wahr ist."
  },
  {
    level: 2,
    title: "Schnelles Addieren und Inkrementieren",
    content: "Zu einer Variable kann ein Wert schnell addiert werden, indem man ein += hiner den Variablennamen schreibt z.B. i += 5 entsrpciht i = i + 5. Eine Variable kann inkrementiert (um eins erhöht) werden indem man hinter den Variablennamen ein ++ schreibt z.B. i++ entsprich i += 1. Dassselbe gilt auch für die Subtraktion bzw. Dekrementieren."
  },
  {
    level: 3,
    title: "Ausgabe auf Console",
    content: "Mit der Funktion console.log('Hallo Welt') lässt sich der String auf der Console ausgeben. Mit console.log(i) gibst du den Wert der Variablen aus."
  }];

let validationFuncs = [
    function() { return localVarExists(i, "i") },
    function() { return isType(i, "i", "number") },
    function() { return localVarExists(n, "n") },
    function() { return isType(n, "n", "number") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes("<")},
    function() { return valueEquals(n, "n", 5050)},
    function() { return scriptIncludes("console.log(n)")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();