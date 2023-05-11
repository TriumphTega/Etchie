let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createGrid(16); //default size of the grid
    let generateButton = document.querySelector("#generateButton");
    generateButton.addEventListener("click", function () {
        let size = getSize();
        createGrid(size);
    });
});

function createGrid(size) {
    let board = document.getElementById("gridContainer");
    board.innerHTML = ""; // Clear the existing grid

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let totalGrids = size * size;

    for (let i = 0; i < totalGrids; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.appendChild(div); // Append the div element to the board
    }
}

function colorDiv() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else if(color === "eraser"){
        this.style.backgroundColor = "white";
    } 
    else {
        this.style.backgroundColor = "black";
    }
}



function setColor(colorChoice) {
    color = colorChoice;
}


function clearGrid() {
    let allDivs = document.querySelectorAll("div");
    allDivs.forEach((div) => (div.style.backgroundColor = ""));
  }


function getSize() {
    const inputNumber = document.getElementById("inputNumber");
    const message = document.getElementById("message");
    const numberValue = inputNumber.value;

    if (numberValue == "") {
        message.innerHTML = "Size of the grid cannot be zero";
        message.style.textAlign = "center";
    } else if (numberValue <= 0 || numberValue > 100 || isNaN(numberValue)) {
        message.innerHTML =
            "Please provide a number between 1-100 and must be a numeric value";
        message.style.textAlign = "center";
    } else {
        message.innerHTML = "Hover the grid!";
        message.style.textAlign = "center";
        return numberValue; // Return the valid input value
    }
}
