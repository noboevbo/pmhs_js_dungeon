import { validate, scriptIncludes, valueEquals, innerTextEquals, consoleContains } from '../check_helper.js';

let exerciseID = "13_bedingungen";

let validationFuncs = [
    function() { return scriptIncludes(">") },
    function() { return valueEquals(lives, "lives", 4) },
    function() { return innerTextEquals("statid", "Gesundheit: 100 - Leben: 4") },
    //function() { return consoleContains("Gesundheit: 100 - Leben: 4") }, TODO: Console abfangen und prüfen
    function() { return scriptIncludes("<=") },
    function() { return valueEquals(health, "health", 80) },
    function() { return scriptIncludes("===") },
    function() { return valueEquals(strength, "strength", 15) }    
]

window.onload = function() { validate(exerciseID, validationFuncs) };