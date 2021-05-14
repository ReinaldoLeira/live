function calcularPesoIdeal(altura, sexo)
{
    if(sexo === 'H')
    {
        return 72.7 * altura - 58
    }
    else if(sexo === 'F')
    {
        return 62.1 * altura - 44.7
    }    
}

const resultado = calcularPesoIdeal(1.73, 'F')
console.log(`Seu peso ideal é ${resultado}`)

