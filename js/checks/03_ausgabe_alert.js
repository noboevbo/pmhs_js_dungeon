import { validate, scriptIncludes, isConst, isType } from '../check_helper.js';

let exerciseID = "03_ausgabe_alert";

let validationFuncs = [
  function() { return isConst("id") },
  function() { return isType(id, "id", "number") },
  function() { return scriptIncludes("alert(") }
]

window.onload = function() { validate(exerciseID, validationFuncs) };



