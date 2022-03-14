import { validate, localVarExists, scriptIncludes, isType } from '../check_helper.js';

let exerciseID = "18_while_durchschnitt";

let validationFuncs = [
    function() { return localVarExists(eingabe, "eingabe") },
    function() { return isType(eingabe, "eingabe", "string") },
    function() { return localVarExists(i, "i") },
    function() { return isType(i, "i", "number") },
    function() { return localVarExists(n, "n") },
    function() { return isType(n, "n", "number") },
    function() { return localVarExists(sum, "sum") },
    function() { return isType(sum, "sum", "number") },
    function() { return scriptIncludes("while")},
    function() { return scriptIncludes(">=")}
]

window.onload = function() { validate(exerciseID, validationFuncs) };