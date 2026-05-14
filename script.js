async function resumirComIA() {
    const texto = document.getElementById("texto-doc").value;
    const btn = document.getElementById("btn-resumir");
    const resultadoDiv = document.getElementById("resultado");
    const textoResultado = document.getElementById("texto-resultado");

    if (!texto) {
        alert("Por favor, cole um texto para resumir!");
        return;
    }

    // 1. Inicia o estado de carregamento
    btn.disabled = true;
    btn.innerText = "⏳ Consultando AWS Bedrock...";
    resultadoDiv.classList.add("hidden");

    // 2. Simula o tempo de resposta da IA (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 3. Simulação de um resumo técnico (Lógica que o Bedrock faria)
    const resumoSimulado = "Este documento descreve as melhores práticas de segurança na AWS, focando no princípio de menor privilégio do IAM e na criptografia de dados em repouso usando KMS.";

    // 4. Exibe o resultado com um efeito simples
    textoResultado.innerText = resumoSimulado;
    resultadoDiv.classList.remove("hidden");

    // 5. Volta o botão ao normal
    btn.disabled = false;
    btn.innerText = "Resumir com AWS Bedrock";
}