import { validate, localVarExists, globalVarExists, valueEquals, isType, innerTextEquals } from '../check_helper.js';

let exerciseID = "10_datentyp_string";

let validationFuncs = [
    function() { return localVarExists(player1, "player1") },
    function() { return valueEquals(player1, "player1", "Mario") },
    function() { return isType(player1, "player1", "string") },
    function() { return localVarExists(player2, "player2") },
    function() { return valueEquals(player2, "player2", "Sonic") },
    function() { return isType(player2, "player2", "string") },
    function() { return globalVarExists("kampf") },
    function() { return isType(kampf, "kampf", "string") },
    function() { return valueEquals(kampf, "kampf", "Mario vs. Sonic") },
    function() { return innerTextEquals("kampfid", "Mario vs. Sonic") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };