let state = [];
for(let idx = 0; idx < 81; idx++) {
    state[idx] = 0;
}

const stateDisplay = document.getElementById("stateDisplay");

const inputs = [...document.querySelectorAll("input")];
inputs.forEach((input,index) => {
    input.addEventListener("input", (event) => {
        inputChanged(event, index);
    });
});


function inputChanged(event, index) {
    let value = event.target.value;
    if(value >= 1 && value <= 9) {
        state[index] = parseInt(value);
        printState();
    } else if(value === "") {
        state[index] = 0;
        printState();
    }
}


function printState() {
    stateDisplay.innerHTML = "State: " + JSON.stringify(state);
}