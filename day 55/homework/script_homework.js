//) შექმენით სია და ელემენტები დაალაგეთ ანბანის მიხედვით (a , b , c , d...) და ჩაამატეთ ახალ სიაში 

// let dogArr = ['toby', 'molly', 'archy', 'busa', 'snoopy', 'eby', 'recksy', 'rony', 'odry', 'tino', 'lilu', 'balu', 'buddy', 'max', 'chalie', 'leo', 'louie', 'bean', 'lola', 'frankie', 'daisy', 'apollo']

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// let finalArr =[]

// for(let i=0; i < alphabet.length; i++){
//     for(let x=0; x < dogArr.length;x++){
//         if(alphabet[i] === dogArr[x][0]){
//             finalArr.push(dogArr[x])
//         }
//     }
// }

// console.log(finalArr)

// 2) გადმოგეცემათ სია რომელშიც იქნება რიცხვები არეულად ( 1 , 8 ,5 , 0) და დაამატეთ ახალ სიაში დალაგებულად

let myArr = [25, 30, 2, 6, 40, 22, 5, 33, 100, 9]

let finalArr = []


for (let i = 0; i<myArr.length - 1; i++) {
    for (let j= i+1; j < myArr.length; j++) {
        if (myArr[i] > myArr[j]){
            let variable = myArr[i];
            myArr[i] = myArr[j];
            myArr[j] = variable;
        }
    }
}

console.log(myArr)