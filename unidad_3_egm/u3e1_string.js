
let letras = [];


let intervalo = setInterval(() => {
    let dni = prompt("Introduce tu DNI");

    if(dni == "-1"){
        clearInterval(intervalo);
        document.getElementById("letrasdni").innerHTML = "Letras de los DNIs introducidos: " + letras.join(", ");
    }else{
    letras.push(dni.charAt(dni.length -1).toUpperCase());
    }

}, 2000)