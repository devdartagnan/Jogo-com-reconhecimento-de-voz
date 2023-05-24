const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.getElementById('numero-menor')
const elementoMaiorValor = document.getElementById('numero-maior')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroSecreto)