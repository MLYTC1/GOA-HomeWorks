// object constructor

// function person(name, surname, age, work){
//     this.name = name
//     this.surname = surname
//     this.age= age
//     this.work = work
// }


// const person1 = new person('giorgi', 'bibilashvili', '22', 'developer')
// const person2 = new person('ana', 'giorgadze', '111','developer')

// console.log(person1.name +  person1.age)
// console.log(person2.name +  person2.age)

// let person1 = {
//     name:'giorgi',
//     age: '22',
//     surname:'bibilashvili',
//     work: 'developer'
// }


// let person2={
//     name:'gabrieli',
//     surname:'Molodini',
//     work: 'developer',
//     age: '100'

// }


// let person3 ={
//     name:'cotne',
//     surname:'sartania',
//     work: 'idesiti',
//     age: '27'
// }


// function students(name, surname, academy){
//     this.name = name
//     this.surname = surname
//     this.academy = academy
// }

// const student1 = new students('ana','giorgadze', 'GOA')
// const student2 = new students('lika','pruidze', 'GOA')
// const student3 = new students('luka','kechexmadze', 'GOA')
// const student4 = new students('luka','siradze', 'GOA')
// const student5 = new students('nino','solomonia', 'GOA')
// const student6 = new students('rostom','chagunava', 'GOA')
// const student7 = new students('saba','vaxtangadze', 'GOA')
// const student8 = new students('tsotne','sartania', 'GOA')

// let person1 ={
//     name: 'gabrieli',
//     age: "100"
// }
// let person2 ={
//     name: 'saba',
//     age: "100"
// }
// let person3 ={
//     name: 'giorgi',
//     age: "100"
// }

// let acc = []
// acc.push(person1)
// acc.push(person2)
// acc.push(person3)
// console.log(acc)

//---------------

const regName = document.getElementById('reg-name')
const regPass = document.getElementById('reg-pass')

const logName = document.getElementById('log-name')
const logPass = document.getElementById('log-pass')

let accArr = []

function createAcc(name,pass){
    this.name = name
    this.pass = pass
}

function register(){
    let name = regName.value
    let pass = regPass.value

    const person = new createAcc(name,pass)
    accArr.push(person)
    console.log(accArr)
}



function login(){
    let name = logNameName.value
    let pass = logPassPass.value

    for(let i = 0; i <accArr.length;i++){
        if(accArr[i].name == name){
            
        }
    }

}