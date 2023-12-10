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


const currDate = new Date()

const tempYear = currDate.getFullYear()
const tempMonth = currDate.getMonth()
const tempDate = currDate.getDate()


const futureDate = new Date(tempYear, tempMonth, tempDate + 20, 12, 30, 0)

const targetYear = futureDate.getFullYear()
const targetMonth = months[futureDate.getMonth()]
const targetDay = weekdays[futureDate.getDay()]
const targetDate = futureDate.getDate()
const targetHours = futureDate.getHours()
const targetMinutes = futureDate.getMinutes()

giveawayText.textContent = `Giveaway Ends On ${targetDay}, ${targetDate} ${targetMonth} ${targetYear} ${targetHours}:${targetMinutes}am`



const futureTime = futureDate.getTime()

const getRemainingTime = () => {
    const currDay = new Date().getTime()
    const time = futureTime - currDay

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = Math.floor(time / oneDay)
    let hours = Math.floor((time % oneDay) / oneHour)
    let minutes = Math.floor((time % oneHour) / oneMinute)
    let seconds = Math.floor((time % oneMinute) / 1000)

    const formatTime = (item) =>{
        if(item < 10){
            return `0${item}`
        }
        return item
    }

    const timeValues = [days, hours, minutes, seconds]
    giveAwayTimer.forEach((timer, index) => {
        timer.innerHTML = formatTime(timeValues[index])
    })
    if (time < 0) {
        clearInterval(countdown)
        giveawayText.innerHTML = `<h4> sorry this giveaway has expired! </h4>`
    }
}
let countdown = setInterval(() => {
    getRemainingTime()
}, 1000);
getRemainingTime()
