let exerciseName = "TODO: Exercise Name einfügen";
check();

function check() {
  if (TODO: Bedingung für Korrektheit einfügen) {
    localStorage.setItem("solved_" + exerciseName, true);
    window.parent.updateExerciseState(exerciseName, true);
  } else {
    localStorage.removeItem("solved_" + exerciseName);
    window.parent.updateExerciseState(exerciseName, false);
  }
}