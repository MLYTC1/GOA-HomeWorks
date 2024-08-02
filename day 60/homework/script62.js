//str number array bool


//object - მონაცემთა ტიპი
//user ობიექტის სახელი
//name:'gabrieli'- property(კუთვნილება)
//adress - property saxeli
// 'pasanauri' - mniSVneloba
// userName = prompt('Enter your name: ')

// let user = {
//     name:'gabrieli',
//     surname: 'molodini',
//     adress: 'pasanauri',
//     password:'123123'
// }

// // user.name = userName 

// user['name']
// console.log(user.name)


// //obieqtshi arsebul funqcias ewodeba metodi
// function sayHello(){

// }





// console.log(user.name)

//object oriented programing



// let user1 = {
//     ownerName:'ana',
//     ownerSurname: 'giorgadze',
//     iban: 'GE1625243536',
//     password:'123123',
//     amount:'1000'
// }


//     console.log("Account owner's name: " + user1.ownerName +'Account owner surname: '  + user1.ownerSurname +', Iban is' + user1.iban + ", avelable amount - " + user1.amount)
    


// let bool = confirm('sagas')

// console.log(bool)
//-----------------

let name1 = prompt("Enter your name")
let surname1 = prompt("Enter your surname")
let password1 = prompt("Enter your password")

let user1 = {
        ownerName: '',
        ownerSurname: '',
        password:'',
        
    }
user1.ownerName=name1
user1.ownerSurname=surname1
user1.password=password1
   
let change = confirm('Want to change password :')



if(change==true){
    let password2 = prompt("Enter your new password")
    user1.password=password2
    
}

console.log("Account owner's name: " , user1.ownerName," surname -" , user1['ownerSurname']," password ",user1.password)