import { validate, localVarExists, scriptIncludes, isType } from '../check_helper.js';

let exerciseID = "18_while_durchschnitt";

let validationFuncs = [
    function() { return localVarExists(eingabe, "eingabe") },
    function() { return isType(eingabe, "eingabe", "String") },
    function() { return localVarExists(i, "i") },
    function() { return isType(i, "i", "Number") },
    function() { return localVarExists(n, "n") },
    function() { return isType(n, "n", "Number") },
    function() { return localVarExists(sum, "sum") },
    function() { return isType(sum, "sum", "Number") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes(">=")}
]

window.onload = function() { validate(exerciseID, validationFuncs) };