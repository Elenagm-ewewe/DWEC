let intentos = 0;
let aciertos = 0;
let cartas = [0, 1, 2, 3, 0, 1, 2, 3];

let cartasDestapadas = 0;
let primeraCarta = null;
let segundaCarta = null;

document.getElementById("0").addEventListener("click", girarCarta);
document.getElementById("1").addEventListener("click", girarCarta);
document.getElementById("2").addEventListener("click", girarCarta);
document.getElementById("3").addEventListener("click", girarCarta);
document.getElementById("4").addEventListener("click", girarCarta);
document.getElementById("5").addEventListener("click", girarCarta);
document.getElementById("6").addEventListener("click", girarCarta);
document.getElementById("7").addEventListener("click", girarCarta);


function girarCarta(event) {
    const id = event.target.id; //Pilla el id del elemento en el addEventListener, de la carta  en este caso
    const cartaImg = document.getElementById(id);

    if (cartasDestapadas === 2) { //Si ya hay 2 cartas destapadas se para la funcion
    return;
    } 

    cartaImg.removeEventListener("click", girarCarta) //Para que no se pueda volver a clickar la misma carta


    
    //Se le asigna a cada imagen una carta(no es aleatorio en ese caso)
    cartaImg.src = `fotos/${cartas[id]}.jpg`;
    cartasDestapadas++; //Aumentamos la cantidad de cartas destapadas

    if (cartasDestapadas === 1) {
        primeraCarta = id; //Asignamos la primera carta
    } 
    else if (cartasDestapadas === 2) {
        segundaCarta = id; //Asignamos la segunda carta
        intentos++; //Aumentamos el numero de retos
        document.getElementById("intentos").innerHTML = intentos;   //Escribimos en el documento los intentos que llevamos

        //Si aciertas:
        if (cartas[primeraCarta] === cartas[segundaCarta]) {
            aciertos++;
            document.getElementById("aciertos").innerHTML = aciertos;
            cartasDestapadas = 0;
            primeraCarta = null;
            segundaCarta = null;
        }
        //Si NO aciertas:
        else {
            setTimeout(() => {
                //Cambiamos la imagen de la cartas seleccionadas de nuevo al default
                document.getElementById(primeraCarta).src = "fotos/none.jpg";
                document.getElementById(segundaCarta).src = "fotos/none.jpg";
                cartasDestapadas = 0;
                
                //Como hemos fallado, "habilitamos" de nuevo el evento porque antes se lo hemos quitado
                document.getElementById(primeraCarta).addEventListener("click", girarCarta) 
                document.getElementById(segundaCarta).addEventListener("click", girarCarta)
                primeraCarta = null;
                segundaCarta = null;

            }, 1500);
        }
    }

    if(aciertos ===4){
        document.getElementById("ganaste").innerHTML = `Has ganado`;
        document.getElementById("volverajugar").innerHTML = `<button onclick="location.reload()">Volver a jugar</button>`;
    }

}
