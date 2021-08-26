let a = parseInt(prompt("Escolha o primerio número: "));
let operacao = prompt("Qual operação deseja fazer? \n Lembrando que: \n + = soma \n - = subtração \n * = multiplicação \n / = dividir ");
let b = parseInt(prompt("Escolha o segundo número: "));

function calcular(a, b, operacao) {
    let resultado = 0;

    if (operacao == '+') {
        let resultado = (a + b);
        return alert(`${a} + ${b} = ${resultado}`);
    }
    if (operacao == '-') {
        let resultado = (a - b);
        return alert(`${a} - ${b} = ${resultado}`);
    }
    if (operacao == '*') {
        let resultado = (a * b);
        return alert(`${a} * ${b} = ${resultado}`);
    }
    if (operacao == '/') {
        if (b != 0) {
            let resultado = (a / b);
            return alert(`${a} / ${b} = ${resultado}`);
        } else {
            return alert("Impossível dividir por zero");
        }
    }
} calcular(a, b, operacao);