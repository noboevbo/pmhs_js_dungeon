import { validate, scriptIncludes, valueEquals, consoleContains } from '../check_helper.js';

let exerciseID = "13_bedingungen";

let validationFuncs = [
    function() { return valueEquals(health, "health", 80) },
    function() { return valueEquals(lives, "lives", 4) },
    function() { return valueEquals(strength, "strength", 15) },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("<=") },
    function() { return scriptIncludes("===") },
   // function() { return consoleContains("Gesundheit: 100 - Leben: 4") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };