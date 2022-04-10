import { isFunction, scriptIncludes, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "26_funktionen";

let instructions = `
<ol>
<li>Definiere eine Funktion mit dem Namen <i>berechne</i> ohne Parameter oder Rückgabewert.
  <ul>
    <li>Die Funktion deklariert die lokalen Variable <i>a</i>, <i>b</i> und <i>c</i> und initialisiert sie jeweils mit dem Inhalt der Eingabefelder (siehe IDs) als Number.</li>
    <li>Schreibe in den innerText des Elements mit der ID <i>ergebnis</i> den Rückgabewert der Funktion <i>mitternacht</i> mit den Parametern a, b und c.</li>
  </ul>
</li>
<li>Definiere eine Funktion mit dem Namen <i>mitternacht</i> und den Übergabeparametern <i>a</i>, <i>b</i> und <i>c</i>.
    <ul>
        <li>Deklariere die lokalen Variablen x1 und x2 und initialisiere sie mit je einem Teil der Mitternachtsformel bestehend aus <i>a</i>, <i>b</i> und <i>c</i>.</li>
        <li>Gebe das Ergebnis x1 = ..., x2 = ... als String mit den berechneten Werten zurück</li>
    </ul>
</li>
</ol>
`;

let tips = [
  {
    level: 1,
    title: "Funktionsdefinition berechne",
    content: "Nach dem Kopf er Funktion <i>function berechne()</i> folgt der Anweisungsblock mit den lokalen Varialben z.B. <i>let a = document.getElementById('a').valueAsNumber</i> und der Zuweisung des Ergebnis als Rückgabewert der Funktion <i>document.getElementById('ergebnis').innerText = mitternacht(a,b,c)</i>"
  },
  {
    level: 2,
    title: "Berechnung der Mitternachtsformel",
    content: "Um x1 und x2 zu berechnen muss die Mitternachtsformel einmal mit + und mit - berechnet werden. Mit der Funktion <i>Math.sqrt()</i> kann die Wurzel einer Zahl berechnet werden. z.B. <i>let x1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a)</i>"
  },
  {
    level: 3,
    title: "Rückgabe der Ergebnisse",
    content: "Es kann nur ein Wert zurückgegeben werden, darum ist es in diesem Fall sinnvoll aus den beiden Werten einen String zusammenzusetzen z.B. <i>return 'x1 = '+x1+', x2 = '+x2</i>"
  },
 ];

let validationFuncs = [
    function() { return isFunction("berechne")},
    function() { return isFunction("mitternacht")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();