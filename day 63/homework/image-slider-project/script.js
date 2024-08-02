 const image = document.getElementById('img')

 image.src = '/Day_63/image-slider-project/img/img2.jpg'

 let imgArray = ['/Day_63/image-slider-project/img/img2.jpg', 
 '/Day_63/image-slider-project/img/img1.jpg', 
 'https://d1ef7ke0x2i9g8.cloudfront.net/manila/Guests-Viewing-Van-Goghs-Artwork-at-Wisdom-of-Da-Vinci.jpg',
 'https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/2022/0620/T0620PERCEPTION_C_HR/Da-Vinci-exhibit-debuts-at-a-new-digital-art-museu.jpg?tr=w-780%2Ch-440%2Cfo-auto',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4urwUgEkI4bmKaNr7T2mQuMRt9EQWtg4vuKhITJHEZ9ObWFrUA0NXKW1TaNaTKM1PmHk&usqp=CAU',
'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/PLNO7656FFEGNFNAMXIOSM5F6A.jpg']


 function next(){
    let index = Math.floor(Math.random() * imgArray.length)
    image.src = imgArray[index]
 }