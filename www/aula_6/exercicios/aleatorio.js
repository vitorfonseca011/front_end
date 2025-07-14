//Gerar Número Aleatório

function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(`O número sorteado foi ${numeroAleatorio}`)
}

module.exports = gerarNumero