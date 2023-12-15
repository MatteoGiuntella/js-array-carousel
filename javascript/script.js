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

// creo una array con dentro le img

console.log(imgList)

let folderImg = '';

// creo una costante senza valore 

for (let i = 0; i < imgList.length; i++){

    folderImg += `<div id="album-container" class="album"><img src="./img/${ imgList[i] }"></div>`;
};

// la mia costante senza valore la ficco in un ciclo dove assegno e add come valore un elemnto html

let slide = document.querySelector('#album').innerHTML = folderImg;

// creo un variante con assegnazione della variante contente elemnto html e a stampo nel id album

let next = document.getElementById('next');
let previous = document.getElementById('previous');

// creo due varianti per i bottoni che mi faranno scorrere le img nel carosello

let carousel = document.getElementsByClassName("album");

//  ho creato una variante con assegnazione della classe con display-none

let counter = 0;

//  creato un contatore con valore zero che mi servirà per slidare le foto nel carosello

carousel[counter].classList.add('visual'); 

// aggiungo alla variante carousel [ con il valore di counter] la classe block

next.addEventListener("click", function(){

    // carousel[counter].classList.remove('visual');

    // if ( counter < imgList.length -1 ){

    // counter ++;

    // }
    // else{

    // counter = 0;

    // }
    // carousel[counter].classList.add('visual');
})

// ho creato un loop infinito con il bottone next e previous in modo tale che lo slider non si fermerà all'ultima img ma ricomincerà da capo

previous.addEventListener("click", function(){
    carousel[counter].classList.remove('visual');

    if ( counter != 0){
        counter --;
    }
    else{
        counter = imgList.length-1;
    }
    carousel[counter].classList.add('visual');
})


setInterval(myRetard, 3000);

function myRetard(){
    carousel[counter].classList.remove('visual');

    if ( counter < imgList.length -1 ){

    counter ++;

    }
    else{

    counter = 0;

    }
    carousel[counter].classList.add('visual');
}



