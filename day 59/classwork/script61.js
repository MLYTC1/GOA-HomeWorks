const result = document.getElementById("result")
const section = document.getElementById('section')

// const plus = document.getElementById('plus')
// const minus = document.getElementById('minus')
// const reset = document.getElementById('reset')

let num = 0

function plus(){
    num++
    result.innerHTML = num
    chooseColor()

    

}

function minus(){
    num--
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
        result.style.textShadow= '0px 0px 10px green'
        section.style.boxShadow = '0px 0px 10px green'
    }else if(num<0){
        result.style.textShadow = '0px 0px 10px red'
        section.style.boxShadow = '0px 0px 10px red'
    }else{
        result.style.textShadow= '0px 0px 10px #030363'
        section.style.boxShadow = '0px 0px 10px #030363'
    }
}

