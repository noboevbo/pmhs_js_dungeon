import { validate, hasCorrectStyleValue } from '../check_helper.js';

let exerciseID = "05_html_el_man_2";

let validationFuncs = [
  function() { return hasCorrectStyleValue("idvonueberschrift", "color", "red") },
]

window.onload = function() { validate(exerciseID, validationFuncs) };

// Tests
// document.getElementById("idvonueberschrift").style.color = "red";