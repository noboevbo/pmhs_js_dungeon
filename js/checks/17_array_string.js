import { validate, isConst, scriptIncludes, isType } from '../check_helper.js';

let exerciseID = "17_array_string";

let validationFuncs = [
    function() { return isConst("farben") },
    function() { return isType(farben, "farben", "object") },
    function() { return isType(zufallsFarbe, "zufallsFarbe", "function")},
    function() { return scriptIncludes("Math.floor")},
    function() { return scriptIncludes("Math.random")},
    function() { return scriptIncludes("document.body.style.backgroundColor")}
]

window.onload = function() { validate(exerciseID, validationFuncs) };