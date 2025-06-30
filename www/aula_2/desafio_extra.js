// Desafio Extra - Descobrir se o ano é bissexto
let year = 2020

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + ` é um ano bissexto.`)
} else {
    console.log(year + ` não é um ano bissexto.`)
}
  
  

  