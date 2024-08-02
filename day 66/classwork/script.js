// function person(name,surname,age){
//     this.name = name
//     this.surname = surname
//     this.age = age


//     this.changeName = function(name){
//         this.name = name
//     }
// }


// const object = new person ('gabrieli', 'molodini', '100')

// console.log(object)
// console.log(object.name)
// object.changeName('giorgi')

// console.log(object)
// console.log(object.name)

//dvaleba-----------------------------------------------

// const personName = document.getElementById('name')
// const personSurname = document.getElementById('surname')
// const personAge = document.getElementById('age')
// const  personTime = document.getElementById('time')
// const result = document.getElementById('result')

// function person(name,surname,age){
//     this.name = name
//     this.surname = surname
//     this.age = age
    

//     this.timeFuture = function(time){
//         this.age = Number(this.age) + Number(time)
//     }
// }

// function func(){
    
//     let name = personName.value
//     let surname = personSurname.value
//     let age = personAge.value
    

//     const object = new person(name,surname,age)

//     object.timeFuture(time.value)
//     // console.log(object.age)

//     result.innerHTML = object.age

// }

// const date = new Date();

// console.log(date.getMinutes())

// ---------------------------------


function time(){
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    console.log(hours + ':'+ minutes + ':' + seconds)

}

// setInterval(time,1000)
