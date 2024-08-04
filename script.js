const boxes = document.querySelectorAll('.box')
const 

const openModal = function () {

}

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        document.querySelector('.hidden').setAttribute('class', 'visible')
    }) 
})