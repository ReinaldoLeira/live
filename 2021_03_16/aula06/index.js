function media(...notas)
{
    let aux = 0

    for(let nota of notas)
    {
        aux += nota
    }

    return aux / notas.length

}

//console.log(media(10, 7, 5))

