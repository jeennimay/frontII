import adicao from './adicao.js';
import subtracao from './subtracao.js';
import multiplicacao from './multiplicacao.js';
import divisao from './divisao.js';

let escolhaUser = prompt("Escolha a operação: [adicao],[subtracao],[multiplicacao],[divisao].");

let valoresUserA = prompt("Digite o primeiro valor: ");
let valoresUserB = prompt("Digite o segundo valor: ");

let a = parseInt(valoresUserA);
let b = parseInt(valoresUserB);

switch (escolhaUser) {
    case 'adicao':
        alert(adicao(a,b));
        break;

    case 'subtracao':
        alert(subtracao(a,b));
        break;

    case 'multiplicacao':
        alert(multiplicacao(a,b));
        break;

    case 'divisao':
        alert(divisao(a,b));
        break;

    default:
        break;
}