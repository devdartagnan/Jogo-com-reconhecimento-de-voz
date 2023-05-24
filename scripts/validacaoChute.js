function validacaoChute(e) {
    const chute = +e
    if (Number.isNaN(chute)) {
        resultado.innerHTML += `
        <div class="resposta-dica">
            Valor inválido, o valor deverá ser um número
        </div>`
        return
    }
    if(chute === 'Game over'){
        document.body.innerHTML = `
        <body style="background-color:red;">
            <h2 class="titulo">Game  Over!</h2>
            <button id="jogarNovamente" class="jogarNovamente">Jogar novamente</button>
        <ybody>`
    }
    if (verificaEntreValores(chute)) {
        resultado.innerHTML += `
        <div class="resposta-dica">
            o valor deverá estar entre, ${menorValor} e ${maiorValor}
        </div>`
        return
    }
    if (chute === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="titulo">Você acertou!</h2>
            <h3 class="sub-titulo">O número secreto era ${numeroSecreto}.</h3>
            <button id="jogarNovamente" class="jogarNovamente">Jogar novamente</button>`
    }
    if (!verificaEntreValores(chute) && chute < numeroSecreto) {
        resultado.innerHTML += `
        <div class="resposta-dica">O número secreto é maior
            <span class="material-symbols-outlined">
            trending_up
            </span>
        </div>
        `
    }
    if (!verificaEntreValores(chute) && chute > numeroSecreto) {
        resultado.innerHTML += `
        <div class="resposta-dica">O número secreto é menor
            <span class="material-symbols-outlined">
            trending_down
            </span>
        </div>
        `
    }
}

function verificaEntreValores(chute) {
    return chute > maiorValor || chute < menorValor
}
