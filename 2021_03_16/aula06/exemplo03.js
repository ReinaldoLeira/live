function somar(numero1, numero2, tempo, callback) {
    const resultado = numero1 + numero2
    setTimeout(() => {
        callback(resultado)
    }, tempo)
}
somar(1, 2, 5000, (resultado) => {
    console.log(resultado)
})
somar(3, 2, 3000, (resultado) => {
    console.log(resultado)
})
somar(4, 2, 1000, (resultado) => {
    console.log(resultado)
})
somar(5, 2, 2000, (resultado) => {
    console.log(resultado)
})

