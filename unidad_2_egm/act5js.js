let numero = prompt("Introduce un número:");

let quini = 0;
let dosci = 0;
let cien = 0;
let cinc = 0;
let veinte = 0;
let diez = 0;
let cinco = 0;

if(numero % 5 != 0 || isNaN(numero) ){

    alert("Entrada inválida");

}else{

        if(numero >= 500){
            quini = Math.floor(numero / 500);
            numero = numero - (quini * 500);
        }

        if(numero >= 200){
            dosci = Math.floor(numero / 200);
            numero = numero - (dosci * 200);
        }


        if(numero >= 100){
            cien = Math.floor(numero / 100);
            numero = numero - (cien * 100);
        }

        if(numero >= 50){
            cinc = Math.floor(numero / 50);
            numero = numero - (cinc * 50);
        }

        if(numero >= 20){
            veinte = Math.floor(numero / 20);
            numero = numero - (veinte * 20);
        }

        if(numero >= 10){
            diez = Math.floor(numero / 10);
            numero = numero - (diez * 10);
        }

        if(numero >= 5){
            cinco = Math.floor(numero / 5);
            numero = numero - (cinco * 5);
        }


            alert("Billetes de 500: " + quini + "\nBilletes de 200: " + dosci + "\nBilletes de 100: " + cien + "\nBilletes de 50: " + cinc + "\nBilletes de 20: " + veinte + "\nBilletes de 10: " + diez + "\nBilletes de 5 : " + cinco);

    }
