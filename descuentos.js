function calcularPrecioDescuento(precio, descuento){
    const porcentajePagar= 100 - descuento;
    const precioFinal = precio * (porcentajePagar/100);

    return precioFinal;
}

function priceDiscount(){
    const inPrice = document.getElementById("inputPrice");
    const inDiscount = document.getElementById("inputDiscount");

    const vprice = inPrice.value;
    const vdiscount = inDiscount.value;

    const precioDesc = calcularPrecioDescuento(vprice, vdiscount);

    const resultP=document.getElementById("ResultPrice");
    const texto = "El precio con descuento es de $" + precioDesc;
    resultP.innerText = texto;
}

// console.log({
//     precio,
//     descuento,
//     porcentajePagar,
//     precioFinal
// })