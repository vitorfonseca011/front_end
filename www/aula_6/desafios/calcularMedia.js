//Calcular média

function media(lista) {
    let acumulador = 0 
    for(let i = 0; i < lista.length; ++i) {
        acumulador += lista[i]
    }
    let divisao = acumulador / lista.length
    console.log(`A média do array é igual a ${divisao}`)
}

module.exports = media;