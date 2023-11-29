const menu = document.querySelector('.menu')
const close_sidebar = document.querySelector('.close_sidebar')
const sidebar = document.querySelector('aside')

menu.addEventListener('click', () =>{
    sidebar.classList.toggle('show_sidebar')
})

close_sidebar.addEventListener('click', () =>{
    sidebar.classList.remove('show_sidebar')
})