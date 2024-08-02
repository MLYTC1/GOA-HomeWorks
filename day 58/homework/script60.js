// prompt('enter your name: ')
// confirm('ეთანხმები თუ არა ჩვენს პირობებს?')

// document.body.innerHTML ='hello'

// let p = document.getElementById('p')

// p.innerHTML = 'goa'

// let p = document.getElementsByTagName('p')

//ამ დროს იქმნება სია, და იმდენი ელემენტი ემატება რამდენი თაგიც გვაქვს


// console.log(p[1].innerHTML)

// for(let i=0;i< p.length;i++){
//     console.log(p[i].innerHTML)
// // }

// for(let i=0;i< p.length;i++){
//     (p[i].innerHTML = 'goa' +i)
// }

// let textParagraph = document.getElementsByClassName('change')


// console.log(textParagraph)

// let firstParagraph = document.getElementById('main-text')
// console.log(firstParagraph)

//id დროს სია არ იქმნება, ერთ ელემენტს აღნიშNავს მხოლოდ

// let paragraph = document.getElementsByTagName('p')
// // console.log(paragraph)

// for(let i=0; i<paragraph.length;i+=2){
//     paragraph[i].innerHTML = "great"
// }

// let title = document.getElementsByClassName("title")

// for(i=0;i<title.length;i++){
//     title[i].innerHTML = "item" + i
// }

// console.log(paragraph)


//csss
const paragraph = document.getElementsByTagName('p')
const div = document.getElementById('conteiner')

let isDefault = true

function changeColor(){
    isDefault =!isDefault
    for(let i=0; i < paragraph.length;i++){
        paragraph[i].innerHTML = 'hello'
        paragraph[i].style.color = 'red'
        paragraph[i].style.fontSize = '2rem'
        paragraph[i].style.margin ='50px'
}

    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'

}

function Default(){
    isDefault =!isDefault
    for(let i=0; i < paragraph.length;i++){
        paragraph[i].innerHTML = 'hello'
        paragraph[i].style.color = '#000'
        paragraph[i].style.fontSize = '1.5rem'
        paragraph[i].style.margin ='20'
}

    div.style.display = 'block'

}

function shemowmeba(){
    if(isDefault == true){
        changeColor()
    }else{
       Default()
    }
}