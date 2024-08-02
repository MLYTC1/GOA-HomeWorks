// create  registration variables
const regName = document.getElementById('reg-name')
const regSurname = document.getElementById('reg-surname')
const regEmail = document.getElementById('reg-email')
const regPass = document.getElementById('reg-pass')
const regContainer = document.getElementById('reg')
const bgImg1 = document.getElementById('bg-img')
const bgImg2 = document.getElementById('bg-img2')
const male = document.getElementById('male')
const female = document.getElementById('female')

// create  login variables

const logEmail = document.getElementById('log-email')
const logPass= document.getElementById('log-pass')
const logContainer = document.getElementById('log')
const addInfo = document.getElementById('addInfo')
let accArr = []

//create account
const accDiv = document.getElementById('accDiv')
const accName = document.getElementById('acc-name')


// function genderExplore(){
//     if(male.checked == true){
//         gender = 'M'
//     }else{
//         gender = 'F'
//     }
// }

function createAcc(name,surname,email,pass,gender){
    this.name = name
    this.surname = surname
    this.email = email
    this.pass = pass
    this.gender = gender
    
    this.gender = function(male){
        if(male.checked == true){
            this.gender = male.value
        }else{
            this.gender = female.value
        }
    }
}

function registration(){
    let name = regName.value
    let surname = regSurname.value
    let email = regEmail.value
    let pass = regPass.value
    


    const person = new createAcc(name,surname,email,pass)
    person.gender(male)
    accArr.push(person)
    console.log(accArr)
    regContainer.style.display = 'none'
    logContainer.style.display = 'flex'

    regName.value = ''
    regSurname.value = ''
    regEmail.value = ''
    regPass.value = ''
    male.value = ''
    female.value = ''
}


function logIn(){
    let email = logEmail.value
    let pass = logPass.value
    

    if(email == '' && pass != ""){
        addInfo.innerHTML = "შეიყვანეთ მეილი"
        addInfo.style.color = 'red'
    }else if(email != '' && pass == ""){
        addInfo.innerHTML = "შეიყვანეთ პაროლი"
        addInfo.style.color = 'red' 
    }else if(email == '' && pass == ""){
        addInfo.innerHTML = "შეიყვანეთ მონაცემები"
        addInfo.style.color = 'red' 
    }
    else{
    for(let x of accArr){
        if(email == x.email){
            if(pass == x.pass){
                logContainer.style.display = 'none'
                regContainer.style.display = 'none'
                accDiv.style.display = 'flex'
                accName.innerHTML = x.name[0] + '.' + x.surname[0]
                bgImg1.src = ''
                bgImg2.src = ''
                logEmail.value = ''
                logPass.value = ''
                addInfo.innerHTML = ''
            }else{
                addInfo.innerHTML = "შეყვანილი პაროლი არასწორია"
                addInfo.style.color = 'red'
            }
        }else{
            addInfo.innerHTML = "ექაუნთი არ მოიძებნა"
            addInfo.style.color = 'red'
            }
        }
    }
    
    
}



function logback(){
    logContainer.style.display = 'flex'
    regContainer.style.display = 'none'
    
    
}


function regback(){
    regContainer.style.display = 'flex'
    logContainer.style.display = 'none'
    
}

function signOut(){
    logContainer.style.display = 'flex'
    accDiv.style.display = 'none'
    bgImg1.src = '/Day_65/img/register.avif'
    bgImg2.src = '/Day_65/img/signup.avif'
}




//sqesis formulas shevxedo
// loginshi rom sheviyvan monacemebs waishalos