const count = document.querySelector('.count')

const increaseBtn = document.querySelector('.increase')
const decreaseBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')

if(count.textContent < 0){
    count.style.color = 'red'
}

increaseBtn.addEventListener('click', () =>{
    count.textContent = parseInt(count.textContent) + 1

    if(count.textContent >= 0){
        count.style.color = 'green'
    }
})

decreaseBtn.addEventListener('click', () =>{
    count.textContent = parseInt(count.textContent) - 1
    if(count.textContent < 0){
        count.style.color = 'red'
    }

})

resetBtn.addEventListener('click', () =>{
    count.textContent = 0
    count.style.color = 'black'
})