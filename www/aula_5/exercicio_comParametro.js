function cumprimentar(nome) {
    console.log(`Olá, ${nome}!`)
}

cumprimentar("Fonseca");

///

function soma(a, b) {
    let somar = a + b 
    console.log(`O resultado da soma de ${a} + ${b} é ${somar}`)
}

soma(5,5);

///

function subtracao(x, y) {
    let subtrair = x - y
    console.log(`O resultado da subtração de ${x} - ${y} é ${subtrair}`)
}

subtracao(2, 2)
subtracao(4, 2)
subtracao(6, 2)

///

function endereco(rua, numero, bairro, cidade, estado, cep) {
    console.log(`\nMoro na rua ${rua}, na casa de n° ${numero}, no bairro ${bairro} que fica na cidade de ${cidade}, no estado de ${estado}, que tem como cep ${cep}.`)
}

endereco('Avenida Cabreúva', 509, 'Jacaré', 'Cabreúva', 'São Paulo', '27600-000')