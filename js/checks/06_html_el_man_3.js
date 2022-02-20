import { validate, hasCorrectStyleValue } from '../check_helper.js';

let exerciseID = "06_html_el_man_3";

let validationFuncs = [
  function() { return hasCorrectStyleValue("idvonueberschrift", "backgroundColor", "yellow") },
]

window.onload = function() { validate(exerciseID, validationFuncs) };