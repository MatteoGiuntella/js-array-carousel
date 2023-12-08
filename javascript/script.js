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

const imgList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]

console.log(imgList)

let folderImg = '';

for (let i = 0; i < imgList.length; i++){

    folderImg += `<div id="album-container" class="album"><img src="./img/${ imgList[i] }"></div>`;
};

let slide = document.querySelector('#album').innerHTML = folderImg;

let next = document.getElementById('next');
let previous = document.getElementById('previous');



