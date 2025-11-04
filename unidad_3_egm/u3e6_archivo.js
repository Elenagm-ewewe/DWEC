const archivo = 
`Cliente;Localidad;Cuota
Laura;Santander;50
Álvaro;Castro;50
Igor;Castro;60
Ivan;Santander;40
Mónica;Zamora;30
Javi;Bilbao;30
David;Bilbao;50
José Luis;Bilbao;60`

let lineas = archivo.split("\n");

let clientes = lineas.map(cliente => cliente.split(";"))

let objetosclientes = clientes.map(cliente => ({
    Cliente: cliente[0],
    Localidad: cliente[1],
    Cuota: cliente[2]
}))


let tabla = `<table>`;

tabla += `<tr> 
<th>Cliente</th>
<th>Provincia</th>
<th>Cuota</th>
</tr>`

for(let i = 1; i < objetosclientes.length ;i++){

    tabla += `<tr>`;

    tabla += `<td>`
tabla += objetosclientes[i].Cliente
    tabla += `</td>`

        tabla += `<td>`
tabla += objetosclientes[i].Localidad
    tabla += `</td>`

        tabla += `<td>`
tabla += objetosclientes[i].Cuota
    tabla += `</td>`

        tabla += `</tr>`;

}

document.getElementById("tabla").addEventListener("click", function(){

    document.getElementById("resultado").innerHTML = tabla ;
});


document.getElementById("provincia").addEventListener("click", function(){

    let provincia = document.getElementById("provinciainput").value.toLocaleLowerCase();


//Crea un array con los objetos filtrados
    let filtrados = objetosclientes.filter(cliente => cliente.Localidad.toLocaleLowerCase() === provincia);

//Creamos el html a devolver

let html = filtrados.map(cliente => `<p> Cliente: ${cliente.Cliente} <br> Cuota: ${cliente.Cuota} </p>`);


    document.getElementById("resultado").innerHTML = html || "<p> No hay resultados </p>" ;

});


document.getElementById("condicionmenor").addEventListener("click", function(){

    let condicion = document.getElementById("valor").value;

    let filtrados = objetosclientes.filter(cliente=> cliente.Cuota < condicion)

    let html = filtrados.map(cliente => `<p> Cliente: ${cliente.Cliente} <br> Provincia: ${cliente.Localidad} <br> Cuota: ${cliente.Cuota}`).join("")

    document.getElementById("resultado").innerHTML = html || "No hay resultados"
})

document.getElementById("condicionmayor").addEventListener("click", function(){

    let condicion = document.getElementById("valor").value;

    let filtrados = objetosclientes.filter(cliente=> cliente.Cuota > condicion)

    let html = filtrados.map(cliente => `<p> Cliente: ${cliente.Cliente} <br> Provincia: ${cliente.Localidad} <br> Cuota: ${cliente.Cuota}`).join("")

    document.getElementById("resultado").innerHTML = html || "No hay resultados"
})