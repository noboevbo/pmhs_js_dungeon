import { isConst, scriptIncludes, isType } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "17_array_string";

let instructions = `
<ol>
<li>Deklariere eine konstante Variable <i>farben</i> und initialisiere sie als <a
        href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a> mit
    den Werten "red", "green", "blue".</li>
<li>Definiere eine Funktion mit dem Namen <i>zufallsFarbe()</i> mit folgendem Inhalt:
    <ul>
        <li>Deklariere eine lokale Variable <i>zufall</i> und initialisiere sie mit einer <a
                href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random">zufälligen
                Zahl</a> zwischen 0 und 3, die du auf die nächste ganze Zahl <a
                href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">abrundest</a>
        </li>
        <li>Weise dem <a href="https://developer.mozilla.org/de/docs/Web/API/Document/body"><i>body</i>-Element</a> im style.backgroundColor Attribut den Wert des Array <i>farben</i> an der Stelle <i>zufall</i> zu.</li>
    </ul>
<li>Passe den Button mit dem Text <i>Zufallsfarbe</i> so an, dass er die Funktion <i>zufallsFarbe()</i> bei einem Klick-Ereignis aufruft.</li>
</ol>
`;

let tips = [];

let validationFuncs = [
    function() { return isConst("farben") },
    function() { return isType(farben, "farben", "object") },
    function() { return isType(zufallsFarbe, "zufallsFarbe", "function")},
    function() { return scriptIncludes("Math.floor")},
    function() { return scriptIncludes("Math.random")},
    function() { return scriptIncludes("document.body.style.backgroundColor")}
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();