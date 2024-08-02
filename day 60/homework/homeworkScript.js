


let Name = document.getElementById('userName')
let id = document.getElementById('ID')
let password = document.getElementById('password')
let newPassword = document.getElementById('change')

let user1 = {
    userName: prompt('Enter your full name: '),
    userId:  prompt('Enter your ID: '),
    userPassword: prompt('Enter your password: '),

}


    console.log(Name.innerHTML = user1.userName)
    console.log(id.innerHTML = user1.userId)
    console.log(password.innerHTML = user1.userPassword)

        



function changePassword(){
    let question = confirm("Really want to change password? ")

    if(question == true){
        let password2 = prompt('Enter your new password:')
        user1.userPassword = password2
        console.log(password.innerHTML = password2)  
    }else{
        
    }
    

}