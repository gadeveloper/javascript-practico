const lista1 = [
    100,
    200,
    300,
    500,
]

function calcularMediaAritmetica(lista){
   // let sumalista = 0
   // for(let i=0;i<lista.length;i++){
   //     sumalista =sumalista + lista[i]
   // }

   const sumalista = lista.reduce(
     function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento
     }
    );
    const promedioLista = sumalista / lista.length
    return promedioLista
}

console.log(calcularMediaAritmetica(lista1))