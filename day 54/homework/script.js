// let name = 'ana'
// const surname = 'giorgadze'
// var adress = 'tbilisi'

// console.log(surname)
// num1 = 10
// // or გამოისახება -  '||' 
// // and  = &&

// if(name == 'ana' || name == 'gabrieli'){
//     console.log(true)
// }else if(num1 >10 && num1<15){
//     console.log(true)
// }

///-------------------------
//length
///if,else
//or,annd operators
//let,const var
//typeof
//number string


//--------------------------
//ციკლები

// let i = 0

// while(1000 > i){
//     i++
//     console.log(i + '. I LOVE YOU ❤️')
// }

//++ increment 1-ით გაზრდა; decrement 1-ით შემცირება

// for(let i=2; i <= 10; i += 2){
//     console.log(i)
// }

//გვაქვს სამი პარამეტი, პირვე;ოა საიტერაციო ცვლადი i;
//მეორე პარამეტრი არის condition სადამდე უნდა მივიდეს loop
//მესამე პარამეტრი არის ინკრემენტი , ვზრდი საიტერაციო ცვლადის მნიშვნელობას


// let name = 'khinkali'

// for(let i=0; i < name.length; i++){
//     console.log(name[i])
// }

//-----------------------------

// let num = prompt('Enter your number')

// //დავალება:მომხმარებელს შემოაქვს რიცხვი თქვენ უნდა დაბეჭდოთ ყველა ორის ჯერადი რიცხვები


// for(let i=0;i <= num;i++){
//     if(i % 2==0){
//         console.log(i)
//     }
// }

//ლუწია თუ კენტია რიცხვი

let num = prompt('Enter your number')
if(num%2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}


//1)მომხმარებელი შემოიტანს რიცხვს, თუ ის იქნება უარყოფითი რიცხვი უნდა დაგვიბრუნოს უარყოფითი რიცხვი, თუ ის იქნება დადებითი, დაგვიბრუნოს უარყოფითი რიცხვი,ყველა შემთხვევაში უნდა დაგვიბრუნოს უარყოფითი რიცხვი გარდა ნულისა;
//2)მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ დაბეჭდეთ მომხმარებლის შემოტანილ რიცხვამდე ყველა რიცხვის ჯამი