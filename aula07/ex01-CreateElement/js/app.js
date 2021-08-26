//Crete Element - 23/08/21 (Aula 07)

/* Cria uma tag no html */

var titulo = document.createElement("h1");
titulo.textContent = "Aula 07 - Creat Document";

//função para iniciar o evento
function iniciar(){
    document.body.appendChild(titulo);
}


window.addEventListener("load", iniciar);