
class Sandkill {
    constructor(nombre, edad, especialidad, compañero=null) {
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
        this.compañero = compañero;
    }

toString() {
    return `
        Nombre: ${this.getNombre()}
        Edad: ${this.getEdad()}
        Especialidad: ${this.getEspecialidadNombre()}
        Compañero: ${this.getNombreCompanero()}
    `.trim();
}


    getNombre() {
    return this.nombre;
}

getEdad() {
    return this.edad;
}

getEspecialidad() {
    return this.especialidad;
}

getEspecialidadNombre() {
    switch (this.especialidad) {
        case 1:
            return "Sistemas";
        case 2:
            return "Web";
        case 3:
            return "Multiplataforma";
        default:
            return "Desconocida";
    }
}

getCompanero() {
    return this.companero;
}

getNombreCompanero() {
    return this.companero ? this.companero.getNombre() : "Sin compañero";
}



setNombre(nombre) {
    this.nombre = nombre;
}

setEdad(edad) {
    this.edad = edad;
}

setEspecialidad(especialidad) {
    this.especialidad = especialidad;
}

setEspecialidadNombre(nombreEspecialidad) {
    const mapa = {
        "sistemas": 1,
        "web": 2,
        "multiplataforma": 3
    };
    this.especialidad = mapa[nombreEspecialidad.toLowerCase()] || 0;
}

setCompanero(companero) {
    if (companero instanceof Sandkill || companero === null) {
        this.companero = companero;
    } else {
        console.error("El compañero debe ser un objeto Sandkill o null");
    }
}

}


//-Ejercicio 11------------------------------------------------------------------------------------------------------------------------------------------------------

let array = [];


function insertarAlPrincipio(sandkill) {
    array.unshift(sandkill);
    return `Se añadió a ${sandkill.getNombre()} al principio de la lista.`;
}


function insertarAlFinal(sandkill) {
    array.push(sandkill);
    return `Se añadió a ${sandkill.getNombre()} al final de la lista.`;
}


function borrarPrimero() {
    if (array.length === 0) return console.log("⚠️ La lista está vacía.");
    let eliminado = array.shift();
    return `Se eliminó a ${eliminado.getNombre()} del principio.`;
}


function borrarUltimo() {
    if (array.length === 0) return console.log("⚠️ La lista está vacía.");
    let eliminado = array.pop();
    return `Se eliminó a ${eliminado.getNombre()} del final.`;
}


function mostrarLista() {
    if (array.length === 0) return console.log("📭 No hay sandkills en la lista.");

    let lista = array.map(objeto => `<p>${objeto.toString()} </p>`);
    return lista.join(" ");
}


function mostrarListaOrdenada() {
    if (array.length === 0) return console.log("No hay sandkills en la lista.");

    let ordenados = [...array].sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    return ordenados.map((s, i) => `${i + 1}. ${s.toString()}`).join("\n"); 

}


function buscarPorNombre(nombre) {
    let encontrado = array.find(s => s.getNombre().toLowerCase() === nombre.toLowerCase());
    if (encontrado) {
    return encontrado.toString();
    } else {
    return "No se encontró ningún Sandkill con ese nombre";
    }
}

function buscarPorPosicion(pos) {
    let objeto = array[pos-1]
    if(objeto){
       return array[pos - 1].toString()
    }else{
        return "No encontrado";
}
}

document.getElementById("insertarPrincipio").addEventListener("click", function(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let especialidad = parseInt(document.getElementById("especialidad").value);

    let mensaje = insertarAlPrincipio(new Sandkill(nombre, edad, especialidad));
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
});

document.getElementById("insertarFinal").addEventListener("click", function(e){
e.preventDefault();
let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let especialidad = parseInt(document.getElementById("especialidad").value);

    let mensaje = insertarAlFinal(new Sandkill(nombre, edad, especialidad));
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
});

document.getElementById("borrarprimero").addEventListener("click", function(e){
    e.preventDefault();
    let mensaje = borrarPrimero();
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
});

document.getElementById("borrarfinal").addEventListener("click", function(e){
    e.preventDefault();
    let mensaje = borrarUltimo();
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
});

document.getElementById("mostrarLista").addEventListener("click", function(e){
    e.preventDefault();

        document.getElementById("resultado").innerHTML = mostrarLista();
});

document.getElementById("mostrarListaOrdenada").addEventListener("click", function(e){
    e.preventDefault();

        document.getElementById("resultado").textContent = mostrarListaOrdenada();
});

document.getElementById("buscarnombre").addEventListener("click", function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombrebuscar").value;

            document.getElementById("resultado").textContent = buscarPorNombre(nombre);
});

document.getElementById("buscarposicion").addEventListener("click", function(e){
    e.preventDefault();
    let posi = parseInt(document.getElementById("posicion").value);

            document.getElementById("resultado").textContent = buscarPorPosicion(posi);
});