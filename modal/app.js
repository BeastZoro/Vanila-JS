const open_modal = document.querySelector('.open_modal')
const close_modal = document.querySelector('.close_modal')
const modal_box = document.querySelector('.modal_box')
const modal_overlay = document.querySelector('.modal_overlay')

open_modal.addEventListener('click', () =>{
    modal_overlay.classList.remove('hide_modal')
    modal_box.classList.add('hide_modal')
})

close_modal.addEventListener('click', () =>{
    modal_overlay.classList.add('hide_modal')
    modal_box.classList.remove('hide_modal')
})
