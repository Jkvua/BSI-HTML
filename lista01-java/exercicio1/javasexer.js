/*Um casal de namorados aluga dois filmes: um romântico e um de investigação. O
filme romântico tem 90 minutos. Durante esse filme, o garoto dorme a maioria do
tempo, e a garota fica acordada o tempo inteiro. O filme de investigação tem 110
minutos. Durante esse filme, a garota dorme na maioria do tempo, e o garoto fica
acordado o tempo inteiro. Escreva um algoritmo que solicite ao usuário o tempo de
sono de cada pessoa, depois calcule e mostre na tela quanto tempo cada um ficou
acordado assistindo os filmes.*/

document.getElementById('calcular').addEventListener('click', function() {
    var tempoGaroto = parseInt(document.getElementById('tempoGaroto').value);
    var tempoGarota = parseInt(document.getElementById('tempoGarota').value);
  
    var duracaoRomantico = 90;
    var duracaoInvestigacao = 110;
  
    var resultadoGarotoRomantico = duracaoRomantico - tempoGaroto;
    var resultadoGarotaRomantico = duracaoRomantico;
    var resultadoGarotoInvestigacao = duracaoInvestigacao;
    var resultadoGarotaInvestigacao = duracaoInvestigacao - tempoGarota;
  
    document.getElementById('resultadoGarotoRomantico').innerText = "Tempo acordado do garoto durante o filme romântico: " + resultadoGarotoRomantico + " minutos";
    document.getElementById('resultadoGarotaRomantico').innerText = "Tempo acordado da garota durante o filme romântico: " + resultadoGarotaRomantico + " minutos";
    document.getElementById('resultadoGarotoInvestigacao').innerText = "Tempo acordado do garoto durante o filme de investigação: " + resultadoGarotoInvestigacao + " minutos";
    document.getElementById('resultadoGarotaInvestigacao').innerText = "Tempo acordado da garota durante o filme de investigação: " + resultadoGarotaInvestigacao + " minutos";
  
    document.querySelector('.resultado').style.display = 'block';
  });
