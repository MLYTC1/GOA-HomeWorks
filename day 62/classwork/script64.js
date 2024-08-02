//ობიექტში არსებულ ფუნქციას ეწოდება მეთოდი


// function myFunc(){
//     console.log('hello')
// }


// let object = {
//     name: 'gabrieli',
//     surname: 'molodini',
//     sayHello: function(){
//         console.log(this.name)
//         console.log(object.surname)
//     }
//     // sayhello(){
//     //     console.log('hi')
//     // }
// }

// let object1 = {
//     name: 'tsotne',
//     surname: 'sartania',
//     sayHello: function(){
//         console.log(this.name)
//     }
// }


// // console.log(object)
// console.log(object.sayHello())
// console.log(object1.sayHello())


// let arr = ['1', '2', 3]

// let num = 2.555
// console.log(Math.floor(num))
// console.log(Math.round(num))

// console.log(Math.pow(num,5))
// // console.log(Math.sqrt(num))


// console.log(Math.floor(Math.random()*100))

let click = document.getElementById('click')


function randomClick(){
    let num = Math.floor(Math.random()*1000)
    let num2 = Math.floor(Math.random()*1000)
    click.style.top = num + 'px'
    click.style.left = num2 + 'px'
}