const links = document.querySelector('.links')
console.log(links)
const ham_menu = document.querySelector('.ham_menu')

ham_menu.addEventListener('click', () =>{
    links.classList.toggle('show_links')
})