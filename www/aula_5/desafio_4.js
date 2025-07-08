let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

let contador = []

for(let i = 0; i < numeros.length; ++i) {
    if(numeros[i]% 2 == 1) {
        ++contador
    }
}

console.log(contador)