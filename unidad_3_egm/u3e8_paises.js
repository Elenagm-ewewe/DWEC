

let paises =["España", "Francia", "Italia", "Payasolandia","China", "Japón", "Suiza","Corea del Norte", "Corea del Sur", "Alemania"];


//Menu
let opcion = prompt(
`Selecciona una opción:
1. Mostrar número de países
2. Mostrar listado de países
3. Mostrar un intervalo de países
4. Añadir un país
5. Borrar un país
6. Consultar un país
7. Salir`);

opcion = parseInt(opcion);


switch(opcion){

case 1:
    document.writeln(nelementos(paises));
break;
1
//_____________________________________________________

case 2:

    let opcion2 =  parseInt(prompt(`Selecciona una opción:
                            1. Mostrar en orden tal cual está
                            2. Mostrar en orden alfabético
                            3. Mostrar en orden inverso`
                            ));

                            /* opcion2 = parseInt(opcion2); */
        switch(opcion2){
            case 1:
                document.writeln(imprimirpaises(paises));
            break;

            case 2:
                document.writeln(ordenar(paises));
            break;

            case 3:
                document.writeln(invertir(paises));
            break;
            }


break;

case 3:
    let inicio = prompt("Introduce la posicion de inicio");
    let fin = prompt("Introduce la posicion de fin");

    document.writeln(mostrarInter(paises, inicio, fin));

break;


case 4:
    let nuevopais = prompt("Introduce un nuevo país");

    let opcion3 =  parseInt(prompt(`1. Añadir al principio
                            2. Añadir al final`));

        switch(opcion3){
            case 1:
                document.writeln(anadirelemento(paises, nuevopais));
            break;

            case 2:
                document.writeln(anadirelementofinal(paises, nuevopais));
            break;
        }

break;

case 5:


    let opcion4 =  parseInt(prompt(`1. Borrar al inicio
                            2. Borrar al final`));
        switch(opcion4){
            case 1:
                document.writeln(borrarprincipio(paises));
            break;

            case 2:
                document.writeln(borrarfinal(paises));
            break;
        }

break;

case 6:

let opcion5 = parseInt(prompt(`1. Consulta por posición
                    2. Consulta por nombre`));
                    
        switch(opcion5){
            case 1:

            let posi = prompt("Introduce la posición");
                document.writeln(mostrarEl(paises, posi));

            break;

            case 2:

                let elem = prompt("Introduce el elemento");
                document.writeln(mostrarPos(paises, elem));

            break;
        }

break;

}




//---FUNCIONES-----------------------------------------------------------------------------------------

 //Mostrar el número de elementos del array

    function nelementos(a){
        return "Número de elementos: " + a.length;
    } 

//Mostrar todos los elementos del array

    function imprimirpaises(a){
        return a.join(", ");
    } 

//Muestra los elementos del array en sentido inverso

    function invertir(a){

        let nuevoarray = [];

            for (let i = a.length - 1; i >= 0; i--) {
                nuevoarray.push(a[i])
            }

        return nuevoarray.join(", ");
    }

//Muestra los elementos del array ordenados alfabéticamente (sin ordenar el array original)

    function ordenar(a){
        let arrayordenado= a.sort();
        return arrayordenado.join(", ");
    }

//Añadir un elemento al principio del array

    function anadirelemento(a, b){
        a.unshift(b);
    return a.join(", ");
    }

//Añadir un elemento al final del array

    function anadirelementofinal(a, b){
        a.push(b);
        return a.join(", ");
    }

//Borrar un elemento al principio del array (y decir cuál se ha borrado)

    function borrarprincipio(a){
        let pais = a[a.length -1];
        a.shift();
    return "Se eliminó el país: " + pais;
    }

//Borrar un elemento al final del array (y decir cuál se ha borrado).

    function borrarfinal(a){
        let pais = a[0];
        a.pop();
    return "Se eliminó el país: " + pais;
    }


//Muestra el elemento que se encuentra en una posición que el usuario indica

function mostrarEl(a, pos){
    return(a[pos]);
}

//Muestra la posición en la que se encuentra un elemento que le indica el usuario

function mostrarPos(a, elem){
    for(let i = 0 ; i < a.length; i++){
        if(a[i] = elem){
            return i;
        }
    }
}

//Muestra los elementos que se encuentran en un intervalo que el usuario indica

function mostrarInter(a, ini, fin){
    let resul = [];
    for(let i = ini ; i < fin; i++){
        resul.push(a[i]);
    }
    return resul.join(", ");
}