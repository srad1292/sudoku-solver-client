// @ts-nocheck
const stateDisplay = document.getElementById("stateDisplay");
const solveStateDisplay = document.getElementById("solveStateDisplay");
const startingInputs = [...document.querySelectorAll(".starting-cell")];
const solveInputs = [...document.querySelectorAll(".solve-cell")];
const initialStateInput = document.getElementById("startingStateInput");
const initialStateInputButton = document.getElementById("startingStateInputButton");

let initialState = [];
let solveState = [];


for(let idx = 0; idx < 81; idx++) {
    initialState[idx] = 0;
    solveState[idx] = 0;
}

startingInputs.forEach((input,index) => {
    input.addEventListener("input", (event) => {
        startInputChanged(event.target.value, index);
    });
});


function startInputChanged(value, index) {
    if(value >= 1 && value <= 9) {
        initialState[index] = parseInt(value);
        printInitialState();
    } else if(value === "") {
        initialState[index] = 0;
        printInitialState();
    }
}

function printInitialState() {
    stateDisplay.innerHTML = "State: " + JSON.stringify(initialState);
}

solveInputs.forEach((input,index) => {
    input.addEventListener("input", (event) => {
        solveInputChanged(event.target.value, index);
    });
});

function solveInputChanged(value, index) {
    if(value >= 1 && value <= 9) {
        solveState[index] = parseInt(value);
        printSolveState();
    } else if(value === "") {
        solveState[index] = 0;
        printSolveState();
    }
}

function printSolveState() {
    solveStateDisplay.innerHTML = "Solve State: " + JSON.stringify(solveState);
}

initialStateInputButton.addEventListener("click", (event) => {
    let givenState = initialStateInput.value;
    console.log("Got given state: " + givenState);
    if(!givenState || givenState === "") { return; }
    try{
        let asJson = JSON.parse(givenState);
        asJson.forEach((cellValue, index) => {
            if(parseInt(cellValue) !== 0) {
                startingInputs[index].value = cellValue;
                startInputChanged(cellValue, index);

                solveInputs[index].value = cellValue;
                solveInputChanged(cellValue, index);
            }
        });
    } catch(e) {
        console.log(e);
        console.log("^^^ Unable to convert input into grid");
    }
});