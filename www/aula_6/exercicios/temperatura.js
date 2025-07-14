//Converter temperatura

function celsiusParaFahrenheit(celsius) {
    let formula = (celsius * 9/5) + 32
    console.log(`A conversão de ${celsius}°C para °F é igual a ${formula}°F`)
}

module.exports = celsiusParaFahrenheit;