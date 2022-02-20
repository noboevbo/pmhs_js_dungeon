var exercises = [
    // id, title
    { id: "00_tutorial", name: "Tutorial" },
    { id: "01_globale_variable", name: "Globale Variablen" },
    { id: "02_eingabe_prompt", name: "Eingaben über prompt()" },
    { id: "03_ausgabe_alert", name: "Ausgaben über alert()" },
    { id: "04_html_el_man_1", name: "HTML Elemente manipulieren 1" },
    { id: "05_html_el_man_2", name: "HTML Elemente manipulieren 2" },
    { id: "06_html_el_man_3", name: "HTML Elemente manipulieren 3" },
    { id: "07_input_field_1", name: "Eingabefeld auslesen 1" },
    { id: "08_input_field_2", name: "Eingabefeld auslesen 2" },
    { id: "09_datentyp_number", name: "Datentyp Number" },
];

var playerNameEl = document.getElementById("playerName");
var selectedExerciseNameEl = document.getElementById("selectedExerciseName");
var selectedExerciseEl = document.getElementById("selectedExercise");
var exerciseResultEl = document.getElementById("exerciseResult");
var exerciseResultHeaderEl = document.getElementById("exerciseResultHeader");
var exerciseResultMessageListEl = document.getElementById("exerciseResultMessageList");
selectedExerciseEl.src = ""; // Reset iFrame content on reload

function init() {
    updatePageVariables();
    initializeExercises();
    initializeActiveExercise();
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
        let exercise = exercises[i];
        const liNode = document.createElement("li");
        liNode.className = "nav-item";
        const linkNode = document.createElement("a");
        linkNode.id = exercise.id + "_link";
        linkNode.className = "nav-link";
        linkNode.setAttribute('onclick', `exerciseSelected(${i})`);
        linkNode.href = "#";
        if (localStorage.getItem("solved_" + exercise.id)) {
            linkNode.innerText = "✅ " + `${i}`.padStart(2, "0") + ": " + exercise.name;
        } else {
            linkNode.innerText = "❌ " + `${i}`.padStart(2, "0") + ": " + exercise.name;
        }
        liNode.appendChild(linkNode);
        exerciseListEl.appendChild(liNode);
    }
}

function initializeActiveExercise() {
    let activeExerciseNumber = localStorage.getItem("selectedExercise");
    if (activeExerciseNumber !== null && exercises.length >= activeExerciseNumber) {
        setActiveExercise(exercises[activeExerciseNumber]);
    }
}

function updateExerciseState(exerciseID, isSolved, errorMessages = []) {
    let linkNode = document.getElementById(exerciseID + "_link");
    let stateSymbol = isSolved ? '✅' : '❌';
    linkNode.innerText = linkNode.innerText.replace(/^.{1}/g, stateSymbol);
    setExperimentState(isSolved, errorMessages);
}

window.updateExerciseState = updateExerciseState;

function exerciseSelected(exerciseNumber) {
    localStorage.setItem("selectedExercise", exerciseNumber);
    setActiveExercise(exercises[exerciseNumber]);
}

function setActiveExercise(exercise) {
    selectedExerciseNameEl.innerText = "Aufgabe: " + exercise.name;
    selectedExerciseEl.src = "aufgaben/" + exercise.id + ".html";
    updateExerciseState(exercise.id, localStorage.getItem("solved_" + exercise.id));
}

function setExperimentState(isSolved, messages = []) {
    exerciseResultMessageListEl.innerHTML = "";
    if (isSolved) {
        exerciseResultEl.className = "alert alert-success";
        exerciseResultHeaderEl.innerText = "Aufgabe korrekt gelöst!";
    } else {
        exerciseResultEl.className = "alert alert-danger";
        exerciseResultHeaderEl.innerText = "Aufgabe noch nicht korrekt gelöst!";
    }
    for (let i = 0; i < messages.length; i++) {
        exerciseResultMessageListEl.appendChild(getResultMessageListItem(messages[i]))
    }
}

function getResultMessageListItem(message) {
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = message;
    return li
}