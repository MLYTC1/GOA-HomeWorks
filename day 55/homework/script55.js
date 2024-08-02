//alert('ana')- შეტყობინებას აგდებს საიტის ჩართვისას

//ფუნქცია

// function magaziisGza(){
//     console.log('გაუხვიე მარჯვნივ')
//     console.log('წახვედი პირდაპირ')
//     console.log('ჩაირბინე ორღობეში')
//     console.log('გაუხვიე მარცხნივ')
//     console.log('წახვედი პირდაპირ')
//     console.log('დაინახე მაღაზია')
//     console.log('გააღე კარები')
//     console.log('შეხვედი მაღაზიაში')
//     console.log('იყიდე პური')
//     console.log('წახვედი სახლში')

// }

// magaziisGza()
// magaziisGza()

// function multiply(){
//     let num1 = prompt('Enter Num1: ')
//     let num2 = prompt('Enter Num2: ')

//     alert("ამ რიცხვების ნამრავლი არის " + num1 * num2)

// }  

// multiply() 

//scope 

//შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლის შემოტანილ რიცხვებს და გადაამრავლებთ ერთმანეთზე,

// const userNum1 = prompt("Enter yor number1: ")
// const userNum2 = prompt("Enter yor number2: ")

// function multiply(num1,num2){
//     console.log(num1*num2)
// }

// multiply(userNum1,userNum2)

//მომხმარებელს ეკითხებით ორ რიცხვს, ასევე ეკითხებით მათემატიკურ ოპერატორს, (+,-,*,/)
//შექმნით ფუნქციას, რომელიც შეასრულებს მათემატიკურ ოპერაციას, მომხმარებლის ინტერესებიდან გამომდინარე


// let userNum1 = Number(prompt("Enter your number1: "))
// let userNum2 = Number(prompt("Enter your number2: "))
// let userOperator = prompt("Enter math operator: ")

// function calculator(num1,operator,num2){
//     if(operator=="+"){
//         console.log(num1+num2)
//     }else if(operator == "-"){
//         console.log(num1-num2)
//     }else if(operator == "*"){
//         console.log(num1*num2)
//     }else{
//         console.log(num1/num2)
//     }
// }


// calculator(userNum1,userOperator,userNum2)

//--------------------------
//array

let myArr = ['toby', 'molly', 'archy', 'busa', 'snoopy', 'eby', 'recksy', 'rony', 'odry', 'tino', 'lilu', 'balu', 'buddy', 'max', 'chalie', 'leo', 'louie', 'bean', 'lola', 'frankie', 'daisy', 'apollo']

// console.log(myArr)
let finalArr =[]
finalArr.push("beiley")
for(let i=0;i < myArr.length;i++){
    console.log(myArr[i])
}