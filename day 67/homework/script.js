const Btn = document.getElementsByClassName('btn')
const resultBtn =document.getElementById('result-btn')
const result = document.getElementById('result')
const example = document.getElementById('example')
const delBtn = document.getElementById('del-btn')

let numArr = []
let num = ''



for(let i = 0; i<Btn.length; i++){
    Btn[i].addEventListener('click',function(){
        if(Btn[i].innerHTML != '+' && Btn[i].innerHTML != '-' && Btn[i].innerHTML != '*' && Btn[i].innerHTML != '/' ){
            num += Btn[i].innerHTML
            console.log(num)
            
            example.innerHTML += Btn[i].innerHTML
            
                
         }else if(Btn[i].innerHTML == '+' || Btn[i].innerHTML == '-' || Btn[i].innerHTML == '*' || Btn[i].innerHTML == '/' ){
                numArr.push(num)
                numArr.push(Btn[i].innerHTML)

                num=''
                example.innerHTML += Btn[i].innerHTML
                
            }
       
   
    console.log(numArr)
                
})   
}

result.addEventListener('click',function(){
    numArr.push(num)
    console.log(numArr)

    // ნამრავლი-გაყოფა
    let multNum = 0
    for(let i = 0; i<numArr.length;i++){
        if(numArr[i]=='*'){
            multNum = numArr[i-1] * numArr[i+1]
            numArr[i-1]=multNum
            numArr.splice(i,2)
            console.log(numArr)
            i--
        }else if(numArr[i]=='/'){
            multNum = numArr[i-1] / numArr[i+1]
            numArr[i-1]=multNum
            numArr.splice(i,2)
            console.log(numArr)
            i--
        }resultBtn.innerHTML = multNum
    } 

    // მიმატება-გამოკლება
    let helpNum = Number(numArr[0])
    for(let i = 1; i< numArr.length;i++){
        if(numArr[i]=='+'){
            helpNum += Number(numArr[i+1])
        }else if(numArr[i]=='-'){
            helpNum -= Number(numArr[i+1])
        }
        
    }
    console.log(helpNum)  
    example.innerHTML = " "
    resultBtn.innerHTML = helpNum
})

