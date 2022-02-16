let exerciseName = "02_eingabe_prompt";
window.onload = check;

// TODO: Prüfen ob die Eingabe tatsächlich über die prompt kam?
function check() {
  if (typeof (window.spielername) === "undefined" && typeof (spielername) === "string" && spielername.length > 0) {
    localStorage.setItem("02_playerName", spielername);
    localStorage.setItem("solved_" + exerciseName, true);
    window.parent.updateExerciseState(exerciseName, true, true);
  } else {
    localStorage.removeItem("02_playerName");
    localStorage.removeItem("solved_" + exerciseName);
    window.parent.updateExerciseState(exerciseName, false, true);
  }
}