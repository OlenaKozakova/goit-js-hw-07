console.log(`Task1`);

const categoriesItemRef = document.querySelector('#categories');
const elementsItemRef = categoriesItemRef.querySelectorAll('.item');

console.log(`На этой странице ${elementsItemRef.length} категории.`);

elementsItemRef.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.querySelectorAll('li').length}`,
  );
});