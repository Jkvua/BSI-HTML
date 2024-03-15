var propostaRecebida = prompt("Marcos informe a proposta que você recebeu pelo ingresso: ");
var sonoMulher = prompt("Informe o tempo de sono da garota durante o filme: ");

sonoHomem = parseInt(sonoHomem);
sonoMulher = parseInt(sonoMulher); /*converter para numeros */

filmeRomance = 90;
filmeInvestigacao = 110;

var tempoAcordadoGaroto = filmeRomance - sonoHomem;
var tempoAcordaddoGarota = filmeInvestigacao - sonoMulher

alert("O tempo que o homem assistiu o filme foi de " + tempoAcordadoGaroto + " minutos");
alert("O tempo que a mulher ficou acordada assistindo o filme foi de " + tempoAcordaddoGarota + " minutos");