const clock = document.getElementById('time')

function time(){
    const date = new Date();

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(hours <10){
        hours = '0' + date.getHours()
    }

    if(minutes < 10){
        minutes = '0' + date.getMinutes()
    }
    
    if(seconds<10){
        seconds = '0' + date.getSeconds()
    }

    let currentTime = hours + ':'+ minutes + ':' + seconds
    clock.innerHTML = currentTime
}

setInterval(time,1000)

