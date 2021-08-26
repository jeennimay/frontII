//23/08/21 - Append Child

var paragrafo = document.createElement("p");

//Criando um texto em uma tag que já existe
var texto = document.createTextNode("Aula 07 - Create Element/Append Child");

//função para iniciar o evento
function iniciar(){
    paragrafo.appendChild(texto);
    document.body.appendChild(paragrafo);
}


window.addEventListener("load", iniciar);