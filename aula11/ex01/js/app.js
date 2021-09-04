//01/09/21 - AULA 11 - FORM

/* 
Crie um formulário com dois inputs de texto, um para nome e outro para sobrenome, e um botão submit.
Quando ocorrer uma entrada nos dois campos de texto e o botão submit for pressionado, imprima no html três saídas utilizando os métodos:
trim(), toUpperCase(), toLowerCase() e por final, imprima mais uma saída usando o concat() do primeiro nome com o segundo, 
a uma última saída utilizando o replace(), substituindo todas as letras “a” por “@” e letras “e” por “3”. 
*/

/* tag form */
let form = document.createElement("form");
form.getAttribute("method", "post");
form.getAttribute("action", "#");

document.querySelector("body").appendChild(form);


/* input */
    /* Label nome */
    let labelNome = document.createElement("label");
    labelNome.getAttribute("for", "nome");
    labelNome.innerText = "Nome: ";
        /* appendchild */
        form.appendChild(labelNome);
    /* nome */
    let nome = document.createElement("input");
    nome.getAttribute("type", "text");
    nome.getAttribute("placeholder", "Digite seu nome");
    nome.getAttribute("id", "nome");
        /* appendchild */
        form.appendChild(nome);


    /* Label sobrenome */
    let labelSobrenome = document.createElement("label");
    labelSobrenome.getAttribute("for", "sobrenome");
    labelSobrenome.innerText = "Sobrenome: ";
        /* appendchild */
        form.appendChild(labelSobrenome);
    /* sobrenome */
    let sobrenome = document.createElement("input");
    sobrenome.getAttribute("type", "text");
    sobrenome.getAttribute("placeholder", "Digite seu sobrenome");
    sobrenome.getAttribute("id", "sobrenome");
        /* appendchild */
        form.appendChild(sobrenome);

/* button */
let btn = document.createElement("button")
btn.innerText = "Enviar";
btn.getAttribute("type", "submit");
    /* appendchild */
    form.appendChild(btn);


/* trim(), toUpperCase(), toLowerCase(), concat(), replace(): substituindo todas as letras “a” por “@” e letras “e” por “3”*/
btn.addEventListener("click", (event)=>{
    event.preventDefault();

    let nomeCompleto = (nome.value).concat(" " + sobrenome.value);
    let trim = nomeCompleto.trim();
    let upperCase = nomeCompleto.toUpperCase();
    let lowerCase = nomeCompleto.toLowerCase();

    trocaA = nomeCompleto.replaceAll("a", "@");
    trocaE = trocaA.replaceAll("e", "3");

    let replace = trocaE;


    document.querySelector("body").innerHTML += 
    `<div>
        <h4> Função .concat(): ${nomeCompleto}</h4>
        <h4> Função .trim(): ${trim}</h4>
        <h4> Função .toUpperCase(): ${upperCase}</h4>
        <h4> Função .toLowerCase(): ${lowerCase}</h4>
        <h4> Função .replace(): ${replace}</h4>
    </div>`
});



// Style

    //label
labelNome.style.display = "block";
labelNome.style.cursor = "pointer";
labelNome.style.margin = "1rem 0 0";
labelSobrenome.style.display = "block";
labelSobrenome.style.cursor = "pointer";
labelSobrenome.style.margin = "1rem 0 0";

    //input
nome.style.display = "block";
sobrenome.style.display = "block";

    //btn
btn.style.margin = "1rem 3.5rem";

    //div
document.querySelector("div").style.margin = "1rem";
