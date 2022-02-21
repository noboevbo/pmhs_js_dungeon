import { validate, localVarExists, scriptIncludes, isType } from '../check_helper.js';

let exerciseID = "14_bedingte_anweisungen";

let validationFuncs = [
    //function() { return localVarExists(ein, "ein") }, TODO: lässt sich noch nicht prüfen wegen Scope
    //function() { return isType(ein, "ein", "number") },
    function() { return scriptIncludes("document.getElementById(") },
    function() { return scriptIncludes("valueAsNumber") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("return true") },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("===") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };