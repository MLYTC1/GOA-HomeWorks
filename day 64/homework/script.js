const regName = document.getElementById('reg-name')
const regPass = document.getElementById('reg-pass')
const logName = document.getElementById('log-name')
const logPass = document.getElementById('log-pass')
const accountOwner = document.getElementById('account')
const alert = document.getElementById('alert')
const loginForm = document.getElementById('logIn-form')

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

    regName.value = ''
    regPass.value = ''
 }


 function logIn(){
    let name = logName.value
    let pass = logPass.value

    if(logName.value == '' && logPass.value != ''){
        alert.innerHTML = 'Enter your name'
    }else if(logName.value != '' && logPass.value == ''){
        alert.innerHTML = 'Enter your password'
    }else if(logName.value != '' && logPass.value != ''){
        for(let x of accArr){
            if(x.name == name){
                if(x.pass == pass){
                    // console.log(x.name)
                    accountOwner.innerHTML = name   
                    logName.value = ''
                    logPass.value = ''
                    alert.innerHTML = ''
                }else{
                    alert.innerHTML = "Password is incorrect"
                }
            }}}else{  
                    alert.innerHTML = "Account is incorrect"
                    loginForm.style.boxShadow = '0px 0px 10px red'
                }
        


 }