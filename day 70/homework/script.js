const newYear = '2025-01-01'
const day = document.getElementById('day')
const hour = document.getElementById('hours')
const min = document.getElementById('minut')
const sec = document.getElementById('sec')



function newYearTimer(){
    const currentDate = new Date()
    const newYearDate = new Date(newYear)
    let difference = newYearDate.getTimezoneOffset()*60*1000*-1
    let totalSeconds = (newYearDate - difference - currentDate)/1000
    let totalDays = Math.floor(totalSeconds/86400)
    let totalHours = Math.floor((totalSeconds/3600)%24)
    let totalMinutes = Math.floor((totalSeconds/60)%60)
    let totalSec =Math.floor( totalSeconds % 60)

    if(totalDays <10){
        day.innerHTML ='0'+ totalDays
    }else{
        day.innerHTML = totalDays}

    if(totalHours <10){
        hour.innerHTML ='0'+ totalHours
    }else{
        hour.innerHTML =totalHours}
    
    if(totalMinutes<10){
        min.innerHTML = '0' + totalMinutes
    }else{ 
        min.innerHTML = totalMinutes}
   
    if(totalSec<10){
    sec.innerHTML = '0'+ totalSec
    }else{
        sec.innerHTML = totalSec
    }
    
}


setInterval(newYearTimer,1000)

