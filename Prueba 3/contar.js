let numeros = [1, 3, 3, 4, 4, 4]

function countDuplicate(numerosABuscar){
    let numerosRepetidos = 0
    let numerosIndividuales = []

    let numeroActual = numerosABuscar[0]
    numerosIndividuales.push(numeroActual)
    numerosABuscar.forEach((numero)=> {
        if(numeroActual != numero){
            numerosIndividuales.push(numero)
            numeroActual = numero
        }
    })

    numerosIndividuales.forEach((numero)=> {
        let numerosFiltrados = numerosABuscar.filter((_numero)=>{
            return _numero == numero
        })
        if(numerosFiltrados.length>1){
            numerosRepetidos++
        }
    })

    return numerosRepetidos
}

console.log(countDuplicate(numeros));