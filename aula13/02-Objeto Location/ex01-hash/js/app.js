// 10/09/21 - Object Location (aula 13)

let textoCompleto = location.hash; //hash é uma parte do endereço da URL ("âncora")
document.write("hash: ");
document.write("<br>");
document.write(textoCompleto);      //imprimir conteúdo de textoCompleto
document.write("<br><br>");

let dados = textoCompleto.split("#");   //delimitador/quebra através de um caractere ("#")
document.write("Dados convertidos em Array: ");
document.write("<br>");
document.write(dados);  //dados convertidos em array
document.write("<br><br>");

let dados1 = dados[1];
let dados2 = dados[2];
document.write("Dado [1] do array: ");
document.write("<br>");
document.write(dados1);  //dado do array
document.write("<br><br>");
document.write("Dado [2] do array: ");
document.write("<br>");
document.write(dados2);  //dado do array
