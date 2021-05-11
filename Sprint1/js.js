const caja1 = document.getElementById("idCantidad");
const caja2 = document.getElementById("Valor");
const caja3 = document.getElementById("Valordescuento");
const caja4 = document.getElementById("Total");
const caja5 = document.getElementById("mensaje");
var totalCompra, valorCompra, valorDescuento;

function porcentaje(x, y){
    let a = (x / 100) * y;
    let b = a - x;
    
    return{
        valorDescuento: a,
        totalCompra: b
    }
}

function Calcular(){
    

    let descuento;
    let cantidad = caja1.value;
    let valorpcs = cantidad * 820000;

    if (valorpcs < 1640000 || valorpcs > 9840000) {

        caja2.value = valorpcs;
        caja3.value = 0;
        caja4.value = valorpcs;

        caja5.innerHTML = "No hay descuentos disponibles";

    }
    else if( valorpcs >= 1640000 && valorpcs <= 3280000){
       
      descuento = porcentaje(valorpcs, 15);

        caja2.value = valorpcs;
        caja3.value = descuento.valorDescuento;
        caja4.value = descuento.totalCompra;

        caja5.innerHTML = "Su descuento es del 15%";
    }
    else if( valorpcs > 3280000 && valorpcs <= 6560000){
       
       descuento = porcentaje(valorpcs, 25);

        caja2.value = valorpcs;
        caja3.value = descuento.valorDescuento;
        caja4.value = descuento.totalCompra;

        caja5.innerHTML = "Su descuento es del 25%";
    }
    else if( valorpcs > 6560000 && valorpcs <= 9840000){
       
      descuento = porcentaje(valorpcs, 35);

        caja2.value = valorpcs;
        caja3.value = descuento.valorDescuento;
        caja4.value = descuento.totalCompra;

        caja5.innerHTML = "Su descuento es del 35%";
    }
}