function podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade){
    return concluiuEnsinoMedio &&idade>=18 &&!cursandoOutrafaculdade}

    // Dados para testar a funlção
    let concluiuEnsinoMedio = true // sim conclui
    let idade = 22 // Definindo idade
    let cursandoOutrafaculdade = false // false para dizer não

    // vericar se pode estudar na faculdade
    let resultado = podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade)


    // exibindo o resultado
    if (resultado){
        console.log('Voce pode entrar na faculdade')
    }
else{
    console.log('voce não pode entrar na faculdade')
}

