const result = document.getElementById('result')
const section = document.getElementById('section')
const button = document.getElementsByTagName('button')

let num = 0

function plus(){
    num++
    result.innerHTML = num
    chooseColor()
}

function minus(){

    if (result.innerHTML == 0){
        num = 0
    } else{
        num--
    }
    
    result.innerHTML = num
    chooseColor()
}


function reset(){
    num = 0
    result.innerHTML = num
    chooseColor()
}


function chooseColor(){
    if(num>0){
        result.style.color = "greenyellow"
        section.style.boxShadow = '0px 0px 10px greenyellow'
        

    } else{
        result.style.color = "red"
        section.style.boxShadow = '0px 0px 10px red'
      
        
        

    }
}

