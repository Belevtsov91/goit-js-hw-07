function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


createButton.addEventListener("click", () => {

  const amount = parseInt(input.value.trim(), 10);
  

  if (amount >= 1 && amount <= 100) {

    createBoxes(amount);
    input.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100");
  }
});


destroyButton.addEventListener("click", destroyBoxes);


function createBoxes(amount) {

  destroyBoxes();


  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
 
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10; 

    boxes.push(box);
  }


  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  boxesContainer.innerHTML = "";
}