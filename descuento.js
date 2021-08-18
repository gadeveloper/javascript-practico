
function calcularPrecioConDescuento(precio,descuento){
   const porcentajePrecioConDescuento = 100 - descuento
   const precioConDescuento = (precio*porcentajePrecioConDescuento)/100
   return precioConDescuento
}

function onClickButtonPriceDiscount()
{
    const InputPrice = document.getElementById("InputPrice")
    const PriceValue = InputPrice.value

    const InputDiscount = document.getElementById("InputDiscount")
    const Discount = InputDiscount.value

    const precioConDescount = calcularPrecioConDescuento(PriceValue,Discount)
    
    const result = document.getElementById("ResultP")
    result.innerText="El precio con descuento es: "+precioConDescount
}
