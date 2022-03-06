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
    { id: "10_datentyp_string", name: "Datentyp String" },
    { id: "11_datentyp_mix", name: "Verschiedene Datentypen mischen" },
    { id: "12_datentyp_bool_vergleich", name: "Datentyp Boolean und Vergleiche" },
    { id: "13_bedingungen", name: "Bedingungen" },
    { id: "14_bedingte_anweisungen", name: "Bedingte Anweisungen" },
    { id: "15_1_verzweigung_1x1", name: "Verzweigung (1x1)" },
    { id: "15_verzweigung", name: "Verzweigungen" },
    { id: "16_1_verzweigung_catchIt", name: "Verzweigungen (CatchIt)" },
    { id: "16_verzweigung_bugshoot", name: "Verzweigungen (Bugshooter)" },
    { id: "17_array_string", name: "Array (Farbstrings)" },
];

const emptyExerciseState = { solved: false, tipsPurchased: [], lastUpdate: Date.now() };

// Replace console.log with stub implementation and add.
window.console.stdlog = console.log.bind(console);
window.console.log = function(txt) {
    console.stdlog(txt);
    let logcalls = JSON.parse(localStorage.getItem("logcalls"));
    if (!logcalls) {
        logcalls = [];
    }
    logcalls.push(txt);
    localStorage.setItem("logcalls", JSON.stringify(logcalls));
}

var playerNameEl = document.getElementById("playerName");
var playerGoldEl = document.getElementById("playerGold");
var selectedExerciseNameEl = document.getElementById("selectedExerciseName");
var selectedExerciseEl = document.getElementById("selectedExercise");
var exerciseResultEl = document.getElementById("exerciseResult");
var exerciseResultHeaderEl = document.getElementById("exerciseResultHeader");
var exerciseResultMessageListEl = document.getElementById("exerciseResultMessageList");
var exerciseTipListEl = document.getElementById("exerciseTips");
var currentTips = []
var currentTipNodes = []

function init() {
    initializeDatabase(exercises);
    initializePlayerGold();
    updatePageVariables();
    initializeExercises();
    initializeActiveExercise();

}

window.onload = init;

function initializePlayerGold() {
    let playerGold = localStorage.getItem("playerGold");
    if (playerGold !== null) {
        return
    }
    playerGold = 1000;
    localStorage.setItem("playerGold", playerGold);
}

function initializeDatabase(exercises) {
    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];
        let item = localStorage.getItem(exercise.id);
        if (item !== null) {
            continue
        }
        writeExerciseState(exercise.id, emptyExerciseState);
    }
}

function updatePageVariables() {
    /* 
    Some results from individual experiments may influence elements on the main page
    For example the first two experiments provide playerNames, which should be shown in the Header bar.
    Such influences on the main page should be handled here.
    */
    showPlayerName();
    showPlayerGold();
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

function showPlayerGold() {
    let playerGold = getPlayerGold();
    playerGoldEl.innerText = `Gold verfügbar: ${playerGold}`;
}

function initializeExercises() {
    let exerciseListEl = document.getElementById("exerciseList");
    for (var i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];
        let exerciseState = getExerciseState(exercise.id);
        const liNode = document.createElement("li");
        liNode.className = "nav-item";
        const linkNode = document.createElement("a");
        linkNode.id = exercise.id + "_link";
        linkNode.className = "nav-link";
        linkNode.setAttribute('onclick', `exerciseSelected(${i})`);
        linkNode.href = "#";
        if (exerciseState.solved) {
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

function updateExerciseState(exerciseID, exerciseState, errorMessages = []) {
    let linkNode = document.getElementById(exerciseID + "_link");
    let stateSymbol = exerciseState.solved ? '✅' : '❌';
    linkNode.innerText = linkNode.innerText.replace(/^.{1}/g, stateSymbol);
    setExperimentState(exerciseState.solved, errorMessages);
}

window.updateExerciseState = updateExerciseState;

function exerciseSelected(exerciseNumber) {
    localStorage.setItem("selectedExercise", exerciseNumber);
    setActiveExercise(exercises[exerciseNumber]);
}

function setActiveExercise(exercise) {
    exerciseTipListEl.innerHTML = "";
    selectedExerciseNameEl.innerText = "Aufgabe: " + exercise.name;
    selectedExerciseEl.src = "aufgaben/" + exercise.id + ".html";
    updateExerciseState(exercise.id, getExerciseState(exercise.id));
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

const tipItemClasses = "list-group-item list-group-item-action flex-column align-items-start";
const tipTitleClasses = "d-flex w-100 justify-content-between"

function initializeTips(exerciseID, tips = []) {
    currentTips = tips;
    currentTipNodes = [];
    let exerciseState = getExerciseState(exerciseID);
    for (let i = 0; i < tips.length; i++) {
        let tip = tips[i]
        let isPurchased = tipIsPurchased(exerciseID, exerciseState, i);
        const aNode = document.createElement("a");
        aNode.href = "#";
        aNode.className = tipItemClasses;
        aNode.setAttribute('onclick', `buyTip("${exerciseID}", ${i})`);
        const titleDiv = document.createElement("div");
        titleDiv.className = tipTitleClasses;
        const h5Node = document.createElement("h5");
        h5Node.className = "mb1";
        h5Node.innerHTML = `Tipp ${i+1}`;
        const titleSmallNode = document.createElement("small");
        titleSmallNode.innerText = tip.title;
        titleDiv.appendChild(h5Node);
        titleDiv.appendChild(titleSmallNode);
        aNode.appendChild(titleDiv);
        const contentNode = document.createElement("p");
        contentNode.className = "mb-1";
        if (isPurchased) {
            contentNode.innerHTML = tip.content;
            aNode.classList.add("disabled");
        } else {
            contentNode.innerHTML = `Tipp kaufen für ${getTipPrice(tip.level)} Gold?`;
        }
        aNode.appendChild(contentNode);
        exerciseTipListEl.appendChild(aNode);
        currentTipNodes.push(aNode);
    }
}

function buyTip(exerciseID, tipNum) {
    let tip = currentTips[tipNum];
    let exerciseState = getExerciseState(exerciseID);
    if (exerciseState.tipsPurchased[tipNum]) {
        return
    }
    exerciseState.tipsPurchased[tipNum] = true;
    writeExerciseState(exerciseID, exerciseState);
    updateGold(-getTipPrice(tip.level));
    revealTip(tipNum, tip.content);
    updatePageVariables();
}

function revealTip(tipNum, tipContent) {
    let currentTipNode = currentTipNodes[tipNum];
    currentTipNode.classList.add("disabled");
    currentTipNode.children[1].innerHTML = tipContent;
}

function tipIsPurchased(exerciseID, exerciseState, tipNum) {
    if (exerciseState.tipsPurchased.length > tipNum) {
        return exerciseState.tipsPurchased[tipNum];
    }
    exerciseState.tipsPurchased = Array(currentTips.length).fill(false);
    writeExerciseState(exerciseID, exerciseState);
    return false;
}

function getTipPrice(tipLevel) {
    switch (tipLevel) {
        case 1:
            return 10;
        case 2:
            return 25;
        case 3:
            return 50;
        case 4:
            return 100;
        default:
            return 5000;
    }
}

function getExerciseState(exerciseID) {
    let item = localStorage.getItem(exerciseID);
    if (item === null) {
        return item;
    }
    return JSON.parse(item);
}

function getPlayerGold() {
    let playerGold = localStorage.getItem("playerGold");
    if (playerGold === null) {
        playerGold = 0;
        localStorage.setItem("playerGold", playerGold);
    }
    return parseInt(playerGold);
}

function updateGold(amount) {
    let playerGold = getPlayerGold();
    playerGold += amount;
    localStorage.setItem("playerGold", playerGold);
}

function writeExerciseState(exerciseID, exerciseState) {
    localStorage.setItem(exerciseID, JSON.stringify(exerciseState))
}