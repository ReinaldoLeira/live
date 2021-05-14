const boletos = [
    {
        cnpj: '111000',
        status: 'PENDENTE',
        valor: 400
    },
    {
        cnpj: '111222',
        status: 'PENDENTE',
        valor: 302.50
    },
    {
        cnpj: '111000',
        status: 'COMPENSADO',
        valor: 200
    },
    {
        cnpj: '111333',
        status: 'ENVIADO',
        valor: 500
    },
    {
        cnpj: '111333',
        status: 'CANCELADO',
        valor: 500
    }
]
function verificarBoletos(boletos) {
    for (let boleto of boletos) {
        switch (boleto.status) {
            case 'PENDENTE': {
                console.log('enviar novamente')
                // enviar novamente
                break
            }
            case 'COMPENSADO': {
                console.log('ative o produto')
                // ative o produto
                break
            }
            case 'ENVIADO': {
                console.log('reenvie o boleto')
                // reenvie o boleto
                break
            }
            case 'CANCELADO': {
                console.log('não faz nada')
                 // não faz nada
                break
            }
        }
    }
}
//verificarBoletos(boletos)

function boletosDaEmpresa(cnpj)
{
    let aux = []
    for(let boleto of boletos)
    {
        if(cnpj === boleto.cnpj)
        {
            aux.push({
                status: boleto.status, 
                valor: boleto.valor
            })
        }
    }
    console.log(aux)
}

//boletosDaEmpresa('111000')

function boletosDeEmpresa(cnpj)
{
    return boletos.filter((boleto) => {
        return boleto.cnpj === cnpj
    })
}

//console.log(boletosDeEmpresa('111000'))


//crie uma função que retorne os boletos agrupados por CNPJ
function agruparPorCnpj()
{
    const agrupados = {}

    for(let boleto of boletos)
    {
        if(!agrupados[boleto.cnpj])//se boleto.cnpj não existir faz o if.
        {
            agrupados[boleto.cnpj] = []
        }
        agrupados[boleto.cnpj].push(boleto)
    }
    return agrupados
}
console.log(agruparPorCnpj())
//console.log(agruparPorCnpj()['111000'])//mostrar somente um cnpj com os boletos agrupados