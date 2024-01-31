let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
titulo = document.querySelector('h2');
titulo.innerHTML = 'Vamos calcular a tabuada:';
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function resultadoTabuada(){
    let numInformado = parseFloat(document.getElementById('numero informado').value);
    let resultado = [];
    for (var i = 0; i <= 10; i++){
        resultado[i] = calcularTabuada(numInformado,i);
        document.getElementById('resultado').style.visibility = 'visible';
        let mensagemTela = `Multiplicando: ${numInformado} x ${i} = ${resultado[i]}`;
        exibirTextoNaTela('p'+(i+1),mensagemTela);
    }
}

function calcularTabuada(numParam,posi){
        resultado[posi] = numParam * posi;
        return resultado[posi];
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

