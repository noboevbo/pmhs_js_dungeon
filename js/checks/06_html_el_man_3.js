let exerciseID = "06_html_el_man_3";
check();

function check() {
  let h1El = document.getElementById("idvonueberschrift");
  if (h1El && h1El.style.backgroundColor === "yellow") {
    localStorage.setItem("solved_" + exerciseID, true);
    window.parent.updateExerciseState(exerciseID, true);
  } else {
    localStorage.removeItem("solved_" + exerciseID);
    window.parent.updateExerciseState(exerciseID, false);
  }
}