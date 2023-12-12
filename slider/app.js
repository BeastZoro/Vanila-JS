const dots = document.querySelector('.buttons')
const slides = document.querySelectorAll('.slide')

document.addEventListener('DOMContentLoaded', () => {
    let activeSlide = 0;
    let leftPosition = 0;

    // handelling the position of the slides 
    slides.forEach((slide) => {
        slide.style.left = `${leftPosition}%`
        leftPosition += 100
    })

    // creating dots for length of the slides
    slides.forEach((slide, index) => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        dot.addEventListener('click', () => {
            slideTo(index)
        })
        dots.appendChild(dot)
    })


    // handelling active dot
    const currentSlide = () => {
        const slideDots = document.querySelectorAll('.dot')
        slideDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeSlide)
        })
    }

    // handelling the active slide
    const slideTo = (slideIndex) => {
        slides.forEach((slide) => {
            const newPosition = slideIndex * 100
            slide.style.transform = `translateX(-${newPosition}%)`
        })
        activeSlide = slideIndex
        currentSlide()
    }
    currentSlide()
})

