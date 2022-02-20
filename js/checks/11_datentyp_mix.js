import { validate, localVarExists, globalVarExists, isType } from '../check_helper.js';

let exerciseID = "11_datentyp_mix";

let validationFuncs = [
    function() { return globalVarExists("score1") },
    function() { return isType(score1, "score1", "number") },
    function() { return globalVarExists("score2") },
    function() { return isType(score2, "score2", "number") },
    function() { return globalVarExists("tmp1") },
    function() { return isType(tmp1, "tmp1", "number") },
    function() { return globalVarExists("tmp2") },
    function() { return isType(tmp2, "tmp2", "number") },
    function() { return globalVarExists("kampf") },
    function() { return isType(kampf, "kampf", "string") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };