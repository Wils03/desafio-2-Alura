let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
titulo = document.querySelector('h2');
titulo.innerHTML = 'Calculando Fatoração!';

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function resultadoFartorial(){
    let result = calculoFatoracao();
    document.getElementById('resultado').style.visibility = 'visible';
    exibirTextoNaTela('p2',result);
}

function calculoFatoracao(){
    let numParam = parseFloat(document.getElementById('fatoracao').value);
    console.log(numParam);
    let result =1;
    for (let i = numParam; i > 0; i--){
        result *= i;
        console.log(result, i);
    }
    return result;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}