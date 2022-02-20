import { validate, innerTextEquals } from '../check_helper.js';

let exerciseID = "04_html_el_man_1";

let validationFuncs = [
  function() { return innerTextEquals("idvonueberschrift", "Hi") },
]

window.onload = function() { validate(exerciseID, validationFuncs) };



