// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.



// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.


// 1- creare un contenitore con in html con dentro un immagine , creare le due frecce e dare delle stile al tutto

// 2- rimuovere l' img dal contenitore

// 3- creare un array con dentro tutte le img nascoste

// 4- creare un ciclo con un template literal che concatena il tutto

// 5- costruire lo stesso risultato dell'html ma usando js 

const myImg1 = document.createElement ('img')
myImg1.classList.add('w-100', 'd-block')
myImg1.src = "img/01.webp"

const myImg2 = document.createElement ('img')
myImg2.classList.add('w-100','d-none')
myImg2.src = "img/02.webp"

const myImg3 = document.createElement ('img')
myImg3.classList.add('w-100','d-none')
myImg3.src = "img/03.webp"

const myImg4 = document.createElement ('img')
myImg4.classList.add('w-100','d-none')
myImg4.src = "img/04.webp"

const myImg5 = document.createElement ('img')
myImg5.classList.add('w-100','d-none')
myImg5.src = "img/05.webp"


const imgList = [
    myImg1,
    myImg2,
    myImg3,
    myImg4,
    myImg5,
]

console.log(imgList)

const album = document.getElementById('album')


for ( let i = 0; i < imgList.length; i++ ){
    
    album.append(imgList[i]);

}

let next = document.getElementById('next')
let previous = document.getElementById('previous')

let counter = 0

document.querySelector('button.next').addEventListener('click', function(){

    counter ++

    if( counter == imgList.length -1){


    }


})
























// const album = document.getElementById('album');

// let currentSlideIndex = 0 // Range di valori 0 .. imgList.length-1

// for (let i = 0; i < imgList.length; i++) {
//     const imgHTML = imgList[i];

//     if(i === currentSlideIndex) {
//         visualizza = 'd-block'
//     }

//     album.innerHTML += `
//         <div class="picture d-none">
//             ${imgHTML}
//         </div>
//     `
    
// }

// document.querySelector('button.next').addEventListener('click', function() {
//     currentSlideIndex++;

//     if(currentSlideIndex >= imgList.length) {
//         currentSlideIndex = 0;
//     }

//     const slides = document.querySelectorAll('.picture');
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('d-none');
//     }

//     slides[currentSlideIndex].classList.add('d-block')
// })

// document.querySelector('button.previous').addEventListener('click', function() {
//     currentSlideIndex--;

//     if( currentSlideIndex < 0) {
//         currentSlideIndex = imgList.length - 1;
//     }

//     const slides = document.querySelectorAll('.picture');
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('d-none');
//     }

//     slides[currentSlideIndex].classList.add('d-block')
// })