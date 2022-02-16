var exercises = [
  "01_globale_variable",
  "02_eingabe_prompt"
];

var playerNameEl = document.getElementById("playerName");
var selectedExerciseNameEl = document.getElementById("selectedExerciseName");
var selectedExerciseEl = document.getElementById("selectedExercise");
var exerciseResultEl = document.getElementById("exerciseResult");
selectedExerciseEl.src = ""; // Reset iFrame content on reload
function init() {
  updatePageVariables();
  initializeExercises();
}

window.onload = init;

function updatePageVariables() {
  /* 
  Some results from individual experiments may influence elements on the main page
  For example the first two experiments provide playerNames, which should be shown in the Header bar.
  Such influences on the main page should be handled here.
  */
  showPlayerName();
}

function showPlayerName() {
  let playerName = localStorage.getItem("02_playerName"); // Exercise 02 solved
  if (playerName === null) {
    playerName = localStorage.getItem("01_playerName");
  }
  if (playerName !== null) {
    playerNameEl.innerText = playerName;
  } else {
    playerNameEl.innerText = "Playername undefined.";
  }
}

function initializeExercises() {
  let exerciseListEl = document.getElementById("exerciseList");
  for (var i = 0; i < exercises.length; i++) {
    let exerciseName = exercises[i];
    const liNode = document.createElement("li");
    liNode.className = "nav-item";
    const linkNode = document.createElement("a");
    linkNode.id = exerciseName + "_link";
    linkNode.className = "nav-link";
    linkNode.onclick = function () {
      exerciseSelected(exerciseName)
    };
    linkNode.href = "#";
    if (localStorage.getItem("solved_" + exerciseName)) {
      linkNode.innerText = "✅ " + exerciseName;
    } else {
      linkNode.innerText = "❌ " + exerciseName;
    }
    liNode.appendChild(linkNode);
    exerciseListEl.appendChild(liNode);
  }
}

function initializeActiveExercise() {
  let activeExerciseName = localStorage.getItem("selectedExercise");
  if (activeExerciseName !== null) {
    setActiveExercise(activeExerciseName);
  }
}

function updateExerciseState(exerciseName, isSolved, updatePage = false) {
  let linkNode = document.getElementById(exerciseName + "_link");
  if (isSolved) {
    linkNode.innerText = "✅ " + exerciseName;
  } else {
    linkNode.innerText = "❌ " + exerciseName;
  }
  setExperimentState(isSolved);
  if (updatePageVariables) {
    updatePageVariables();
  }
}

window.updateExerciseState = updateExerciseState;

function exerciseSelected(exerciseName) {
  localStorage.setItem("selectedExercise", exerciseName);
  setActiveExercise(exerciseName);
}

function setActiveExercise(exerciseName) {
  selectedExerciseNameEl.innerText = "Aufgabe: " + exerciseName;
  selectedExerciseEl.src = "aufgaben/" + exerciseName + ".html";
  updateExerciseState(exerciseName, localStorage.getItem("solved_" + exerciseName));
}

function setExperimentState(isSolved) {
  if (isSolved) {
    exerciseResultEl.innerText = "Aufgabe korrekt gelöst!";
    exerciseResultEl.className = "alert alert-success";
  } else {
    exerciseResultEl.innerText = "Aufgabe noch nicht korrekt gelöst!";
    exerciseResultEl.className = "alert alert-danger";
  }
}