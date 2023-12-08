const daysEle = document.getElementById('days')
const hoursEle = document.getElementById('hours')
const minutesEle = document.getElementById('minutes')
const secondsEle = document.getElementById('seconds')

const giveawayText = document.querySelector('.subtitle')
const giveAwayTimer = document.querySelectorAll('.giveaway')
const timer_container = document.querySelector('.timer_container')


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];



const currTime = new Date()

let currYear = currTime.getFullYear()
let currMonth = currTime.getMonth()
let currDay = currTime.getDay()

const futureDate = new Date(currYear, currMonth, currDay + 10, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()

month = months[month]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()

giveawayText.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`



const futureTime = futureDate.getTime()

const getTargetTime = () => {
    const today = new Date().getTime()

    const time = futureTime - today
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000



    let days = Math.floor(time / oneDay)
    let hours = Math.floor((time % oneDay) / oneHour)
    let minutes = Math.floor((time % oneHour) / oneMinute)
    let seconds = Math.floor((time % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`)
        }
        return item
    }

    giveAwayTimer.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })

    if (time <= 0) {
        clearInterval(countdown)
        timer_container.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
    }
}

let countdown = setInterval(getTargetTime, 1000);

getTargetTime()
