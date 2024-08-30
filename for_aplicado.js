const numeros = [11, 15, 18, 14, 12, 13]

function devolveMaiorNumero(array) {
    let maiorNumero = 0

    for(let i = 0; i< array.length; i++) {
        let numeroAtual = array[i]

    if (numeroAtual >= maiorNumero) {
        maiorNumero = numeroAtual
    }
    }
    console.log('O maior número do array é', maiorNumero)
}
devolveMaiorNumero(numeros)