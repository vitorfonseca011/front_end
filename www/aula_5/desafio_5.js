let nomes = ["João", "Gabriela", "Ana", "Roberto"]

let contador = []

for(let i = 0; i < nomes.length; ++i) {
    if(nomes[i].length > 5) {
        ++contador
    }
}

console.log(contador)