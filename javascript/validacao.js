function validacaoChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if(verificaValor(numero)){
        elementoChute.innerHTML += `<div>NÚMERO INVÁLIDO: O número secreto está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === guardaNumero){
        document.body.innerHTML = 
        `<h2>Você Acertou!</h2>
        <h3>O número secreto era ${guardaNumero}!</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
        `
        
    }
    else if(numero > guardaNumero){
        elementoChute.innerHTML += `<div>O número secreto é menor!</div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior!</div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function verificaValor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})