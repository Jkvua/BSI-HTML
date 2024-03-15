/*Um casal de namorados aluga dois filmes: um romântico e um de investigação. O
filme romântico tem 90 minutos. Durante esse filme, o garoto dorme a maioria do
tempo, e a garota fica acordada o tempo inteiro. O filme de investigação tem 110
minutos. Durante esse filme, a garota dorme na maioria do tempo, e o garoto fica
acordado o tempo inteiro. Escreva um algoritmo que solicite ao usuário o tempo de
sono de cada pessoa, depois calcule e mostre na tela quanto tempo cada um ficou
acordado assistindo os filmes.*/

var sonoHomem = prompt("Informe o tempo de sono do garoto durante o filme: ");
var sonoMulher = prompt("Informe o tempo de sono da garota durante o filme: ");

sonoHomem = parseInt(sonoHomem);
sonoMulher = parseInt(sonoMulher); /*converter para numeros */

filmeRomance = 90;
filmeInvestigacao = 110;

var tempoAcordadoGaroto = filmeRomance - sonoHomem;
var tempoAcordaddoGarota = filmeInvestigacao - sonoMulher

alert("O tempo que o homem assistiu o filme foi de " + tempoAcordadoGaroto + " minutos");
alert("O tempo que a mulher ficou acordada assistindo o filme foi de " + tempoAcordaddoGarota + " minutos");
