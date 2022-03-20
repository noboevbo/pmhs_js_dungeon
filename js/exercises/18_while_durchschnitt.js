import { localVarExists, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "18_while_durchschnitt";

let instructions = `
<ol>
<li>Deklariere eine lokale Variable <i>eingabe</i> und initialisiere sie indem du eine Abfrage (prompt) mit dem Text "Wie viele Zahlen werden eingegeben?".</li>
<li>Deklariere eine lokale Variable <i>n</i> und initialisiere sie mit dem Rückgabewert der Funktion <code>Number(eingabe)</code> der du die Variable <i>eingabe</i> übergibst, um ihn in eine Zahl umzuwandeln.</li>
<li>Deklariere eine lokale Variable <i>i</i> und initialisiere sie mit dem Wert 1.</li>
<li>Deklariere eine lokale Variable <i>sum</i> und initialisiere sie mit dem Wert 0.</li>
<li>Definiere eine While-Schleife, die wiederholt wird solange n größer oder gleich i ist.
    <ul>
        <li>Weise der Variablen <i>eingabe</i> den Rückgabewert der Abfrage (prompt) mit dem Text "Zahl"+i.</li>
        <li>Addiere zur Variable <i>sum</i> den Wert von <i>eingabe</i>, den du mit der Funktion <code>Number(eingabe)</code> umwandelst.</li>
        <li>Erhöhe den Wert von <i>i</i> um eins.</li>
    </ul>
</li>
<li>Teile <i>sum</i> durch <i>n</i> und gib das Ergebnis in einem alert-Dialog aus.</li>
</ol>
`;

let tips = [{
    level: 1,
    title: "Eingabe mit prompt",
    content: "Mit der Funktion prompt('Meldung') kann ein Eingabedialog aufgerufen werden, der die Meldung anzeigt. Der Rückgabewert der Funktion ist ein String, der Vom Benutzer eingegeben wurde z.B. let str = prompt('Wert eingeben')."
  },
  {
    level: 2,
    title: "Konvertierung in Number",
    content: "Mit der Funktion Number('2.5') lässt sich der String in eine Zahl umwandeln. z.B. let n = Number(str)."
  },
  {
    level: 3,
    title: "Berechnung und Ausgabe (Lösung)",
    content: "alert('Hallo Welt!)' gibt den übergebenen String in einem Dialogfenster aus. Mit der Formel alert(sum/n) wird das berechnete Ergebnis ausgegeben."
  }];

let validationFuncs = [
    function() { return localVarExists(eingabe, "eingabe") },
    function() { return isType(eingabe, "eingabe", "string") },
    function() { return localVarExists(i, "i") },
    function() { return isType(i, "i", "number") },
    function() { return localVarExists(n, "n") },
    function() { return isType(n, "n", "number") },
    function() { return localVarExists(sum, "sum") },
    function() { return isType(sum, "sum", "number") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes(">=")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();