let idade = 18

if (idade <=15) {
    console.log("Você não pode votar.")
} else if (idade <= 16 || idade >= 60)  {
    console.log("Seu voto é opcional.")
} else {
    console.log("Seu voto é obrigatório.")
}