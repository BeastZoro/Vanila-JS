// responsive navbar

const navToggle = document.querySelector('.nav_toggle')
const navLinks = document.querySelector('.nav_links')

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show_nav_links')
})

// displaying the current year in the footer

const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear();


// fixed navbar

const navbar = document.querySelector('nav')
const backToTop = document.querySelector('.top-link')

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed_nav')
    }
    else {
        navbar.classList.remove('fixed_nav')
    }

    if (scrollHeight > 500) {
        backToTop.classList.add('show-link')
    } else {
        backToTop.classList.remove('show-link')
    }
})



const scrollLinks = document.querySelectorAll('.scroll_link')

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        const navHeight = navbar.getBoundingClientRect().height
        const navLinksHeight = navLinks.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed_nav')
        let position = element.offsetTop - navHeight

        if (!fixedNav) {
            position = position - navHeight
        }

        if (navHeight > 82) {
            position = position + navLinksHeight
        }

        window.scrollTo({
            left: 0,
            top: position
        })
        navLinks.classList.remove('show_nav_links')
    })
})