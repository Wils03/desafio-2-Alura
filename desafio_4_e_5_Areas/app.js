let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
titulo = document.querySelector('h2');
titulo.innerHTML = 'Vamos calcular a area:';
let formatoAtual;
const numPi = 3.14;
selecaoFormato();
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function resultadoArea(){
    let area;
    let perimetro;
    let mensagem;
    if (formatoAtual == 'circ'){
        area = calcularAreaCircular();
        perimetro = caluclarPerimetroCirc();
        mensagem = `A area calculada é de ${area.toFixed(2)}m².`;
        exibirTextoNaTela('p1',mensagem);
        mensagem = `O perimetro calculado é de ${perimetro.toFixed(2)}m.`;
        exibirTextoNaTela('p2',mensagem);
    }else{
        area = calcularAreaRetQuad();
        mensagem = `A area calculada é de ${area.toFixed(2)}m².`;
        exibirTextoNaTela('p1',mensagem);
        mensagem = '';
        exibirTextoNaTela('p2',mensagem);
    }    
}

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
function calcularAreaRetQuad(){
    let larg =parseFloat(document.getElementById('largura').value);
    let alt =parseFloat(document.getElementById('altura').value);
    let result = larg*alt;
    document.getElementById('resultado').style.visibility = 'visible';
    return result;

}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function selecaoFormato(){
    let formato = document.getElementById('formas');
    formato.addEventListener('change', function (){
        console.log(formato.value);
        if (formato.value == 'circ'){
            formatoAtual = formato.value;
            document.getElementById('bLargura').style.visibility = 'hidden';
            document.getElementById('bAltura').style.visibility = 'hidden';
            document.getElementById('bDiametro').style.visibility = 'visible';
        }else{
            if (formato.value == 'ret'){
                formatoAtual = formato.value;
                document.getElementById('bLargura').style.visibility = 'visible';
                document.getElementById('bAltura').style.visibility = 'visible';
                document.getElementById('bDiametro').style.visibility = 'hidden';
            }
        }   
    }
)}