/*Escreva um programa para ler as notas das duas avaliações de um aluno no semestre.
Faça uma função que receba as duas notas por parâmetro e calcule e escreva a média
semestral e a mensagem “PARABÉNS! Você foi aprovado!” somente se o aluno foi
aprovado (considere 6.0 a média mínima para aprovação)*/

function calcularNotaAvaliacao() {
    var primeiraAvaliacao = parseInt(document.getElementById('primeiraAvaliacao').value);
    var segundaAvaliacao = parseInt(document.getElementById('segundaAvaliacao').value);
    resultado = '';

    var mediaSemestral = (primeiraAvaliacao + segundaAvaliacao) / 2;

    if (mediaSemestral >= 6 && mediaSemestral < 10) {
        resultado = "Aprovado, porém pode ser melhorado";
    } else if (mediaSemestral  < 6) {
        resultado = "Reprovado, lamento";
    } 
    document.querySelector('.resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';
}

document.getElementById('calcular').addEventListener('click', calcularNotaAvaliacao);