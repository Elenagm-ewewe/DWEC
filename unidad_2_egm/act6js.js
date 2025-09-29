
let veces = 0;

function numeroPatrones(texto){

texto = texto.toUpperCase();
let patrones = ["00","101","ABC","HO"];


    for (let i = 0; i < texto.length; i++) {
        
        for (let pos of patrones) {
            
            if(texto.substr(i, pos.length) == pos){
                veces++
            }
        }
    }

    return veces;

}

texto = prompt("Frase:");

veces = numeroPatrones(texto);

alert("Veces: " + veces);