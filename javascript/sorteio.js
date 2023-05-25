const guardaNumero = geradorAleatorio()
const menorValor = 1 
const maiorValor = 1000

function geradorAleatorio (){
    return parseInt(Math.random() * 1000 + 1)

}

console.log(guardaNumero)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor