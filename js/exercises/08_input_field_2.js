import { getSuccessResultObj, scriptIncludes } from "../exercise/validation_helper.js";import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "08_input_field_2";

let instructions = `
<ol>
<li>Füge folgende Anweisungen in die Funktion <em>buttonGeklickt()</em> ein</li>
<li>Greife auf das HTML Element des Eingabefeldes (id: <em>eingabe1</em>) zu. Tipp: Nutze die Funktion <em>document.getElementById(<b>ID</b>)</em>!</li>
<li>Lies den Wert des Eingabefeldes aus und speichere ihn in eine lokale Variable mit dem Variablennamen <em>spielername</em>.</li>
<li>Gib die Variable spielername über die <em>alert()</em> Funktion aus.</li>
</ol>
`;

let tips = [];

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
  function() { return scriptIncludes("document.getElementByID(\"eingabe1\"") },
  function() { return scriptIncludes("let spielername") },
  function() { return scriptIncludes("alert(") },
]


let exerciseBase = new Exercise(exerciseID, instructions, tips, validationFuncs);
window.onload = exerciseBase.init();

// Tests
      // var spielername = document.getElementById("eingabe1").value;
      // let spielername = "x";
      // let spielername = document.getElementById("eingabe1").value;
      // alert(spielername);
