import { validate, scriptIncludes, isType, globalVarExists, valueEquals } from '../check_helper.js';

let exerciseID = "16_1_verzweigung_catchIt";

let validationFuncs = [
    function() { return globalVarExists("score") },
    function() { return isType(score, "score", "number") },
    function() { return valueEquals(score, "score", 0) },
    function() { return globalVarExists("seconds") },
    function() { return isType(seconds, "seconds", "number") },
    function() { return scriptIncludes(">") },
    function() { return scriptIncludes("clearInterval(timer)") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("score++") },
    function() { return scriptIncludes("countEl.innerText") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };