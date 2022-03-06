import { validate, scriptIncludes } from '../check_helper.js';

let exerciseID = "15_1_verzweigung_1x1";

let validationFuncs = [
    function() { return scriptIncludes("erg") },
    function() { return scriptIncludes("document.getElementById(") },
    function() { return scriptIncludes("valueAsNumber") },
    function() { return scriptIncludes("if") },
    function() { return scriptIncludes("===") },
    function() { return scriptIncludes("alert(") },
    function() { return scriptIncludes("else") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };