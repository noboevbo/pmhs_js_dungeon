import { validate, localVarExists, scriptIncludes, isType, globalVarExists } from '../check_helper.js';

let exerciseID = "15_verzweigung";

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

window.onload = function() { validate(exerciseID, validationFuncs) };