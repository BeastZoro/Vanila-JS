const slides = document.querySelectorAll('.slide')
const dots = document.querySelector('.buttons')

document.addEventListener('DOMContentLoaded', () => {
    let activeSlide = 0

    let slideX = 0
    slides.forEach((slide) => {
        slide.style.left = `${slideX}%`
        slideX += 100
    })


    slides.forEach((slide, index) => {
        const dot = document.createElement('div')
        dot.addEventListener('click', () => {
            handleSlide(index)
        })
        dot.classList.add('dot')
        dots.appendChild(dot)

    })


    // handle the active dot
    const activeDot = () => {
        const slideDots = document.querySelectorAll('.dot')
        slideDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeSlide)
            console.log(activeSlide)
        })
    }

    const handleSlide = (slideIndex) => {
        slides.forEach((slide) => {
            const newPosition = slideIndex * 100
            slide.style.transform = `translateX(${-newPosition}%)`
        })

        activeSlide = slideIndex
        activeDot()
    }
    activeDot()
})