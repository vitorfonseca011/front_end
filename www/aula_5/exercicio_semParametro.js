function mostrarDica() {
    console.log(`\nLembre-se de salvar seu códico com frequência!\n`)
}

mostrarDica()

///

function contarAteCinco() {
    for(let i = 1; i <= 5; ++i) {
        console.log(i)
    }
}

contarAteCinco();

///

function mostrarData() {
    const data = new Date()
    console.log(`\n${data.toLocaleDateString('pt-BR', {timeZone: 'America/Sao_Paulo'})}`)
}

mostrarData();