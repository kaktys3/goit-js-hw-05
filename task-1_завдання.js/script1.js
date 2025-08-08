let button = document.querySelector(".button")
let text = document.querySelector(".text")
button.addEventListener('click', ()=> {
    button.textContent = text.innerHTML
})