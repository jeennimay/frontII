//23/08/21 - Mesa de Trabalho

/*
Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

Itens a seguir serão inseridos dentro do formulário:
column.
*/


//3. Um título com o texto: “Login”.
let title = document.createElement("h1");
title.textContent = "Login";
document.body.appendChild(title);


//1. Crie um formulário (html)
let form = document.createElement("form");
form.setAttribute("id", "formulario");
form.setAttribute("method", "post");
form.setAttribute('action', "submit.php");

document.body.appendChild(form);

//2. Selecione o formulário e salve-o numa variável com querySelector.
const formulario = document.querySelector("#formulario");

//4. Um campo de input text com um placeholder: “Email”.
let inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("placeholder", "Email");

formulario.appendChild(inputEmail);

//8. Insira a propriedade disabled no campo de Email.
inputEmail.disabled = true;
    //inputEmail.setAttribute("disabled");
    //readonly : somente leitura


//5. Um campo de input password com um placeholder: “Senha”.
let inputPass = document.createElement("input");
inputPass.setAttribute("type", "password");
inputPass.setAttribute("name", "senha");
inputPass.setAttribute("placeholder", "Senha");

formulario.appendChild(inputPass);

//6. Um botão submit com o texto “Enviar”.
let btnSubmit = document.createElement("button");
btnSubmit.setAttribute("type", "submit");
btnSubmit.setAttribute("value", "Enviar");
btnSubmit.textContent = "Enviar";

formulario.appendChild(btnSubmit);

//7. Um botão reset com o texto “Cancelar”.
let btnCancel = document.createElement("button");
btnCancel.setAttribute("type", "reset");
btnCancel.setAttribute("value", "Cancelar");
btnCancel.textContent = "Cancelar";

formulario.appendChild(btnCancel);


//9. Insira um estilo da sua escolha, a sugestão seria o display flex com flex-direction
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.justifyContent = "center";
formulario.style.alignContent = "center";

//10. Remova o atributo placeholder do email
inputEmail.removeAttribute("placeholder");

//AppendChild
/* formulario.appendChild(inputEmail, inputPass, btnSubmit, btnCancel); */

//Estilização

/* h1 - title */
title.style.textAlign = "center";

/* form */
formulario.style.maxWidth = "400px";
formulario.style.margin = "2rem auto";

/* input */
inputEmail.style.height = "2rem";
inputEmail.style.margin = "0.5rem 0";

inputPass.style.height = "2rem";
inputPass.style.margin = "0.5rem 0";

/* btn - Submit */
btnSubmit.style.height = "2.5rem";
btnSubmit.style.width = "5rem";
btnSubmit.style.borderRadius = "0.7rem";
btnSubmit.style.backgroundColor = "#3f6";
btnSubmit.style.fontWeight = "bolder";
btnSubmit.style.alignSelf = "center";
btnSubmit.style.margin = "0.5rem 0";

/* btn - Cancel */
btnCancel.style.height = "2.5rem";
btnCancel.style.width = "5rem";
btnCancel.style.borderRadius = "0.7rem";
btnCancel.style.backgroundColor = "#292929";
btnCancel.style.fontWeight = "bolder";
btnCancel.style.color = "#f0f0f0";
btnCancel.style.alignSelf = "center";
btnCancel.style.margin = "0.5rem 0";