// 25/08/21 - aula 08 - Pratica Integradora

/*
Prática Integradora
Objetivo: Construir um formulário e alterar suas propriedades com JavaScript.

Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:
*/

//Crie um formulário com campos de input e botões de submit e reset.
//elemento form

let formulario = document.createElement("form");
document.body.appendChild(formulario);
formulario.setAttribute("id", "formulario");
formulario.setAttribute("method", "post");


    //input
        //label
let labelConteudo = document.createElement("label");
labelConteudo.setAttribute("for", "conteudo");
labelConteudo.innerText = "Escreva uma palavra:";
    
formulario.appendChild(labelConteudo);

    //style - label
labelConteudo.style.margin = "20px 0";
labelConteudo.style.display = "block";

//conteúdo
let inputConteudo = document.createElement("input");
inputConteudo.setAttribute("type", "text");
inputConteudo.setAttribute("id", "conteudo");
inputConteudo.setAttribute("name", "conteudo");
inputConteudo.setAttribute("placeholder", "Escreva uma palavra");

formulario.appendChild(inputConteudo);

//style - conteúdo
inputConteudo.style.margin = "20px 0";
inputConteudo.style.border = "0.3px solid";
inputConteudo.style.borderRadius = "20px";
inputConteudo.style.padding = "10px";
inputConteudo.style.textAlign = "center";
inputConteudo.style.display = "block";


    //elemento button
        //submit
let btnSubmit = document.createElement("button");
btnSubmit.setAttribute("type", "submit");
btnSubmit.setAttribute("value", "Enviar");
btnSubmit.innerText = "Enviar";

formulario.appendChild(btnSubmit);

//style - button
btnSubmit.style.height = "35px";
btnSubmit.style.width = "80px";
btnSubmit.style.borderRadius = "15px";
btnSubmit.style.border = "none";
btnSubmit.style.backgroundColor = "green";
btnSubmit.style.fontWeight = "bolder";
btnSubmit.style.cursor = "pointer";
btnSubmit.style.marginRight = "10px";



//reset
let btnReset = document.createElement("button");
btnReset.setAttribute("type", "reset");
btnReset.setAttribute("value", "Cancelar");
btnReset.innerText = "Cancelar";

formulario.appendChild(btnReset);

//style - button
btnReset.style.height = "35px";
btnReset.style.width = "80px";
btnReset.style.borderRadius = "15px";
btnReset.style.border = "none";
btnReset.style.backgroundColor = "#123";
btnReset.style.color = "White";
btnReset.style.cursor = "pointer";
btnReset.style.marginLeft = "10px";


//Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
btnSubmit.addEventListener("click", (evento) => { evento.preventDefault() });


//Mostre um alerta na página quando a tela terminar de ser carregada.
/* document.getElementsByName("body").onload(alert("Página carregada!")); */


//Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
let div = document.createElement("div");
document.body.appendChild(div);
div.style.display = "block";

let paragrafo = document.createElement("p");
paragrafo.setAttribute("id", "p_conteudo");
div.appendChild(paragrafo);

paragrafo.innerText = "palavra";


paragrafo.onmouseover = (obj, color, backgroundColor) => { paragrafo.style.color = "purple"; paragrafo.style.backgroundColor = "#77F067"; paragrafo.style.fontWeight = "bolder"; };

paragrafo.onmouseout = (obj, color, backgroundColor) => {paragrafo.style.color = "black"; paragrafo.style.backgroundColor = "white"; paragrafo.style.fontWeight = "normal";};


//Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag p e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .

contador = 0;

conteudo = document.getElementById("conteudo");
pConteudo = document.getElementById("p_conteudo");

conteudo.addEventListener("keyup", eventoTeclado = () => {

    contador++; 
    pConteudo.innerHTML = conteudo.value + " : " + contador;
    
});


/* conteudo.addEventListener("keydown", eventoTeclado = () => {
    if (e.key == backspace) {
        contador--;        
    }else{
        contador++; 
        pConteudo.innerHTML = conteudo.value + " : " + contador;
    }
}); */


//style - body


