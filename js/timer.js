const setudyMinutes = 25;
const setudyBreak = 5;
let setudyTime = setudyMinutes * 60;
let breakTime = setudyBreak * 60;

const timer = document.getElementById('timer');
const timers = document.getElementById('timers');
const setudyBtn = document.querySelector('.study');
const breakBtn = document.querySelector('.break');
timers.style.display = 'none'



setudyBtn.addEventListener('click', setudyTimer)
breakBtn.addEventListener('click', setudyBreaks)



function setudyTimer() {
    setudyclear = setInterval(timers, 1000)
    timer.style.display = 'flex'
    breakBtn.addEventListener('click', function () {
        timer.style.display = 'none'
        setudyTime = setudyMinutes * 60;
        clearInterval(setudyclear);

    })

    function timers() {

        const menit = Math.floor(setudyTime / 60);

        let detik = setudyTime % 60;

        timer.innerHTML = `${menit}.${detik}`
        setudyTime--;
    }
}

function setudyBreaks() {
    breakclear = setInterval(breaks, 1000)


    timers.style.display = 'flex'
    setudyBtn.addEventListener('click', function () {
        timers.style.display = 'none'
        breakTime = setudyBreak * 60;

        clearInterval(breakclear)


    })

    function breaks() {
        const menit = Math.floor(breakTime / 60);
        let detik = breakTime % 60;

      
        timers.innerHTML = `${menit}.${detik}`
        breakTime--;
    }
    
}