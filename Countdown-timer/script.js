const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYears = "1 Jan 2021";

function countdown() { 
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const TotalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(TotalSeconds /3600 / 24);
    const hours = Math.floor(TotalSeconds /3600) % 24;
    const mins = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = FormatTime(hours);
    minsEl.innerHTML = FormatTime(mins);
    secondsEl.innerHTML = FormatTime(seconds);

    console.log(days, hours, mins, seconds);
}
function FormatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);