import { scriptIncludes } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "15_verzweigung_1x1";

let instructions = `
Erweitere die Funktion <i>loeseMultipl()</i>:
<ol>
    <li>Deklariere eine lokale Variable <i>erg</i> und initialisiere sie mit der Eingabe des Benutzers aus dem Feld mit der <i>id: eingabe1</i> als number (vauelAsNumber).</li>
    <li>Lass eine Entscheidung treffen:
        <ul>
            <li>Wenn <i>erg</i> gleich ist wie das Ergebnis der Multiplikation von <i>zufall1</i> und zufall2, dann ...
                <ul>
                    <li>Gib in einem Alert-Dialog "Super, das war richtig! Nächste Aufgabe..." aus.</li>
                    <li>Rufe die Funktion <i>startMultipl()</i> auf, um neue Zufallszahlen zu generieren.</li>
                </ul>
            </li>
            <li>... ansonsten gib in einem Alert-Dialog aus "Leider falsch. Versuch es nochmal!"</li>
        </ul>
    </li>
    <li>Teste das Spiel mit richtigen und falschen Ergebnissen!</li>
</ol>
`;

let tips = [
    {
        level: 3,
        title: "Lösung anzeigen",
        content: `Die Lösung lautet: <xmp>
        let erg = document.getElementById("eingabe1").valueAsNumber;
        if (erg === (zufall1*zufall2)) {
            alert("Richtig");
            startMultipl();
        } else {
            alert("Leider falsch. Versuch es nochmal!");
        }
        </xmp>`,
        weblinks: [],
        contentIsHTML: true
    }

];

let validationFuncs = [
    function() { return scriptIncludes("erg") },
    function() { return scriptIncludes("document.getElementById(") },
    function() { return scriptIncludes("valueAsNumber") },
    function() { return scriptIncludes("if") },
    function() { return scriptIncludes("===") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("else") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();