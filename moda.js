const lista1 = [
    1,
    2,
    3,
    4,
    2,
    2,
    3,
    1,
    0,
    5,
    7,
    8,
    9,
    7,
]

function moda(lista){
    const listaCount = {}

    lista.map(
        function (elemento){
            if(listaCount[elemento]){
            listaCount[elemento]+=1
            }else{
            listaCount[elemento] = 1
            }
        }
    )

    const lista1Array = Object.entries(listaCount).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    )
    
    const listModa = {}
    let i=0
    lista1Array.map(
        function (elemento){
            if(elemento[1] == lista1Array[lista1Array.length-1][1]){
                listModa[i] = elemento
                i++
            }
        }
    )
    return listModa
}





