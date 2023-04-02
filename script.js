// stage for game 
const gameContainer = document.getElementById("game");

// cards
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let clickCount = 0;
let firstCard, secondCard;

// function that shuffles an array
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

// shuffle the given cards
let shuffledColors = shuffle(COLORS);
// create a div for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    // give each card a class
    newDiv.classList.add(color);

    newDiv.addEventListener("click", function handleCardClick(event) {
      console.log("you just clicked", event.target);
      const colorClass = event.target.classList[0];
      newDiv.style.backgroundColor = colorClass;
      if (clickCount === 0) {
        firstCard = event.target;
        clickCount++;
      } else if (clickCount === 1) {
        secondCard = event.target;
        clickCount++;
      }

      if (clickCount === 2 && firstCard.classList[0] !== secondCard.classList[0]) {
        setTimeout(function () {
          firstCard.style.backgroundColor = "";
          secondCard.style.backgroundColor = "";
          clickCount = 0;
          firstCard = null;
          secondCard = null;
        }, 1000);
      } else if (clickCount === 2) {
        setTimeout(function () { alert("nice"); }, 1000);
        clickCount = 0;
        firstCard = null;
        secondCard = null;
      }
    });

    // add each card to the stage
    gameContainer.append(newDiv);
  }
}

createDivsForColors(shuffledColors);

