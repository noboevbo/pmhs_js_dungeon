import { isFunction, scriptIncludes, valueEquals } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "26_funktionen";

let instructions = `
<ol>
<li>Definiere eine Funktion mit dem Namen <i>summeBerechnen</i>, die als Parameter das Array <i>arr</i> übernimmt.
  <ul>
    <li>Die Funktion deklariert die lokale Variable <i>summe</i> und initialisiert sie mit 0</li>
    <li>Eine for-Schleife durchläuft das Array von i = 0, solange i kleiner ist als die Länge von <i>arr</i>, wobei <i>i</i> in jedem Schritt inkrementiert wird.</li>
    <li>In jedem Schleifendurchlauf wird zur Variablen <i>summe</i> der Wert von <i>arr</i> an der Stelle <i>i</i> addiert.</li>
    <li>Anschließend wird <i>summe</i> als Ergebnis der Funktion zurückgegeben.  
  </ul>
</li>
<li>Definiere eine Funktion mit dem Namen <i>summeAusgaben</i> und dem Übergabeparameter <i>sum</i>
    <ul>
        <li>Rufe die Funktion <i>alert</i> auf und übergib ihr als Parameter den String "Summe " an den du den Parameter <i>sum</i> anhängst.</li>
    </ul>
</li>
</ol>
`;

let tips = [
  {
    level: 1,
    title: "Funktionsdefinition schreiben",
    content: "Nach dem Schlüsselwort <i>function</i> folgt der Name der Funktion. Anschließend werden in runden Klammern () die Parameter aufgeführt. Danach folgt in geschweiften Klammern {} der Anweisungsblock."
  },
  {
    level: 2,
    title: "Werte zurückgeben",
    content: "Rückgabewerte werden nach dem Signalwort <i>return</i> angegeben. Die Werte können dabei in Variablen stehen oder direkt berechnet werden."
  },
  {
    level: 3,
    title: "Länge und Zugriff auf Array",
    content: "Mit der Eigenschaft <i>arr.length</i> kannst du die Länge eines Arrays auslesen. Mit dem Index in eckigen Klammern [] kannst du auf eine bestimmte Position im Array zugreifen. Der Index beginnt bei 0. z.B. arr[2] gibt die dritte Position an."
  },
 ];

let validationFuncs = [
    function() { return isFunction("summeBerechnen")},
    function() { return isFunction("summeAusgeben")},
    function() { return scriptIncludes("for")},
    function() { return scriptIncludes("i++")},
    function() { return scriptIncludes("arr.length")},
    function() { return valueEquals(erg, "erg", 19)}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();