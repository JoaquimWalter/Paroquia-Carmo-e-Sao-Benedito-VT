
// Efeito-maquina-de-escrever completo loop

function typeWriter(elemento) {
    const texto = elemento.dataset.texto || elemento.innerHTML;
    const textoArray = texto.split('');
    let i = 0;

    elemento.innerHTML = '';
    elemento.dataset.texto = texto; // Armazena o texto original

    function escrever() {
        if (i < textoArray.length) {
            elemento.innerHTML += textoArray[i];
            i++;
            setTimeout(escrever, 75);
        } else {
            setTimeout(() => apagarTexto(elemento, textoArray), 2000);
        }
    }

    escrever();
}

function apagarTexto(elemento, textoArray) {
    let i = textoArray.length;

    function apagar() {
        if (i > 0) {
            elemento.innerHTML = textoArray.slice(0, i - 1).join('');
            i--;
            setTimeout(apagar, 30);
        } else {
            setTimeout(() => typeWriter(elemento), 500);
        }
    }

    apagar();
}

const titulo = document.querySelector('h1');
typeWriter(titulo);



//Efeito Carrosel

let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)


function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}
