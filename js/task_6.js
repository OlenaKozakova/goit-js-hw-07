console.log(`Task6`);


const inputRef = document.querySelector('#validation-input');
const inputlength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
 
  if (inputRef.value.length !== inputlength) {
    inputRef.classList.add('invalid');
   inputRef.classList.remove('valid');
 }
  else {
   inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
}


