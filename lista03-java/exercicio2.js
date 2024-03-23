function divisivelPorCinco() {
    var numerosInt = parseInt(document.getElementById('numerosInt').value);
    var resultado = '';

    if (numerosInt % 5 === 0) {
        resultado = "Esse número é divisivel por 5";
    }   else {
        resultado = "Esse número não é divisivel por 5";
    }

    document.getElementById('resultado').innerText = resultado;
    document.querySelector('.resultado').style.display = 'block';

}

document.getElementById('calcular').addEventListener('click', divisivelPorCinco)