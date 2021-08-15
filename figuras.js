// Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}

// Código del triangulo
function perimetroTriangulo(lado1,lado2,base){
    console.log(lado1+lado2+base)
    return (lado1+lado2+base)
} 

function areaTriangulo(base,altura){
    return (base*altura)/2
}
// Código del circulo
function diametroCirculo(radio){
    return radioCirculo*2
}
const PI = Math.PI
//circunferencia
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio)
    return diametro * PI
}
//area
function areaCirculo(radio){
    return (radio*radio)*PI
}

// Código del triangulo Isoceles
function perimetroTrianguloIsoceles(lado,base){
    return (2*lado) + base
} 

function areaTrianguloIsoceles(lado,base){
    const area = ( base * Math.sqrt( (lado*lado - (base*base)/4)) )/2
    return area
} 

function areaTriangulo(lado1,lado2,base)
{   const s = (lado1+lado2+base)/2
    area = Math.sqrt( s * (s - lado1) * (s - lado2) * (s - base) )
    return area
}

function alturaTrianguloIsoceles(lado,base){
    const altura = Math.sqrt((lado*lado)- (base*base)/4)
    return altura
} 

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value
  alert(perimetroCuadrado(value))
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value
  alert(areaCuadrado(value))
}

function calcularPerimetroTriangulo(){
   const input1 = document.getElementById("Lado1Triangulo")
   const value1 = parseInt(input1.value)
   const input2 = document.getElementById("Lado2Triangulo")
   const value2 = parseInt(input2.value)
   const input3 = document.getElementById("Lado3Triangulo")
   const value3 = parseInt(input3.value)
   if( (value1 == value2) || (value1 == value3) || (value3 == value2)){
    alert("Es un triangulo Isoceles")
    if(value1 == value2){
        alert(perimetroTrianguloIsoceles(value2,value3))
    }else{
        if(value1 == value3){
            alert(perimetroTrianguloIsoceles(value3,value2))
        }else{
            if(value3 == value2){
                alert(perimetroTrianguloIsoceles(value3,value1))
            }
        }
    }
   }else{
    alert("No es un triangulo Isoceles")
    perimetroTriangulo(value1,value2,value3)
   }
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("Lado1Triangulo")
    const value1 = parseInt(input1.value)
    const input2 = document.getElementById("Lado2Triangulo")
    const value2 = parseInt(input2.value)
    const input3 = document.getElementById("Lado3Triangulo")
    const value3 = parseInt(input3.value)
    if( (value1 == value2) || (value1 == value3) || (value3 == value2)){
        alert("Es un triangulo Isoceles")
        if(value1 == value2){
            alert(areaTrianguloIsoceles(value2,value3))
        }else{
            if(value1 == value3){
                alert(areaTrianguloIsoceles(value3,value2))
            }else{
                if(value3 == value2){
                    alert(areaTrianguloIsoceles(value3,value1))
                }
            }
        }   
    }else{
        alert("No es un triangulo Isoceles")
        alert(areaTriangulo(value1,value2,value3))
    }
 }

 function calcularAlturaTriangulo(){
    const input1 = document.getElementById("Lado1Triangulo")
    const value1 = parseInt(input1.value)
    const input2 = document.getElementById("Lado2Triangulo")
    const value2 = parseInt(input2.value)
    const input3 = document.getElementById("Lado3Triangulo")
    const value3 = parseInt(input3.value)
    if( (value1 == value2) || (value1 == value3) || (value3 == value2)){
        alert("Es un triangulo Isoceles")
        if(value1 == value2){
            alert(alturaTrianguloIsoceles(value2,value3))
        }else{
            if(value1 == value3){
                alert(alturaTrianguloIsoceles(value3,value2))
            }else{
                if(value3 == value2){
                    alert(alturaTrianguloIsoceles(value3,value1))
                }
            }
        }   
    }else{
        alert("No es un triangulo Isoceles")
    }
 }