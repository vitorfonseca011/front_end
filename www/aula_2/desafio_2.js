// Desafio 2 - Obrigatoriedade do voto
let idade = 71

if ( idade >= 0 && idade <=15) {
    console.log('Não tem idade para votar.')
} else if (idade == 16 || idade == 17 || idade > 70 ) {
    console.log('O voto é opcional.')
} else {
    console.log('O voto é obrigatório.')
}