require('./mensagem')

const ola = require('./saudacao');

ola("Vitor");

const verificarIdade = require('./idade');

verificarIdade(17);

const calc = require('./calculadora')

calc.somar(5, 5)
calc.multiplicar(5, 5)

const mostrarHora = require('./module/hora')

mostrarHora();