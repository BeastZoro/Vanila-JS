const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

//   action buttons
const randomBtn = document.querySelector('.btn')
const prevBtn = document.querySelector('.btn_prev')
const nextBtn = document.querySelector('.btn_next')

// card info
const image = document.querySelector('.user_profile')
const name = document.querySelector('.name')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')

let currentReview = 0
console.log(currentReview)
window.addEventListener('DOMContentLoaded', () => {
    const reviewData = getReview(currentReview)
    displayReview(reviewData)
})


nextBtn.addEventListener('click', () => {
    currentReview++
    if(currentReview > reviews.length - 1){
        currentReview = 0
    }
    const reviewData = getReview(currentReview)
    displayReview(reviewData)
})

prevBtn.addEventListener('click', () => {
    currentReview--
    if(currentReview < 0){
        currentReview = reviews.length - 1
    }
    const reviewData = getReview(currentReview)
    displayReview(reviewData)
})

randomBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * reviews.length)
    const randomReview = reviews[random]
    displayReview(randomReview)
})

const displayReview = (review) => {
    image.src = review.img
    name.textContent = review.name
    title.textContent = review.job
    desc.textContent = review.text
}

const getReview = (index) => {
    return reviews[index]
}