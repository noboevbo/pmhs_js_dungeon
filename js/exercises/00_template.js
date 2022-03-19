import { validate } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "TODO: insert id";

let validationFuncs = [
  // TODO: add checks and return {result: xy, errorMessage: xy}, see check_helper for examples
  function() { return TODO }
]

let tips = [
  TODO
]

window.onload = function() { 
  window.parent.initializeTips(exerciseID, tips);
  validate(exerciseID, validationFuncs); 
};
