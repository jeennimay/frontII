//23/08/21 - Append Child

//Selecionar um elemento do HTML
let elemento = document.querySelector("#imagem");

//Consultar se existe um atributo SRC
alert(elemento.hasAttribute("src")); // True or false - ./img/image-hat.jpg

//excluior o valor do atributo
alert(elemento.removeAttribute("src"));

//adicionar um atributo com o valor
alert(elemento.setAttribute("src, ./img/image_hat.jpg"));