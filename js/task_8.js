console.log(`Task8`);

const startNumberRef = document.querySelector('input[type="number"]');
const boxesRef = document.querySelector("#boxes");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

let startingValue = 0;
startNumberRef.addEventListener("input", StartingNumber);
renderBtnRef.addEventListener("click", RenderBoxes);
destroyBtnRef.addEventListener("click", DestroyBoxes);

function StartingNumber(el) {
  startingValue = el.target.value;
}

function RenderBoxes() {
  createBoxes(startingValue);
}

function DestroyBoxes() {
  boxesRef.innerHTML = "";
}

function createBoxes(amount) {
  let block = [];
  let blockSize = 30;

  for (let i = 0; i < amount * 10; i += 10) {
      const randomColor = "#" + Math.random().toString(16).substr(2, 6);
      // генератор случайных цветов
    const blockRef = document.createElement("div");
    blockSize += 10;

    blockRef.style.backgroundColor = randomColor;
    blockRef.style.width = `${blockSize}px`;
    blockRef.style.height = `${blockSize}px`;
     blockRef.style.marginLeft = `${10}px`;
     blockRef.classList.add('block-item');

    block.push(blockRef);
  }
  boxesRef.append(...block);
}