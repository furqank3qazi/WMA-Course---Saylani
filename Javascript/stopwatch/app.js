
var display = document.getElementById("display")
var minutes = prompt("Enter Minutes for Timer or Stopwatch")
var seconds = prompt("Enter Seconds for Timer or Stopwatch")
var milisec = 0
const timerinterval = setInterval(timer, 10)
const stopwatchinterval = setInterval(stopwatch, 10)

var timer_enabled = false
var stopwatch_enabled = false

    display.innerHTML = `<p>${minutes}m ${seconds}s ${milisec}ms</p>`

function starttimer() {
    timer_enabled = true
    }

function timer()
{
    if(seconds <= 0 && minutes <= 0)
        clearInterval(timerinterval)
    
    if(timer_enabled){
        --milisec

        if(milisec < 0){
            milisec= 99
            --seconds
        }

        if(seconds < 0){
            seconds= 59
            --minutes
        }

        else if (milisec <= 0 && seconds <= 0 && minutes <= 0)
        {
            clearInterval(timerinterval)
        }
        }

    display.innerHTML = `<p>${minutes}m ${seconds}s ${milisec}ms</p>`
    
}

function startstopwatch() {
    stopwatch_enabled = true
    }

function stopwatch()
{       
   
        if(stopwatch_enabled){
        ++milisec

        if(milisec > 99){
            milisec= 0
            ++seconds
        }

        if (seconds > 59){
            seconds=0
            ++minutes

        
        }
    }
    display.innerHTML = `<p>${minutes}m ${seconds}s ${milisec}ms</p>`
    
}

function pause()
{
    timer_enabled = false
    stopwatch_enabled = false
}

// function stopstopwatch()
// {
//     stopwatch_enabled = false
// }

function reset()
{
    seconds = 0
    minutes = 0
    milisec = 0
    timer_enabled = false
    stopwatch_enabled = false
}

// function resetstopwatch()
// {
//     seconds = 0
//     minutes = 0
//     milisec = 0
//     stopwatch_enabled = false
// }