
function calcularPrecioConDescuento(precio,descuento){
   const porcentajePrecioConDescuento = 100 - descuento
   const precioConDescuento = (precio*porcentajePrecioConDescuento)/100
   return precioConDescuento
}

function onClickButtonPriceDiscount()
{
    const InputPrice = document.getElementById("InputPrice")
    const PriceValue = parseInt(InputPrice.value)

    const InputDiscount = document.getElementById("InputDiscount")
    const Discount = parseInt(InputDiscount.value)

    const InputCupon = document.getElementById("InputCupon")
    const Cupon = parseInt(InputCupon.value)

    let descuentototal = 0
    if(Cupon > 0){
        descuentototal = Discount+Cupon;
    }else{ 
        descuentototal = Discount;
    }
    const precioConDescount = calcularPrecioConDescuento(PriceValue,descuentototal)
    
    const result = document.getElementById("ResultP")
    result.innerText="El precio con descuento es: "+precioConDescount
}
