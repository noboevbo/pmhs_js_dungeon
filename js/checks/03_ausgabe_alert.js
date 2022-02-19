let exerciseName = "03_ausgabe_alert";
window.onload = check;

// TODO: Prüfen ob die Eingabe tatsächlich über die prompt kam?
function check() {
  let scriptEl = document.getElementById("exerciseScript");
  let isCorrect = false;
  if (typeof (id) === "number" &&
    scriptEl.innerText.includes("alert(")) {
      try {
        id = 0; // Not a const
      } catch (error) {
        isCorrect = true;
      }
    }

  if (isCorrect) {
    localStorage.setItem("solved_" + exerciseName, true);
    window.parent.updateExerciseState(exerciseName, true, true);
  } else {
    localStorage.removeItem("solved_" + exerciseName);
    window.parent.updateExerciseState(exerciseName, false, true);
  }
}