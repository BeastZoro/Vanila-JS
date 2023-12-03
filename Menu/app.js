import { Menu } from './utils.js'

const menu_items = document.querySelector('.menu_items')


document.addEventListener('DOMContentLoaded', () => {
    MenuItems(Menu)
})

const MenuItems = (menu) => {
    const menu_list = menu.map((item) => {
        return (
            `<article class="menu_item">
            <div class="menu_img">
                <img src=${item.img} alt=${item.title}>
            </div>
            <div class="menu">
                <div class="item_info">
                    <p>${item.title}</p>
                    <p>$${item.price}</p>
                </div>
                <div class="item_desc">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>`
        )
    })

    menu_items.innerHTML = menu_list.join("")
}

const categories = document.querySelector('.categories')

categories.childNodes.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent === 'all') {
            MenuItems(Menu)
        } else {
            const filtered = Menu.filter((item) => item.category === btn.textContent)
            MenuItems(filtered)
        }
    })
})
