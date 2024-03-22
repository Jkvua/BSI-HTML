document.getElementById('calcular').addEventListener('click', function(){
    var propostaRecebida = parseInt(document.getElementById('propostaRecebida').value);

    var valorIngresso = 150;
    var calculoDiferenca = valorIngresso - propostaRecebida;

    document.getElementById('calculoDiferenca').innerText = "A diferença entre a proposta recebida e o valor pago pelo ingresso é de: " + calculoDiferenca + 'R$';
    
    document.querySelector('.resultado').style.display = 'block';
});



/*var propostaRecebida = prompt("Marcos informe a proposta que você recebeu pelo ingresso: ");

propostaRecebida = parseInt(propostaRecebida)

valorIngresso =  150;

var calculoDiferenca = valorIngresso - propostaRecebida;

alert("O tempo que o homem assistiu o filme foi de " + tempoAcordadoGaroto + " minutos");
alert("O tempo que a mulher ficou acordada assistindo o filme foi de " + tempoAcordaddoGarota + " minutos");*/