import { validate, getSuccessResultObj, getFailResultObj, localVarExists, valueEquals } from '../check_helper.js';

let exerciseID = "08_input_field_2";
let esprima = window.parent.esprima;
let estraverse = window.parent.estraverse

function test() {
  var s = buttonGeklickt + '';
  var result = esprima.parse(s);
  estraverse.traverse(result, {
    enter: function(node){ // VariableDeclaration = let
      if (node.type === 'VariableDeclarator'){
        let varname = node.id.name;
        console.log(`Encountered variable declaration of ${varname}.`);
        if (node.init.type === "Literal") {
          let varvalue = node.init.value;
          console.log(`It is initialized with value: ${varvalue}.`);
        }
        // bei let spielername = document.getElementById("eingabe1").value;
        // node.init.type === "StaticMemberExpression"
        // node.init.property === 'value'
        // node.init.object.arguments[0].type = Literal, value = eingabe1
      }
    }
  });
  return getSuccessResultObj();
}


let validationFuncs = [
  function() { return test() },
]


window.onload = function() { validate(exerciseID, validationFuncs) };
