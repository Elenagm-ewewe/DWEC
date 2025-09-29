function calcularsalario(horas, precio){

    let pago;

    if(horas<=35){
        pago = precio * horas;
    }else{
        let extras = horas - 35;
        pago = (35 * precio) + (extras * (precio * 1.5));
    }

    let result;

if(pago <= 500){
    result = pago;

}else if(pago > 500 && pago <= 900){

    result = 500 + ((pago - 500) * 1.25);

}else if(pago > 900){

    result = 500 + (400 * 1.25) + ((pago - 900)*1.45);
}

return result
}

let horas = prompt("Introduce el número de horas");
let precio =prompt("Introduce el precio de cada hora");

let total = calcularsalario(horas,precio);

alert("El salario calculado es de " + total);