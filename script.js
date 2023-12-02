var calculo = document.getElementById('areaTexto');
calculo.addEventListener('keydown', function(e) { // evento Enter
    if (e.key === 'Enter') {
        calculando();
    }
})
function calculando() { // função do calculo
    let result = eval(calculo.value); // criando uma variavel local com o valor resultado da conta
    const textResult = document.getElementById('res'); // selecionando elemento onde mostra resultado
    if (result%1 != 0) {
        if (result > 9999999) {
            textResult.textContent = result.toExponential(2); // formatação para número cientifico para longas strings
        } else {
            textResult.textContent = result.toFixed(2); // formatação comum com dois numeros decimais
        }
    } else {
        if (result > 9999999) {
            textResult.textContent = result.toExponential(2); // formatação para número cientifico para longas strings
        } else {
            textResult.textContent = result; // formatação comum com dois numeros decimais
        }
    }
    historico(textResult.textContent, calculo.value);
    calculo.value = ""; // limpando area do texto
}
function botaoNumero(botao) { // função para adicionar texto na string por meio de botões
    calculo.value += botao.textContent;
}
function apagar() { // função de apagar texto por botão
    calculo.value = calculo.value.slice(0, -1);
}
function historico(ultimaConta, operacao) { // função para histórico
    const historicoTexto = document.getElementById('historico');
    if (historicoTexto.textContent === "") {
        historicoTexto.innerHTML += operacao + " = " + ultimaConta;
    } else {
        historicoTexto.innerHTML += "<br>" + operacao + " = " + ultimaConta;
    }
}