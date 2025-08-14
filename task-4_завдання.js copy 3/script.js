let buttons = document.querySelector('#counter')
let buttonDecrement = buttons.firstElementChild
let buttonIncrement = buttons.lastElementChild
let counter = document.querySelector('#value')
let number = 0

buttonDecrement.addEventListener('click', () => {
    number -= 1
    counter.textContent = number
})

buttonIncrement.addEventListener('click', () => {
    number += 1
    counter.textContent = number
})