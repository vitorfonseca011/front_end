//Fatorial de um número

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i
    }
    console.log(resultado)
}

module.exports = fatorial