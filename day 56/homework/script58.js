// if else

// let  score = Number(prompt("Enter Your Score"))

// if(score == 10){
//     console.log('ყოჩაღ! ძალიან მაგარი შედეგია')
// }else if(score ==8){
//     console.log("გაუმჯობესება შეიძლება")
// }else if(score == 5){
//     console.log('ცუდი შედეგია')
// }

//switch

// switch(score){
//     case 10:
//         console.log("ძალიან კარგია")
//         break
//     case 8:
//         console.log("გაუმჯობესება შეიძლება")
//         break
//     case 5:
//         console.log('ცუდი შედეგია')
//         break
    
//     default:
//             console.log('არასწორი ციფრია')
// }

//----------------------
//array list
// let myList = ['luka', 'nino', 'daviti', 'temuri', 'giorgi', 'rostomi', 'lika']

// let sortedArr = myList.sort()
// let reverseArr = sortedArr.reverse()
// console.log(reverseArr)


//slice მონაკვეთს იღებს
//splice()  მონაკვეთს ამოიღებს, მერამდენედან დაიწყოს, და რამდენი ელემენტი ამოიღოს

// console.log(myList.slice(0,4))

//index გაგება
// console.log(myList.indexOf('giorgi'))

//sort
// console.log(myList.sort())

// let numbersList = [ 5,1, 22,50,73,26,121]
// console.log(numbersList.sort())

let longDate='Fridat May 2, 7pm'

let shortDate=""
console.log(longDate.indexOf(','))

for(let i=0;i<longDate.indexOf(',');i++){
    shortDate +=longDate[i]
}

console.log(shortDate)