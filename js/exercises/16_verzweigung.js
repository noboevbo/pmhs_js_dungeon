import { localVarExists, scriptIncludes, isType, globalVarExists } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "16_verzweigung";

let instructions = `
<ol>
<li>Erweitere die Funktion aus "Bedingte Anweisungen", so dass man erst nach 3 Runden gewonnen hat.</li>
<li>Deklariere eine globale Variable <i>round</i> und initialisiere sie mit 0.</li>
<li>Implementiere die Funktion <i>zahlenraten()</i> wie beschrieben. Sie liest die Eingabe
    des Benutzers aus dem Feld mit der <i>id: eingabe1</i> als number (vauelAsNumber) in die lokale Vairable
    <i>ein</i> und entscheidet:
    <ul>
        <li>Wenn <i>round</i> kleiner ist als 3, dann ... <ul>
                <li>Wenn die Zahl in <i>ein</i> gleich ist wie <i>zufall</i>, dann gib in einem <i>alert</i>
                    "Runde gewonnen!" aus, weise <i>zufall</i> einen neuen Zufallswert zu und inkrementiere die
                    Variable <i>round</i>. Wenn <i>round</i> nun den Wert 3 hat, dann gib in einem <i>alert</i>
                    aus "Spiel gewonnen!", ansonsten gib in einem <i>alert</i> "Nächste Runde: " gefolgt vom
                    Wert der Variablen <i>round</i> aus. Beende anschließend in jedem Fall die Funktion mit
                    <em>return true</em>.</li>
                <li>Wenn die Zahl in <i>ein</i> größer ist als <i>zufall</i>, dann gib in einem <i>alert</i>
                    "Zahl ist zu groß!" aus. Ansonsten gibt in einem <i>alert</i> "Zahl ist zu klein!" aus.
                </li>
            </ul>
        </li>
        <li>... ansonsten gib in einem <i>alert</i> aus "Du hast das Spiel bereits besiegt!" und beende die
            Funktion mit <em>return true</em>.</li>
    </ul>
</li>
<li>Teste das Spiel!</li>
</ol>

`;

let tips = [];

let validationFuncs = [
    function() { return globalVarExists("round") },
    function() { return isType(round, "round", "number") },
    //function() { return localVarExists(ein, "ein") }, TODO: lässt sich noch nicht prüfen wegen Scope
    //function() { return isType(ein, "ein", "number") },
    function() { return scriptIncludes("document.getElementById(") },
    function() { return scriptIncludes("valueAsNumber") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("return true") },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("===") }
]

let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();