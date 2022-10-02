const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

function Clock() {
    const time = new Date()
    
    const getHoursSystem = (360 / 12) * time.getHours()
    const getMinutesSystem = (360 / 60) * time.getMinutes()
    const getSecondsSystem = (360 / 60) * time.getSeconds()

    hours.style.transform = `rotate(${getHoursSystem}deg)`
    minutes.style.transform = `rotate(${getMinutesSystem}deg)`
    seconds.style.transform = `rotate(${getSecondsSystem}deg)`
}

setInterval(() => {
    Clock()
}, 1000)

Clock()