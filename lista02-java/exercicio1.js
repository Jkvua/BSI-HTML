/*1. Faça um programa que peça dois números e imprima o maior deles.*/

function calcularMaiorValor() {
    var primeiroNumero = parseInt(document.getElementById('primeiroNumero').value);
    var segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    var resultado = '';

    if (primeiroNumero > segundoNumero) {
        resultado = "O primeiro valor é maior: " + primeiroNumero;
    } else if (segundoNumero > primeiroNumero){
        resultado = "O segundo valor é maior: " + segundoNumero;
    } else {
        resultado = "Os dois são iguais";
    }

    document.getElementById('resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';
}


document.getElementById('calcular').addEventListener('click', calcularMaiorValor);


