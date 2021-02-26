console.log(`Task6`);


const inputRef = document.querySelector('#validation-input');
const inputlength = +inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let correctValue = event.target.value.length;
  if (correctValue === inputlength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  }
  if (correctValue !== inputlength) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
  if (correctValue === 0) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
  }
}


