// 1.
const numeros = [2, 5, 8, 3, 10, 7]

let contador = 0

for(let i = 0; i < numeros.length; ++i) {
    if(numeros[i] > 6) {
        console.log(numeros[i])
    }
}

// 2.
const letras = ['s', 'b', 'e', 'd', 'n', 'f', 'a', 'h', 'i']

let pares = []

for(let i = 0; i < letras.length; ++i) {
    if(i% 2 === 0) {
        pares.push(letras[i])
    }
}

console.log(pares)

//3. 

function ehPar(numero) {
    if( numero % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

ehPar(4);
ehPar(8);

//4. 

function resumoPessoa(nome, idade, cidade) {
    console.log(`${nome} tem ${idade} anos e mora em ${cidade}.`)
}

resumoPessoa('Vitor', 16, 'RJ');

//5. 

function contarNegativos() {
    let valores = [5, -2, 0, -7, 3, -5]
    let contar = 0
    for(let i = 0; i < valores.length; ++i){
        if(valores[i] < 0) {
            ++contar
        }   
    }

    console.log(contar)
}

contarNegativos();