const list_wrapper = document.querySelector('.list_container ul')
const list_form = document.querySelector('form')
const list_input = document.querySelector('#input')


let list_array = []

document.addEventListener('DOMContentLoaded', () => {
    check_local_list()
})

list_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const list_item = list_input.value
    add_to_list(list_item)
})

const add_to_list = (item) => {
    const newList = [{
        value: item,
        completed: false,
    }]
    list_array.push(...newList)
    list_input.value = ""
    display_list()
    localStorage.setItem('list', JSON.stringify(list_array))
}

const check_local_list = () => {
    const localList = JSON.parse(localStorage.getItem('list'))

    if (localList) {
        list_array = localList
        display_list()
    } else {
        localStorage.setItem('list', JSON.stringify(list_array))
    }
}

const display_list = () => {
    list_wrapper.innerHTML = ""
    list_array.forEach((item) => {
        list_wrapper.innerHTML += `<li class="list_item">
            <div class="list_item_value"> 
                <input type="checkbox" ${item.completed ? 'checked' : ''} />
                <span>${item.value}</span>
            </div>
            <div>
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
            </li>`
    })
}