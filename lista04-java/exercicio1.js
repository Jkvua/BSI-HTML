/*1. Faça uma função para converter uma temperatura em graus Fahrenheit para Celsius. A
temperatura em Fahrenheit é o dado de entrada e a temperatura em Celsius é o dado
de saída. Utilize a fórmula C = (F - 32) * 5/9, onde F é a temperatura em Fahrenheit e
C é a temperatura em Celsius.*/

function temperaturaF() {
    var temperaturafahre = parseInt(document.getElementById('temperaturafahre').value);
    var resultado = (temperaturafahre - 32) * 5/9;

    document.getElementById('resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';

}

document.getElementById('calcular').addEventListener('click', temperaturaF);