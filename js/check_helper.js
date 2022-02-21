import { globalVarDoesNotExistMsg, localVarDoesNotExistMsg, isGlobalNotLocalMsg, wrongTypeMsg, stringIsEmptyMsg, isNotConstMsg, elDoesNotExistMsg, elWrongInnerTextMsg, elWrongStyleValueMsg, wrongValueMsg, logCallDoesNotExist } from './error_messages.js'

export function getFailResultObj(errorMessage) {
  return {result: false, errorMessage}
}

export function getSuccessResultObj() {
  return {result: true, failMessage: null}
}

export function globalVarExists(globalVarName) {
  if (typeof(window[globalVarName]) === "undefined") {
    return getFailResultObj(globalVarDoesNotExistMsg(globalVarName));
  }
  return getSuccessResultObj();
}

export function localVarExists(variable, varName) {
  if (typeof(window[varName]) !== "undefined") {
    return getFailResultObj(isGlobalNotLocalMsg(varName));
  }
  if (typeof(variable) === "undefined") {
    return getFailResultObj(localVarDoesNotExistMsg(varName))
  }
  return getSuccessResultObj();
}

export function valueEquals(variable, varName, val) {
  if (variable !== val) {
    return getFailResultObj(wrongValueMsg(varName, val));
  }
  return getSuccessResultObj();
}

export function isNonEmptyString(variable, varName) {
  if (typeof (variable) !== "string") {
    return getFailResultObj(wrongTypeMsg(varName, "string"));
  }
  if (variable.length <= 0) {
    return getFailResultObj(stringIsEmptyMsg(varName));
  }
  return getSuccessResultObj();
}

export function scriptIncludes(requiredText) {
  let scriptEl = document.getElementById("exerciseScript");
  if (!scriptEl.innerText.includes(requiredText)) {
    return getFailResultObj(`Dein Script enthält kein ${requiredText}!`);
  }
  return getSuccessResultObj();
}

export function isConst(varName) {
  try {
    eval(`${varName} = 0`); // Not a const
  } catch (error) {
    if (error instanceof TypeError) {
      return getSuccessResultObj();
    }
  }
  return getFailResultObj(isNotConstMsg(varName));
}

export function isType(variable, varName, typeName) {
  if (typeof (variable) === typeName) {
    return getSuccessResultObj();
  }
  return getFailResultObj(wrongTypeMsg(varName, typeName));
}

export function innerTextEquals(elName, innerText) {
  let h1El = document.getElementById(elName);
  if (!h1El) {
    return getFailResultObj(elDoesNotExistMsg(elName));
  } 
  if (h1El.innerText !== innerText) {
    return getFailResultObj(elWrongInnerTextMsg(elName, innerText));
  }
  return getSuccessResultObj();
}

export function hasCorrectStyleValue(elName, styleName, styleValue) {
  let h1El = document.getElementById(elName);
  if (!h1El) {
    return getFailResultObj(elDoesNotExistMsg(elName));
  } 
  if (h1El.style[styleName] !== styleValue) {
    return getFailResultObj(elWrongStyleValueMsg(elName, styleName, styleValue));
  }
  return getSuccessResultObj();
}

export function consoleContains(strValue){
    for(let c in window.logcalls){
      if(c.includes(strValue)){
        window.logcalls = [];
        return getSuccessResultObj();
      }
    }
    return getFailResultObj(logCallDoesNotExist(strValue));
}

/* Main validation procedure */

export const noop = () => {};

export function validate(exerciseID, validationFuncs, beforeSuccess = noop, afterSuccess = noop, beforeFail = noop, afterFail = noop) {
  let finalResult = true;
  let errorMessages = [];
  for(let i = 0; i < validationFuncs.length; i++) {
    let resultObj = validationFuncs[i]();
    if (!resultObj.result) {
      finalResult = false;
      errorMessages.push(resultObj.errorMessage)
      break; // TODO: support breaking and non breaking errors
    }
  }
  if (finalResult) {
    beforeSuccess();
    localStorage.setItem("solved_" + exerciseID, true);
    window.parent.updateExerciseState(exerciseID, true, errorMessages);
    afterSuccess();
  } else {
    beforeFail();
    localStorage.removeItem("solved_" + exerciseID);
    window.parent.updateExerciseState(exerciseID, false, errorMessages);
    afterFail();
  }
}
