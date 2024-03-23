/*2. Faça um algoritmo que leia 15 números inteiros e escreva, para cada número lido, se
é par ou ímpar.*/

function numerosPositivosNegativos() {
    var numerosInteiros = parseInt(document.getElementById('numerosInteiros').value);
    var resultado = '';

    if (numerosInteiros % 2 === 0){
        resultado = "Esse número é par"; 
    }   else {
        resultado = "Esse número é impar";
    }

    document.getElementById('resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';

}

document.getElementById('calcular').addEventListener('click', numerosPositivosNegativos)