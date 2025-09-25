
var count = 0;

function conteocartas(card){

    if(["2", "3", "4","5", "6"].includes(card)){
        count = count + 1;
    }else if(["10", "J", "Q","K", "A"].includes(card)){
        count = count -1;
    }

    if(count<=0){
        return count + " Hold";

    }else if(count > 0){
        return count + " Bet";
    }

}



while(true){
    carta = prompt("Introduce una carta").toUpperCase();
    mensaje = conteocartas(carta)
    alert( mensaje);
}
