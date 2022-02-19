let exerciseID = "01_globale_variable";
window.onload = check;

function check() {
  if (typeof (window.spielername) === "string" && window.spielername.length > 0) {
    localStorage.setItem("01_playerName", spielername);
    localStorage.setItem("solved_" + exerciseID, true, true);
    window.parent.updateExerciseState(exerciseID, true, true);
  } else {
    localStorage.removeItem("01_playerName");
    localStorage.removeItem("solved_" + exerciseID);
    window.parent.updateExerciseState(exerciseID, false);
  }
}