let exerciseName = "01_globale_variable";
window.onload = check;

function check() {
  if (typeof (window.spielername) === "string" && window.spielername.length > 0) {
    localStorage.setItem("01_playerName", spielername);
    localStorage.setItem("solved_" + exerciseName, true, true);
    window.parent.updateExerciseState(exerciseName, true, true);
  } else {
    localStorage.removeItem("01_playerName");
    localStorage.removeItem("solved_" + exerciseName);
    window.parent.updateExerciseState(exerciseName, false);
  }
}