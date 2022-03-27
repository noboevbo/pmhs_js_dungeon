import { localVarExists, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "24_for-counter";

let instructions = `
<ol>
<li>Die Zählvariable <i>i</i> wird mit 0 initialisiert und solange <i>i</i> kleiner ist als 50 wird i in jedem Durchlauf um 1 erhöht:
    <ul>
        <li>Gib auf der Console die Quadratzahl von <i>i</i> aus.</li>
    </ul>
</li>
</ol>
`;

let tips = [
  {
    level: 1,
    title: "for-Schleife",
    content: "Nach dem Schlüsselwort <i>for</i> in runden Klammern () wird im Schleifenkopf zuerst eine Zählvariable deklariert und initialisiert, dann eine Bedingung angegeben unter der eine Wiederholung des Anweisungsblocks durchgeführt wird. Anschließend wird noch eine Schrittweite angegeben z.B. for(let j = 0; j <= 10; j++) {...} "
  },
  {
    level: 2,
    title: "Ausgabe auf Console",
    content: "Mit der Funktion <i>console.log('Ausgabe')</i> kann ein String auf der Console ausgegeben werden."
  },
  {
    level: 3,
    title: "Berechnung und Ausgabe in einem",
    content: "Zahlen in einer Consolen-Ausgabe werden automatisch in Strings umgewandelt. Dabei kann auch direkt eine Berechnung durchgeführt werden. z.B. <i>console.log(i*i)</i>"
  },
 ];

let validationFuncs = [
    function() { return scriptIncludes("for")},
    function() { return scriptIncludes("let")},
    function() { return scriptIncludes("<")},
    function() { return scriptIncludes("i++")},
    function() { return scriptIncludes("console.log")},
    function() { return scriptIncludes("i*i")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();