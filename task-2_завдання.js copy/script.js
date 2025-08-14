const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

let listIngredients = document.querySelector('#ingredients')
let elem

for(let i = 0; i < ingredients.length; i++) {
    elem = document.createElement('li')
    elem.textContent = ingredients[i]
    listIngredients.append(elem)
}
