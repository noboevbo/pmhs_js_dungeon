import { validate, localVarExists, globalVarExists, valueEquals, isType } from '../check_helper.js';

let exerciseID = "09_datentyp_number";

let validationFuncs = [
    function() { return localVarExists(zahl1, "zahl1") },
    function() { return valueEquals(zahl1, "zahl1", 10) },
    function() { return isType(zahl1, "zahl1", "number") },
    function() { return localVarExists(zahl2, "zahl2") },
    function() { return valueEquals(zahl2, "zahl2", 4.1) },
    function() { return isType(zahl2, "zahl2", "number") },
    function() { return globalVarExists("ergebnis") },
    function() { return isType(ergebnis, "ergebnis", "number") },
    function() { return valueEquals(ergebnis, "ergebnis", 42) }
]

window.onload = function() { validate(exerciseID, validationFuncs) };