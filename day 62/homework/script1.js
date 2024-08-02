let click = document.getElementById('click')

function randomClick(){
    let num1= Math.floor(Math.random()*900)
    let num2= Math.floor(Math.random()*1400)
    click.style.top = num1 + 'px'
    click.style.left = num2 + 'px'
}