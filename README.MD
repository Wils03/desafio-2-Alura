# RESOLUÇÃO DOS DESAFIOS 2

A plataforma Alura nos proporcionou uma lista de desafios (não obriogatórios) para pratica em logica de programação.

Então segue aqui a minha tentativa de resolução dos mesmos.

**OBS.: Desculpe meu nivel em HTML... Estou aprendendo.**
***
### Desafio 1 : Cacular IMC
1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

```
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
```
___

### Desafio 2 : Cacular o Fatorial
2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
```
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
```
___

### Desafio 3 : Conversão de Moeda
3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
```
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
```
___

### Desafio 4 e 5 : Caluculo da Area e Premetro
4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
```
    function caluclarPerimetroCirc(){
        let raio = parseFloat(document.getElementById('diametro').value)/2;
        let result = 2 * numPi * raio ;
        return result;
    }   
```
5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

```
    function caluclarPerimetroCirc(){
        let raio = parseFloat(document.getElementById('diametro').value)/2;
        let result = 2 * numPi * raio ;
        return result;
    }   

    function calcularAreaCircular(){
        let raio =parseFloat(document.getElementById('diametro').value)/2;
     let result = numPi * Math.pow(raio,2);
     document.getElementById('resultado').style.visibility = 'visible';
     return result;
    }
```
___

### Desafio 6 : Tabuada
6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
```
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
```