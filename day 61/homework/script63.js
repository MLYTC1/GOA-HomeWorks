const userName = document.getElementById('userName')
const userSurname = document.getElementById('userSurname')
const userPassword = document.getElementById('userPass')

const Name = document.getElementById('name')
const surname = document.getElementById('surname')
const pass = document.getElementById('pass')
const nameLabel = document.getElementById('nameLabel')
const surnameLabel = document.getElementById('surnameLabel')
const passLabel = document.getElementById('passLabel')
// const submit = document.getElementById('submit')

// let isSubmit= false

let object = {
    name: userName,
    surname: userSurname,
    password: userPassword
}

function submitClick(){
    // Name.innerHTML = object.name.value
    // surname.innerHTML = object.surname.value
    // pass.innerHTML = object.password.value

    // userName.value = ''
    // userSurname.value = ''
    // userPassword.value = '' 
    
    if(userName.value == '' && userSurname.value == '' && userPassword.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == '' ){
        nameLabel.innerHTML = 'Please enter your name'
        surnameLabel.innerHTML = 'Please enter your surname'
        passLabel.innerHTML = 'Please enter your password'
        submit.innerHTML = 'Submit'
    }else if(userName.value == '' && userSurname.value == '' && userPassword.value != '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == '' ){
        nameLabel.innerHTML = 'Please enter your name'
        surnameLabel.innerHTML = 'Please enter your surname'
        submit.innerHTML = 'Submit'
    }else if(userName.value == '' && userSurname.value != '' && userPassword.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == '' ){
        nameLabel.innerHTML = 'Please enter your name'
        passLabel.innerHTML = 'Please enter your password'
        submit.innerHTML = 'Submit'
    }else if(userName.value != '' && userSurname.value == '' && userPassword.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == '' ){
        surnameLabel.innerHTML = 'Please enter your surname'
        passLabel.innerHTML = 'Please enter your password'
        submit.innerHTML = 'Submit'
    }else if(userName.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == ''){
        nameLabel.innerHTML = 'Please enter your name'
        submit.innerHTML = 'Submit'
    }
    else if(userSurname.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == ''){
        surnameLabel.innerHTML = 'Please enter your surname'
        submit.innerHTML = 'Submit'
    }else if(userPassword.value == '' && Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == ''){
        passLabel.innerHTML = 'Please enter your password'
        submit.innerHTML = 'Submit'
    }else if(Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == ''){
        Name.innerHTML = object.name.value
        surname.innerHTML = object.surname.value
        pass.innerHTML = object.password.value
    
        userName.value = ''
        userSurname.value = ''
        userPassword.value = '' 
        submit.innerHTML = 'Reset'
    }else{
        Name.innerHTML = ''
        surname.innerHTML = ''
        pass.innerHTML = ''
        submit.innerHTML= 'Submit'
    }

    // if(Name.innerHTML == '' && surname.innerHTML == '' && pass.innerHTML == ''){
    //     submit.innerHTML = 'Submit'
    // }else{
    //     submit.innerHTML = 'Reset'
    // }

   
}


function changePass(){
    if(Name.innerHTML != '' && surname.innerHTML != '' && pass.innerHTML != ''){
        let passQuestion = confirm("Really want to change password? ")
        if(passQuestion == true){
            let oldPass = prompt('Enter old password: ')

            if(oldPass == pass.innerHTML){
                let newPass = prompt('Enter new password')
                object.password = newPass
                pass.innerHTML = object.password
            }
        }}else{
            alert("enter your data")
        }
}