const tabs = document.querySelectorAll('.btn')
const tabText = document.querySelectorAll('.text')
const article = document.querySelector('article')


article.addEventListener('click', (e) =>{
    const dataId = e.target.dataset.id
    if(dataId){
        tabs.forEach(tab => tab.classList.remove('active'))
        e.target.classList.add('active')

        tabText.forEach(tab =>tab.classList.remove('active'))
        const clickedTab = document.getElementById(dataId)
        clickedTab.classList.add('active')
    }

})