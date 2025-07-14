function somar (a, b) {
    let resultado = a + b;
    console.log(`Resultado da soma: ${resultado}`)
}

function multiplicar(x, y) {
    let resultado = x * y;
    console.log(`Resultado da multiplicação: ${resultado}`)
}

module.exports = {somar, multiplicar};