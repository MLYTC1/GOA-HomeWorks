const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')
const countryName = document.getElementById('name')
const finalScore = document.getElementById('score')

let flagArray = [
    '/Day_63/homework/icons/spain-flag.png',
    '/Day_63/homework/icons/usa-flag.png',
    '/Day_63/homework/icons/france - flag.png',
    '/Day_63/homework/icons/egypt-flag.png',
    '/Day_63/homework/icons/georgia flag.png',
    '/Day_63/homework/icons/china-flag.png',
    '/Day_63/homework/icons/portugal-flag.png',
    '/Day_63/homework/icons/brazil-flag.png'
]

let CountryArray = [
    '/Day_63/homework/icons/buildings.png',
    '/Day_63/homework/icons/empire-state-building.png',
    '/Day_63/homework/icons/eiffel-tower (1).png',
    '/Day_63/homework/icons/pyramids.png',
    '/Day_63/homework/icons/khinkali.png',
    '/Day_63/homework/icons/great-wall-of-china.png',
    '/Day_63/homework/icons/travel-to-portugal-icons-and-isolated-design-elements-set-vector-portuguese-and-lisbon-culture-symbols-food-and-landmarks.png',
    '/Day_63/homework/icons/brazil-symbol.png'
]

let CountryNameArray = [
    'SPAIN', 'USA', 'FRANCE', 'EGYPT', 'GEORGIA', 'CHINA', 'PORTUGAL', 'BRAZIL'
]

let score = 0

function matchCountry(){
    let index1 = Math.floor(Math.random() * CountryNameArray.length)
    let index2 = Math.floor(Math.random() * CountryNameArray.length)
    
    // console.log(index1,index2)
    
    image1.src = flagArray[index1]
    image2.src = CountryArray[index2]
    if(index1==index2){
        score +=1
        finalScore.innerHTML = score
        countryName.innerHTML = CountryNameArray[index1]
    }else{
        countryName.innerHTML = ''
    }
}