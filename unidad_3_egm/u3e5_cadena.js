document.getElementById("formulario").addEventListener("submit", function(evento){
    evento.preventDefault();

    let cadena = document.getElementById("cadena").value;
    let partes = cadena.split(":");

    let nombre= partes[0];
    let apellidos= partes[1];
    let telefono= partes[2];
    let email= partes[3];
    let codigopostal= partes[4];

    document.getElementById("resultado").innerHTML = `Nombre: ${nombre} <br> Apellidos: ${apellidos} <br>  Teléfono: ${telefono} <br> Email: ${email} <br> Codigo postal: ${codigopostal}`
    


});