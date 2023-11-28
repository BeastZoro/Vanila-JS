const main_container = document.querySelector('.main_container')
const button = document.querySelector('button')
const colorValue = document.querySelector('.color')
const simple = document.querySelector('.simple')
const hex = document.querySelector('.hex')
let simpleActive = true
let hexActive = false
let hexColor = '#'

const colors = ['red', 'green', 'blue', '#f043d2', 'rgba(133,122,200)']
button.addEventListener('click', () => {
    const random = getRandom(colors.length)

    if (simpleActive) {
        main_container.style.backgroundColor = colors[random]
        colorValue.textContent = colors[random]
    }

    if (hexActive) {
        main_container.style.backgroundColor = '#ffffff'
        const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
        for (let i = 0; i < 6; i++) {
            hexColor += hexCode[getRandom(hexCode.length)]
        }
        main_container.style.backgroundColor = hexColor
        colorValue.textContent = hexColor
        hexColor = '#'
    }
})

const getRandom = (size) => {
    return Math.floor(Math.random() * size)
}

hex.addEventListener('click', () => {
    hexActive = true
    simpleActive = false
})

simple.addEventListener('click', () => {
    hexActive = false
    simpleActive = true
})
