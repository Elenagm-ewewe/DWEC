class Escuela{
    constructor(nombre, localidad, responsable){
        this.nombre= nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.instalaciones = [];
    }

agregarInstalacion(instalacion){
        this.instalaciones.push(instalacion);
    }

borrarInstalacion(tipo){
    this.instalaciones = this.instalaciones.filter(i => i.tipo !== tipo);
}
}

class Instalación{
    constructor(tipo, cantidad, presupuesto, colegio, compania){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.presupuesto = presupuesto;
        this.compania = compania;
    }
}

class Compania{
    constructor(nombre, responsable){
        this.nombre= nombre;
        this.responsable = responsable;
    }
}


let escuelas=[];
let compañias = [];

document.getElementById("crearcole").addEventListener("click", function(e){
e.preventDefault();

let nombre = document.getElementById("nombrecole").value;
let localidad = document.getElementById("localidad").value;
let responsablecole = document.getElementById("responsablecole").value;

escuelas.push(new Escuela(nombre, localidad, responsablecole));
actualizarSelect()
});


document.getElementById("crearcompania").addEventListener("click", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombrecompa").value;
    let responsable = document.getElementById("responsablecompa").value;

compañias.push(new Compania(nombre, responsable));
actualizarSelectCompa();
});

document.getElementById("crearinstalacion").addEventListener("click", function(e){
e.preventDefault();

let tipo = document.getElementById("tipo").value;
let cantidad = document.getElementById("cantidad").value;
let presupuesto = document.getElementById("presupuesto").value;
let colegio = document.getElementById("colegios").value;
let compañia = document.getElementById("compas").value;


let escuelaseleccionada = escuelas.find(escu => escu.nombre === colegio);
let companiaseleccionada = compañias.find(compa => compa.nombre === compañia);


escuelaseleccionada.agregarInstalacion(new Instalación(tipo, cantidad, presupuesto, escuelaseleccionada, companiaseleccionada));

});

function actualizarSelectCompa(){
    let html = compañias.map(compa => `<option value="${compa.nombre}"> ${compa.nombre}</option>`).join(" ");
    document.getElementById("compas").innerHTML = html ;
}
function actualizarSelect(){
    let html = escuelas.map(escuela => `<option value="${escuela.nombre}"> ${escuela.nombre}</option>`).join(" ");
    document.getElementById("colegios").innerHTML = html ;
}