import { validate, localVarExists, scriptIncludes, isType, globalVarExists } from '../check_helper.js';

let exerciseID = "16_verzweigung_bugshoot";

let validationFuncs = [
    function() { return globalVarExists("startTime") },
    function() { return isType(startTime, "startTime", "number") },
    function() { return globalVarExists("roundTime") },
    function() { return isType(roundTime, "roundTime", "number") },
    function() { return globalVarExists("best") },
    function() { return isType(best, "best", "number") },
    function() { return globalVarExists("bugCount") },
    function() { return isType(bugCount, "bugCount", "number") },
    function() { return scriptIncludes(">=") },
    function() { return scriptIncludes("fieldEl.innerHTML") },
    function() { return scriptIncludes("<") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };