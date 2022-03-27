import { localVarExists, scriptIncludes, isType, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "25_for-groesste";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>max</i> und initialisiere sie mit 0.</li>
<li>Die Zählvariable <i>i</i> wird mit 0 initialisiert und solange <i>i</i> kleiner ist als die Länge des Array <i>highscore</i> wird i in jedem Durchlauf um 1 erhöht:
    <ul>
        <li>Wenn <i>highscore</i> an der Stelle <i>i</i> größer ist als der Wert von <i>max</i>, dann weise <i>max</i> den Wert von <i>highscore</i> an der Stelle <i>i</i> zu.</li>
    </ul>
</li>
<li> Gib den Wert von <i>max</i> auf der Console aus.</li>
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
    title: "Länge und Zugriff auf Array",
    content: "Mit der Eigenschaft <i>highscore.length</i> kannst du die Länge eines Arrays auslesen. Mit dem Index in eckigen Klammern [] kannst du auf eine bestimmte Position im Array zugreifen. Der Index beginnt bei 0. z.B. highscore[2] gibt die dritte Position an."
  },
 ];

let validationFuncs = [
  function() { return localVarExists(max, "max")},
  function() { return isType(max, "max", "number")},
    function() { return scriptIncludes("for")},
    function() { return scriptIncludes("let")},
    function() { return scriptIncludes("<")},
    function() { return scriptIncludes("i++")},
    function() { return scriptIncludes("console.log")},
    function() { return scriptIncludes("")},
    function() { return valueEquals(max, "max", 42)}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();