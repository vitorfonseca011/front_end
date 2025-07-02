// Desafio 1 - criar outro Array com números pares

let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(numero => numero % 2 === 0)
console.log('\nDesafio 1')
console.log(numerosPares)

// Desafio 2 - Criar um Array que retorna numeros > 10

let valores = [5, 12, 8, 20, 3, 15]
let maiorDez = valores.filter(valor => valor > 10)
console.log('\nDesafio 2')
console.log(maiorDez)

// Desafio 3 - Em um Array, retornar nome com menos de 5 letras

let nomes = ['Ana', 'João', 'Gabriel', 'Lu']
let menosCinco = nomes.filter(nome => nome.length < 5)
console.log('\nDesafio 3')
console.log(menosCinco)

// Desafio 4 - Array de números filtre apenas os que não sejam 0

let lista = [0, 1 , 0, 3, 5, 0, 7]
let diferenteZero = lista.filter(listar => listar != 0)
console.log('\nDesafio 4')
console.log(diferenteZero)

// Desafio 5 - Remover o último item do Array

let paises = ["Brasil", "itália", "Chile"]
paises.pop([2])
console.log('\nDesafio 5')
console.log(paises)

// Desafio 6 - Senha 

let senha = "Senai"

console.log('\nDesafio 6')

if (senha.length <= 7) {
    console.log('\nA senha deve ter no mínimo 8 caracteres')
} else {
    console.log('\nSenha Válida')
}


