 //Mostrar el número de elementos del array

    let nelementos = (a) => a.length;

//Mostrar todos los elementos del array

    let imprimirpaises = (a) => a;

//Muestra los elementos del array en sentido inverso

    function invertir(a){

        let nuevoarray = [];

            for (let i = a.length - 1; i >= 0; i--) {
                nuevoarray.push(a[i])
            }

        return nuevoarray;
    }

//Muestra los elementos del array ordenados alfabéticamente (sin ordenar el array original)

    function ordenar(a){
        return a.sort();
    }

//Añadir un elemento al principio del array

    function anadirelemento(a, b){
        a.unshift(b);
    }

//Añadir un elemento al final del array

    function anadirelementofinal(a, b){
        a.push(b);
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



