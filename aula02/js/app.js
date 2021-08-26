/* 11/08/21 - aula02 */

//alert() - abre um popap no navegador

/*
let nome = "Jenni";
alert(nome);
*/

let situacao = confirm("Para acessar o Sistema - pressione OK");

if(situacao){
    //redirecionar o usuário para a página de acesso permitido
    window.location.href="./acessopermitido.html"
} else{
    window.location.href="./acessonegado.html"
}