import textData from "./utils.js";


const article = document.querySelector('article')
const form = document.querySelector('form')
const input = document.querySelector('#input')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = parseInt(input.value)
    const random = Math.floor(Math.random() * textData.length)
    if (value < 0 || isNaN(value)) {
        let text = textData[random]
        article.innerHTML = `<p>${text}</p>`
    } else {
        let text = textData.splice(0, value)
        text = text.map((ele) => `<p>${ele}</p>`)
        article.innerHTML = text.join(" ")
    }
})