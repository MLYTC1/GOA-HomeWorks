const hexCodeSpan =document.getElementById('hex-code')
const main =document.getElementsByTagName('main')



function randomColor(){
    let hexList =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]
    let hexCode = '#'
    for(let i=0; i < 6; i++){
        let index = Math.floor(Math.random() * hexList.length)
        hexCode += hexList[index]
    }
    hexCodeSpan.innerHTML = hexCode
    hexCodeSpan.style.color = hexCode
    main[0].style.backgroundColor = hexCode
}
setInterval(randomColor, 5000) 
// მეორე პარამეტრად რა დროსაც მიუთითებ შეცვლის ფერს ამ პერიოდში