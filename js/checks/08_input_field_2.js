import { validate, getSuccessResultObj, getFailResultObj, localVarExists, valueEquals } from '../check_helper.js';

let exerciseID = "08_input_field_2";
let esprima = window.parent.esprima;
let estraverse = window.parent.estraverse

function test() {
  var s = buttonGeklickt + '';
  var result = esprima.parse(s);
  estraverse.traverse(result, {
    enter: function(node){
      if (node.type === 'VariableDeclarator'){
        console.log('Encountered variable declaration of', node.id.name);
      }
    }
  });
  return getSuccessResultObj();
}


let validationFuncs = [
  function() { return test() },
]


window.onload = function() { validate(exerciseID, validationFuncs) };
