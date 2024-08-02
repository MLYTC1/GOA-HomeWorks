const personName = document.getElementById('name')
const personSurname = document.getElementById('surname')
const personAge = document.getElementById('age')
const personTime = document.getElementById('time')
const inputContainer = document.getElementById('input-container')
const mainContainer = document.getElementsByName('main')


// output
const outputContainer = document.getElementById('output-container')
const userName = document.getElementById('user-name')
const userSurname = document.getElementById('user-surname')
const userAge = document.getElementById('user-age')
const userTime = document.getElementById('user-time')
const futureYear = document.getElementById('future-year')
const result = document.getElementById('result')
const finresult = document.getElementById('future')

function person(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age
    

    this.timeFuture = function(time){
        this.age = Number(this.age) + Number(time)
    }
}


function outputResult(){
    userName.innerHTML = personName.value
    userSurname.innerHTML = personSurname.value 
    userAge.innerHTML = personAge.value
    userTime.innerHTML = personTime.value

    // personName.value = ''
    // personSurname.value = ''
    // personAge.value = ''
    // personTime.value = ''

}

function timetravel(){
    let ask = confirm('Really want to travel?')
    const date = new Date()
    let years = date.getFullYear()
    

    if(ask ==true){
        inputContainer.style.display = 'none'
        outputContainer.style.display = 'none'
        finresult.style.display = 'flex'

        let name = personName.value
        let surname = personSurname.value
        let age = personAge.value
        const object = new person(name,surname,age)
        
        object.timeFuture(time.value)

        result.innerHTML = object.age
        futureYear.innerHTML = Number(years) + Number(personTime.value)
        
        
    }else{

    }
    
    
    
}