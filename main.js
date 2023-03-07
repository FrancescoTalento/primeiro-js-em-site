
// Constantes
const listaDeTeclas = document.querySelectorAll('.tecla');


// Variaveis
let tamanhoListaDeTeclas = listaDeTeclas.length;



function tocaSons (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
     
    if (elemento != null && elemento.localName === 'audio'){
     elemento.play;
    }
    else{
    console.log ('Elemento não encontrado ou seletor inválido');
    }
}
     


// Contador tecla e sons
for (let contador = 0; contador < tamanhoListaDeTeclas; contador++){ 

    
    const teclaPosicao = listaDeTeclas[contador]
    const instrumento = teclaPosicao.classList[1]
    const idAudio = `#som_${instrumento}`;
     

    teclaPosicao.onclick = function (){
        tocaSons(idAudio);
    }


    

// DemonstrA CLICK 
    teclaPosicao.onkeydown = function (evento){

    

        if (evento.code === 'Space' || evento.code === 'Enter') {
            teclaPosicao.classList.add('ativa');
        }


    }
    teclaPosicao.onkeyup = function () {
        teclaPosicao.classList.remove('ativa');
    }


}