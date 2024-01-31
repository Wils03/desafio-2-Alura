let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
let peso = document.getElementById('peso').value;
let altura =document.getElementById('altura').value;

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(){
    let indiceMassa = (peso / Math.pow(altura,2) ) * 10000;
    let mensagem = `Seu indice de massa corporal é de ${indiceMassa.toFixed(2)}.`;
    exibirTextoNaTela('h2', mensagem);
    resultadoIMC(indiceMassa);
}

function resultadoIMC(Massa){
    let mensagemResult;
    if(Massa < 18.5){
        mensagemResult = 'Voce esta abaixo do peso.';
    }else{
        if ((Massa >= 18.5) && (Massa < 25)){
        mensagemResult = 'Voce esta com peso normal.';
    }else{
        if ((Massa >= 25) && (Massa < 30)){
            mensagemResult = 'Voce esta com sobrepeso.';
        }else{
            mensagemResult = 'Voce esta obeso.';
            }
        }
    }
    document.getElementById('resultado').style.visibility = 'visible';
    exibirTextoNaTela('p1', mensagemResult);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}