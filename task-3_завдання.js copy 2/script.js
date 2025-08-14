
let gallery = document.querySelector('#gallery')

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

for (let i = 0; i < images.length; i++) {
    let newGalleryElement = document.createElement('li')
    let newGalleryImg = document.createElement('img')

    newGalleryImg.src = images[i].url
    newGalleryImg.alt = images[i].alt
    newGalleryImg.style.width = '300px'
    newGalleryImg.style.height = '300px'

    newGalleryElement.style.listStyle = 'none'

    gallery.style.display = 'flex'
    gallery.style.gap = '60px'
    gallery.style.justifyContent = 'center'
    gallery.style.background = 'green'

    newGalleryElement.append(newGalleryImg)
    gallery.append(newGalleryElement)
}