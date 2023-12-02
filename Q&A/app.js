
const questions = document.querySelectorAll('.question')


questions.forEach((element, index) => {
    const button = element.querySelector('button')
    console.log(button)

    button.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item === element) {
                item.classList.toggle('show_text')
            }
        })
    })
})