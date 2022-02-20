import { validate, localVarExists, globalVarExists, scriptIncludes, valueEquals } from '../check_helper.js';

let exerciseID = "12_datentyp_bool_vergleich";

let validationFuncs = [
    function() { return localVarExists(score1, "score1") },
    function() { return valueEquals(score1, "score1", 42) },
    function() { return localVarExists(score2, "score2") },
    function() { return valueEquals(score2, "score2", 21) },
    function() { return localVarExists(wahr, "wahr") },
    function() { return valueEquals(wahr, "wahr", true) },
    function() { return globalVarExists("test1") },
    function() { return valueEquals(test1, "test1", false) },
    function() { return globalVarExists("test2") },
    function() { return valueEquals(test2, "test2", true) },
    function() { return globalVarExists("test3") },
    function() { return valueEquals(test3, "test3", true) },
    function() { return scriptIncludes("!==") },
    function() { return scriptIncludes("<=") },
    function() { return scriptIncludes("===") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };