function quadrado(numero) {
    let aoQuadrado = numero ** 2 
    console.log(`O número ${numero} ao quadrado é ${aoQuadrado}\n`)
}

quadrado(2)

///

function verificarIdade(idade) {
    if( idade >= 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

verificarIdade(17)

///

function media(n1, n2, n3) {
    let soma = n1 + n2 + n3 
    let divisao = soma / 3 

    console.log(`\nA média das suas 3 notas é igual a ${divisao}`)
}

media(7,8,9)