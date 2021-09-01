/* alert("HEEEEEY"); */
let btn = document.querySelector(".btn"); /* chamando elemento botão pela classe .btn */
btn.addEventListener("click", (evento) => {evento.preventDefault()}); /* neutralizando evento padrão do botão submit pelo evento click */


/* Criando função criar Card */
function createCard() {
    /* valores inseridos pelo usuário */
  let description = document.getElementById("description").value /* criando variável description, para puxar o valor inserido no elemento input pelo (id)#description, do form */

  let urlImg = document.getElementById("url_img").value/* criando variável urlImg, para puxar o valor inserido no elemento input pelo (id)#url_img, do form*/


    /* transferindo as informações inseridas pelo usuário no formulário para o html */
  let cardSection = document.getElementById("card"); /* criando a variável cardSection, para puxar o elemento div pelo (id)#card */
  
    cardSection.innerHTML += `<div> <img src="${urlImg}">
                                    <p>${description}<p> </div>`;
  /* criando a estrutura do html, dentro da div(#card), que ira reeber as informações do card */
}

/* função pop - exibe a janela de formulário, para interação com usuários */
function pop() {
  document.getElementById('pop').style.display='block'; /* adicionando estilo, display = block, ao elemento que contem o id="pop" */
}

/* função fechar - esconde a janela de formulário */
function fechar() {
    document.getElementById('pop').style.display='none';/* adicionando estilo, display = none, ao elemento que contem o id="pop" */
}