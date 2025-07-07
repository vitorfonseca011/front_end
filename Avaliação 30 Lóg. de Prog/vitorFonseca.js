let nome = "Vitor"
let idade = 16

console.log(`Meu nome é ${nome}, e eu tenho ${idade} anos.`)


let nota = 9

if (nota < 0 || nota > 10) {
    console.log("Nota inválida.")
}else if( nota >= 7) {
    console.log("Aprovado.")
}else if (nota >= 5 && nota < 7 ) {
    console.log("Recuperação.")
}else if(nota < 5) {
    console.log("Reprovado.")
} else if (nota < 0 || nota > 10) {
    console.log("Nota inválida.")
}


for (let numero = 1; numero <= 21; numero++) {
    if (numero%2 == 1) {
        console.log(numero)
    }
}

let frutas = ['Abacaxi', 'Uva', 'Laranja', 'Melao', 'Melancia']
let fruta = 1

for(let ordem = 0; fruta <= 5; ordem++ ) {
    console.log(`Fruta ${fruta++}: ${frutas[ordem]}`) 
}


/*                      JEITO VITOR 
let frutas = ['Abacaxi', 'Uva', 'Laranja', 'Melao', 'Melancia']
for( let i =0; i < frutas.length; ++i ) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`)
}*/