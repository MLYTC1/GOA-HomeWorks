const image = document.getElementById('photo')

let photoArray = [
    'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
    'https://images.ctfassets.net/qr8kennq1pom/NmpTCpNKFlKZcKk7Ft5oq/402018c69a1a97bc693c7c0c94fea8be/tom-podmore-1zkHXas1GIo-unsplash.jpg',
    'https://europeinwinter.com/wp-content/uploads/2022/10/iStock-655737106-1226x800.jpg',
    'https://www.rivieratravel.co.uk/sites/default/files/styles/16_9_750x422/public/assetbank/CLS_Day_9_Spain%2C%20Balearics%20%26%20Malta%20on%20Star%20Clipper_Cagliari_Sardinia_GettyImages-1390896943.jpg.webp?itok=wNdVTQ7c',
    'https://cdn.britannica.com/57/122157-050-21261E20/Side-view-Sphinx-Great-Pyramid-of-Khufu.jpg',
    'https://cdn.getyourguide.com/img/tour/63a04b3da54de.jpeg/145.jpg'

]

let index = 0

function nextPhoto(){
    if(index < photoArray.length-1){
        index +=1
        image.src = photoArray[index]
        console.log(index)
}else{
    index = 0
    image.src = photoArray[0]
    console.log(index)
}
}


function backPhoto(){
    if(index > 0){
        index -=1
        image.src = photoArray[index]
        console.log(index)
    }else{
        index = photoArray.length
        
    }
}