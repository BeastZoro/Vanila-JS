const tabs = document.querySelectorAll('.text')
const article = document.querySelector('article')
const buttons = document.querySelectorAll('.btn')

article.addEventListener('click', (e) => {
    const tabId = e.target.dataset.id

    if (tabId) {
        buttons.forEach((button) => button.classList.remove('active'))
        e.target.classList.add('active')

        tabs.forEach((tab) => tab.classList.remove('active'))
        const activeTab = document.getElementById(tabId)
        activeTab.classList.add('active')
    }
})