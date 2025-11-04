

    let horaActual = new Date();
    let corta = horaCorta(horaActual);
    let larga = horaLarga(horaActual);
    let ampm = horaAmPm(horaActual);

document.getElementById("hora").innerHTML = `<p>Hora corta: <strong>${corta}</strong></p> <p>Hora larga:<strong>${larga}</strong></p> <p>Hora con PM/AM<strong>${ampm}</strong></p>`;




document.getElementById("hacerfecha").addEventListener("click", function(e){

    let entrada = document.getElementById("input").value.trim();
    let datos= entrada.split("-");
    let corto;
    let largo;
    let ingles;

    if(datos.length === 1){
        corto = formatoCorto(Number(datos[0]));
        largo = formatoLargo(Number(datos[0]));
        ingles = formatoIngles(Number(datos[0]));

    }else if(datos.length === 3){
        corto = formatoCorto(datos[2], datos[1], datos[0]);
        largo = formatoLargo(datos[2], datos[1], datos[0]);
        ingles = formatoIngles(datos[2], datos[1], datos[0]);
    }
    document.getElementById("resultado").innerHTML = `<p>Formato corto: <strong>${corto}</strong></p> <p>Formato largo: <strong>${largo}</strong></p> <p>Formato en inglés <strong>${ingles}</strong></p>`


});



function horaCorta(hora){
    let hr = hora.getHours().toString().padStart(2, "0");
    let min = hora.getMinutes().toString().padStart(2, "0");
return `${hr}:${min}`
}

function horaLarga(hora) {
    if (!(hora instanceof Date)) hora = new Date(hora);
    let hr = hora.getHours().toString().padStart(2, "0");
    let min = hora.getMinutes().toString().padStart(2, "0");
    let seg = hora.getSeconds().toString().padStart(2, "0");
    return `${hr}:${min}:${seg}`;
}

function horaAmPm(hora) {

    let horas = hora.getHours();
    const minutos = hora.getMinutes().toString().padStart(2, "0");
    const ampm = horas >= 12 ? "PM" : "AM";

horas = horas % 12;
if (horas === 0) horas = 12;

return `${horas.toString().padStart(2, "0")}:${minutos} ${ampm}`;
}

function crearFecha(){

    if(arguments.length ===1){
        let fecha= new Date(arguments[0])
        return fecha;
    }

    if(arguments.length ===3){
        let fecha= new Date(arguments[0] , arguments[1]-1, arguments[2]);
        return fecha;
    }

}


function formatoCorto() {
    let fecha = crearFecha.apply(null, arguments);
    if (!fecha) return;

    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();

    return `${dia}/${mes}/${año}`;
}

function formatoLargo(){

    let fecha = crearFecha.apply(null, arguments);

    return fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
    });

}

function formatoIngles(){
        let fecha = crearFecha.apply(null, arguments);

    return fecha.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
    });
}