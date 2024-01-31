let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
titulo = document.querySelector('h2');
titulo.innerHTML = 'Conversão em Real';
let cotacaoDolar = 4.80;
document.getElementById('cotacao').value;
exibirTextoNaTela('p1',cotacaoDolar.toFixed(2));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function resultadoConvercao(){
    let result = calculoConvercao();//chamada da função para calculo
    document.getElementById('resultado').style.visibility = 'visible';//tornando visivel campo do resultado.
    exibirTextoNaTela('p2',result);
}

function calculoConvercao(){
    let valorDolar = parseFloat(document.getElementById('dolar').value);//captura do valor inserido
    let result = valorDolar * cotacaoDolar;//Caso haja necessidade podemos alterar a coração do dolar por uma var.
    console.log("Valor convertido $"+valorDolar.toFixed(2),".");
    return result.toFixed(2);
}

function exibirTextoNaTela(tag, texto) {//função para retorno de mensagens
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}