console.log(`Task5`);

const nameRef = {
  input: document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
};

nameRef.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    return event.currentTarget.value === ''
        ? (nameRef.textSpan.textContent = 'незнакомец')
        : (nameRef.textSpan.textContent = event.currentTarget.value);
}