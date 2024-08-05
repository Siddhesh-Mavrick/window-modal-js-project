const boxes = document.querySelectorAll('.box')
const closeButton = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const card = document.querySelector('.card-bg')

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        overlay.classList.remove('hidden')
        card.classList.remove('hidden')
    })
})

closeButton.addEventListener('click', function () {
    overlay.classList.add('hidden')
    card.classList.add('hidden')
})

overlay.addEventListener('click', function () {
    overlay.classList.add('hidden')
    card.classList.add('hidden')
})