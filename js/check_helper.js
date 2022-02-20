import { globalVarDoesNotExistMsg, localVarDoesNotExistMsg, isGlobalNotLocalMsg, wrongTypeMsg, stringIsEmptyMsg } from './error_messages.js'

export function getFailResultObj(errorMessage) {
  return {result: false, errorMessage}
}

export function getSuccessResultObj() {
  return {result: true, failMessage: null}
}

export function globalVarExists(globalVarName) {
  if (typeof (window[globalVarName]) === "undefined") {
    return getFailResultObj(globalVarDoesNotExistMsg(globalVarName));
  }
  return getSuccessResultObj();
}

export function localVarExists(variable, varName) {
  if (window[varName] !== "undefined") {
    return getFailResultObj(isGlobalNotLocalMsg(varName));
  }
  if (variable !== "undefined") {
    return getFailResultObj(localVarDoesNotExistMsg(varName))
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
    localStorage.setItem("solved_" + exerciseID, true, true);
    window.parent.updateExerciseState(exerciseID, true, true);
    afterSuccess();
  } else {
    beforeFail();
    localStorage.removeItem("solved_" + exerciseID);
    window.parent.updateExerciseState(exerciseID, false);
    afterFail();
  }
}
