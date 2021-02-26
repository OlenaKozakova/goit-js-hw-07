console.log(`Task7`);

const initialValueRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

initialValueRef.addEventListener("input", fontScrolling);

function fontScrolling(elem) {
    spanRef.style.fontSize = `${elem.target.value}px`;
    // можно также подставить em, %, ex - от этого будет зависеть масштаб
    spanRef.style.color = '#AA0000';
}