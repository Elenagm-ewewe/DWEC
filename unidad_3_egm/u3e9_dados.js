let cantidadtotal = 50;

actualizarcantidad(cantidadtotal);

document.getElementById("apostar").addEventListener("click", function() {

let cantidadapostada = parseInt(document.getElementById("apostado").value);
let apuesta = parseInt(document.getElementById("apuesta").value);
let respuesta = "";


if(cantidadtotal < cantidadapostada || cantidadapostada <= 0){
    respuesta = "Cantidad apostada no válida.";
}else{
    let tiradadados = tirardados();

    if(tiradadados == apuesta){
        cantidadtotal += cantidadapostada;
        respuesta = "¡Enhorabuena! Has ganado la apuesta. El dado ha sacado un " + tiradadados + ".";
        actualizarcantidad(cantidadtotal);
    }else{
        cantidadtotal -= cantidadapostada;
        respuesta = "Lo siento, has perdido la apuesta. El dado ha sacado un " + tiradadados + ".";
        actualizarcantidad(cantidadtotal);
    }
}

document.getElementById("resultado").innerHTML = respuesta;

});




function tirardados(){
    let resultado = Math.floor(Math.random() * 6) +1;
    return resultado;
}


function actualizarcantidad(cantidad){
    document.getElementById("cantidad").innerHTML = cantidad;
}