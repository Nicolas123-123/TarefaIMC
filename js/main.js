function muda_cor(){
    let body = document.getElementById("bg");
    let cores = ["#483D8B", "#2F4F4F", "#006400", "#556B2F", "#A0522D", 
                 "#4B0082", "#8B008B", "#DC143C", "#8B0000", "#A52A2A"]
    let x = Math.floor(Math.random() * cores.length);

    body.style.backgroundColor = cores[x];
}

function muda_cor_hex(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i=0; i<6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length))
    }
    body.style.backgroundColor = cor;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-imc');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const resultado = document.getElementById('resultado-imc');

        if (peso > 0 && altura > 0) {
            const imc = peso / (altura * altura);
            let classificacao = "";

            if (imc < 18.5) classificacao = "Abaixo do peso";
            else if (imc < 24.9) classificacao = "Peso normal";
            else if (imc < 29.9) classificacao = "Sobrepeso";
            else if (imc < 34.9) classificacao = "Obesidade grau 1";
            else if (imc < 39.9) classificacao = "Obesidade grau 2";
            else classificacao = "Obesidade grau 3";

            resultado.innerHTML = `
                <p><strong>Seu IMC:</strong> ${imc.toFixed(2)}</p>
                <p><strong>Classificação:</strong> ${classificacao}</p>
            `;
        } else {
            resultado.innerText = "Valor Incorreto/Invalido";
        }
    });
});
