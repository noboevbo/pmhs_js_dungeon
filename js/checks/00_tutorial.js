import { validate, getSuccessResultObj } from '../check_helper.js';

let exerciseID = "00_tutorial";

function visited() {
    return getSuccessResultObj();
}

let validationFuncs = [
    function() { return visited() }
]

window.onload = function() { validate(exerciseID, validationFuncs) };