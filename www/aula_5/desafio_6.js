let saldos = [100, -20, 200, -30, 150]
let soma = 0
//console.log(saldos[1]) - Exibe o primeiro elemento do array.
for(let i = 0; i < saldos.length; ++i) {
    if(saldos[i] > 0) {
        soma = soma + saldos[i] // se for true adiciona o valor a 'soma'.
    }
}
console.log("Valores positivos somados:")
console.log(soma)