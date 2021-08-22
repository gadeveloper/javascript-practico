const lista1 = [
    100,
    200,
    1,
    02,
]

function comparar ( a, b ){ return a - b}
lista1.sort( comparar )

const mitadLista1 = parseInt(lista1.length / 2)

function esPar(numero){
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }    
}

let mediana

if(esPar(lista1.length)){
    const elemento1 = parseInt(lista1[mitadLista1-1])
    const elemento2 = parseInt(lista1[mitadLista1])
    mediana = (elemento1+elemento2) / 2
  
}else{
   mediana = lista1[mitadLista1]
}


