import { isConst, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "22_array_string";

let instructions = `
<ol>
<li>Deklariere eine konstante Variable <i>farben</i> und initialisiere sie als Array mit
    den Werten "red", "green", "blue".</li>
<li>Definiere eine Funktion mit dem Namen <i>zufallsFarbe()</i> mit folgendem Inhalt:
    <ul>
        <li>Deklariere eine lokale Variable <i>zufall</i> und initialisiere sie mit einer Zufallszahl zwischen 0 und 3, die du auf die nächste ganze Zahl abrundest.</li>
        <li>Weise dem <a href="https://developer.mozilla.org/de/docs/Web/API/Document/body"><i>body</i>-Element</a> im style.backgroundColor Attribut den Wert des Array <i>farben</i> an der Stelle <i>zufall</i> zu.</li>
    </ul>
<li>Passe den Button mit dem Text <i>Zufallsfarbe</i> so an, dass er die Funktion <i>zufallsFarbe()</i> bei einem Klick-Ereignis aufruft.</li>
</ol>
`;

let tips = [{
    level: 1,
    title: "Arrays deklarieren und initialisieren",
    content: "Ein <a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array'>Array</a> kann in der Literalschreibweise mit [] eckigen Klammern deklariert und initialisiert werden. Die Werte des Arrays werden mit Komma getrennt aufgelistet."
  },
  {
    level: 2,
    title: "Funktionen definieren und nutzen",
    content: "Vorgefertigte Funktionen des Browsers z.B. von Math eine Zufalszahl zwischen 0 und 1 mit <a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random'>Math.random()</a> oder <a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor'>Math.floor(2.5)</a> zum abrunden auf die nächst kleinere Zahl 2. Du kannst aber mit dem Schlüsselwort <i>function</i> gefolgt vom Namen der Funktion und einem entsprechenden Codeblock {} auch eigene Funktionen definieren, die du immer wieder aufrufen kannst. z.B. function zufallsFarbe(){ ... }"
  },
  {
    level: 3,
    title: "Farbe des Body-Elements ändern",
    content: "Mit document.body.style.backgroundColor = 'red' lässt sich die Hintergrundfarbe des Body-Elements ändern. Weise ihm ein Array-Element zu."
  }];

function isVarArray(a, n) {
    if (Array.isArray(a)) {
      return getSuccessResultObj();
    } else {
      return getFailResultObj("Die Variable ${n} ist kein Array.")
    }
  }
  

let validationFuncs = [
    function() { return isConst("farben") },
    function() { return isVarArray(farben, "farben")},
    function() { return isType(zufallsFarbe, "zufallsFarbe", "function")},
    function() { return scriptIncludes("Math.floor")},
    function() { return scriptIncludes("Math.random")},
    function() { return scriptIncludes("document.body.style.backgroundColor")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();