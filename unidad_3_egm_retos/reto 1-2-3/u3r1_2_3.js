document.getElementById("crear").addEventListener("click", function(e){
    e.preventDefault();

    let entrada = document.getElementById("entrada").value.toUpperCase().trim();
    let datos= entrada.split(" ")
    let html = `Nombre: ${datos[0]} <br> Primer apellido: ${datos[1]} <br> Segundo apellido: ${datos[2]} <br> Año de nacimiento: ${datos[3]}`;
    let usuario = (datos[0].charAt(0) + datos[1] + datos[2].charAt(0) + datos[3].substring(datos[3].length -2 , datos[3].length)).toLowerCase();
    let tamaño = datos[0].length + datos[1].length + datos[2].length;
    let nombre = datos[0] + datos[1] + datos[2];
    let nvocales = nombre.split("").filter(letra => 'AEIOUÁÉÍÓÚ'.includes(letra)).length;

    document.getElementById("resultado").innerHTML = `<p> ${html} </p>`
    document.getElementById("usuario").innerHTML = `<p> ${usuario}</p>`
    document.getElementById("tamaño").innerHTML = `<p>El tamaño de la cadena "${datos[0]} ${datos[1]} ${datos[2]}" es ${tamaño}</p>`
    document.getElementById("vocales").innerHTML = `<p>Tiene ${nvocales} vocales</p>`
});