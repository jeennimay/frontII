alert("Olá, seja bem-vindo ao nosso sistema!");//exibe um alerta ao usuário (pausa o carregamento até clicarmos em OK)

const nomeUser = prompt("Digite seu nome para continuar...");//capta dados digitados

document.querySelector("h2").innerText += " " + nomeUser;

let confirmarProssegimento = confirm("Deseja prosseguir?");
if(confirmarProssegimento) {
    document.querySelector("#prosseguimento").innerText += nomeUser + ", ficamos felizes por você escolher continuar usando nossos serviços! Obrigado!";
}else {
    document.querySelector("#prosseguimento").innerText += nomeUser + ", sua opinião sobre nossos serviços é de suma importância! Diga-nos como foi usar nosso sistema e o que podemos melhorar!";
}