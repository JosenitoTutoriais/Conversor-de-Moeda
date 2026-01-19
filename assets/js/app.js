function converter() {
    const real = parseFloat(document.getElementById('real').value);
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const moeda = document.getElementById('opcao').value;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(real) || real <= 0 || isNaN(cotacao) || cotacao <= 0) {
        resultadoDiv.textContent = "Por favor, insira valores válidos maiores que zero.";
        return;
    }

    const convertido = real * cotacao;
    const simbolo = moeda === 'USD' ? '$' : '€';

    resultadoDiv.innerHTML = `
        Valor convertido: <strong>${simbolo} ${convertido.toFixed(2)}</strong><br>
        Câmbio utilizado: <strong>R$ ${cotacao.toFixed(2)}</strong>
    `;
}

function irParaProximaTela() {
    window.location.href = "criar.html"; // Substitua com o caminho da próxima tela
}