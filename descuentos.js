// const precioOriginal = 120;
// const descuento = 18;

const cupones = [
    {
         name: "SergioXD",
      discount: 15,
    },
    {
        name: "BrunoBoss",
      discount: 30,
},
    {
        name: "Zamii",
     discount: 20,
    }
]


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("InputCoupons");
    const CouponsValue = inputCoupons.value;

    const validezCupon = function(coupon) {
        return coupon.name === CouponsValue
    };
    
    const userCoupon = cupones.find(validezCupon)
    
    if(!userCoupon) {
        alert("El cupón " + CouponsValue + " no es valido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });