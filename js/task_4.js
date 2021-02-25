console.log(`Task4`)

let counterValue = 0;

const counterRef = {
  decreaseValueBtn: document.querySelector('[data-action="decrement"]'),
  increaseValueBtn: document.querySelector('[data-action="increment"]'),
  valueCounterSpan: document.querySelector('#value'),
};

counterRef.increaseValueBtn.addEventListener('click', incrementValue);
counterRef.decreaseValueBtn.addEventListener('click', decrementValue);

function incrementValue() {
  counterValue += 1;
  renewalValue();
}

function decrementValue() {
  counterValue -= 1;
  renewalValue();
}

function renewalValue() {
 counterRef.valueCounterSpan.textContent = counterValue;
}