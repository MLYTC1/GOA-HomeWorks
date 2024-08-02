
const paragraph =document.createElement('p')
const textNode = document.createTextNode('hello')
const body = document.getElementsByTagName('body')

paragraph.appendChild(textNode)
body[0].appendChild(paragraph)

// paragraph.innerHTML = 'hello'
console.log(paragraph)