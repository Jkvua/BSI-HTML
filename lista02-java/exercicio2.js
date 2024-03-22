function calcularMediaAluno() {
    var primeiraNota = parseInt(document.getElementById('primeiraNota').value);
    var segundaNota = parseInt(document.getElementById('segundaNota').value);
    resultado = '';

    var mediaNota = (primeiraNota + segundaNota) / 2;

    if (mediaNota >= 7 && mediaNota < 10) {
        resultado = "Aprovado";
    } else if (mediaNota  < 7) {
        resultado = "Reprovado";
    } else if (mediaNota === 10){
        resultado = "Aprovado com Distinção";
    }

    document.querySelector('.resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';
}

document.getElementById('calcular').addEventListener('click', calcularMediaAluno);