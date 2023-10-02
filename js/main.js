// Save name player

const saveName = () => {
  let valor = document.getElementById("playerName").value;
  if (name == ""){
    sessionStorage.setItem("name", "Player 1");
} else {
    sessionStorage.setItem("name", name);
}
}

// Colour Picker

window.addEventListener("load", startup);

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let objectChosenColours  = {};
function startup(event) {
    arrayColorPicker.map(
        (element) => {
            element.value = "#8a2be2";
            element.addEventListener("input", (event) => updateSquare(event, element));
            element.select();
        }
    )
}

const updateSquare = (event, element) => {

  let colorSquare = document.getElementById(`square${element.id}`);
  colorSquare.style.backgroundColor = event.target.value;
  let color = getComputedStyle(colorSquare).backgroundColor;
  objectChosenColours[element.id] = color;
}

const saveChosenColours = () => {
  sessionStorage.setItem("chosenColours", JSON.stringify(objectChosenColours));
  window.location.href = "./game.html";
}
let chosenColours = JSON.parse(sessionStorage.getItem("chosenColours"));
let arrayChosenColours = [];
const changeColoursToArray = () => {

    for (const property in chosenColours) {
        arrayChosenColours.push(chosenColours[property]);
    }
}
changeColoursToArray();



// Hidden Rows

const saveLevelBeginner = () => {
    sessionStorage.setItem("level", "beginnerRow");
    window.location.href = "./colours.html";
}
const saveLevelIntermediate = () => {
    sessionStorage.setItem("level", "intermediateRow");
    window.location.href = "./colours.html";
}
const saveLevelAdvanced = () => {
    sessionStorage.setItem("level", "advancedRow");
    window.location.href = "./colours.html";
}
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    window.onload = (event) => {
    selected.style.display = "flex";
};

// Game

window.addEventListener("load", () => howManyRows());

let board = document.getElementById("game");

const createRows = () => {
    let mainCol = document.createElement("div");
    mainCol.className = "col-12 d-flex";
    let squaresDiv = document.createElement("div");
    squaresDiv.className = "d-flex justify-content-evenly";

    for(let i = 0; i < 4; i++) {
        let eachSquare = document.createElement("div");
        eachSquare.className = "squareGame";
        squaresDiv.appendChild(eachSquare)
    }

    let circlesDiv = document.createElement("div");
    circlesDiv.className = "d-flex justify-content-evenly align-items-center";

    for(let i = 0; i < 4; i++) {
        let eachCircle = document.createElement("div");
        eachCircle.className = "circle m-1";
        circlesDiv.appendChild(eachCircle)
    }

    mainCol.appendChild(squaresDiv);
    mainCol.appendChild(circlesDiv);
    board.appendChild(mainCol);
};
const howManyRows = () => {

  if (selectedLevel == "beginnerRow") {
      for (let i = 0; i < 10; i++) {
          createRows();
      }
  } else if (selectedLevel == "intermediateRow") {
      for (let i = 0; i < 8; i++) {
          createRows();
      }
  } else {
      for (let i = 0; i < 6; i++) {
          createRows();
      }
  }
}

// LEVEL

window.addEventListener("load", () => (chosenLevel()));

const chosenLevel = () => {

    let level = document.getElementById("level");
    let p = document.createElement("p");

    if (selectedLevel == "beginnerRow") {
        p.innerHTML = "LEVEL: beginner";
        level.appendChild(p);
    } else if (selectedLevel == "intermediateRow") {
        p.innerHTML = "LEVEL: intermediate";
        level.appendChild(p);
    } else {
        p.innerHTML = "LEVEL: advanced";
        level.appendChild(p);
    }
};

// CHOSEN COLOURS 

window.addEventListener("load", () => (colourMiniSquares()));

const colourMiniSquares = () => {

    for (i = 0; i < arrayChosenColours.length; i++) {
        let miniSquare = document.getElementById(`miniSquare${i}`);
        miniSquare.style.backgroundColor = arrayChosenColours[i];
    }
}
indow.addEventListener("load", () => (  addIdToSquares()));

const addIdToSquares = () => {

    let squares = document.getElementsByClassName("squareGame");
    let arraySquares = Array.from(squares);

    for (let i = 0; i < arraySquares.length; i++) {
        let element = arraySquares[i];
        element.id = `squareGame${i}`;
    }
}