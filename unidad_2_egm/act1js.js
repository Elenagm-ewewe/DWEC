
var cont = 0;

function conteocartas(carta){

    if(["2", "3", "4","5", "6"].includes(carta)){
        cont = cont + 1;
    }else if(["10", "J", "Q","K", "A"].includes(carta)){
        cont = cont -1;
    }

    if(cont<=0){
        return cont + " Hold";

    }else if(cont > 0){
        return cont + " Bet";
    }
}



while(true){
    let carta = prompt("Introduce una carta").toUpperCase();
    mensaje = conteocartas(carta)
    alert(mensaje);
}
