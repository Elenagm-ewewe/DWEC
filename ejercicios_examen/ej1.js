function compruebaLinea(carton, numerosSacados) {
    for (let i = 0; i < carton.length; i++) {
        let lineaCompleta = true;
        for (let j = 0; j < carton[i].length; j++) {
            if (!numerosSacados.includes(carton[i][j])) {
                lineaCompleta = false;
                break;
            }
        }
        if (lineaCompleta) return true; 
    }
    return false; 
}


function compruebaBingo(carton, numerosSacados) {
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
            if (!numerosSacados.includes(carton[i][j])) {
                return false; // falta un número
            }
        }
    }
    return true; 
}


function sacarNumeroNuevo(numerosSacados) {
    let numero;
    do {
        numero = Math.floor(Math.random() * 90) + 1; // 1 a 90
    } while (numerosSacados.includes(numero));
    return numero;
}


function generarCarton() {
    let carton = [];
    for (let i = 0; i < 4; i++) {
        carton[i] = [];
        for (let j = 0; j < 5; j++) {
            carton[i][j] = Math.floor(Math.random() * 90) + 1;
        }
    }
    return carton;
}


function mostrarCarton(carton) {
    let html = "<table border='1' cellspacing='0' cellpadding='10'>";
    for (let i = 0; i < carton.length; i++) {
        html += "<tr>";
        for (let j = 0; j < carton[i].length; j++) {
            html += `<td>${carton[i][j]}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("carton").innerHTML = html;
}


function actualizarNumeros(numerosSacados) {
    let html = numerosSacados.map(n => `<strong>${n}</strong>`).join(" ");
    document.getElementById("numerosSalidos").innerHTML = html;
}


// Inicialización
let carton = generarCarton();
let numerosSacados = [];

mostrarCarton(carton);


document.getElementById("generarnumero").addEventListener("click", function (e) {
    e.preventDefault();

    let nuevoNumero = sacarNumeroNuevo(numerosSacados);
    numerosSacados.push(nuevoNumero);

    actualizarNumeros(numerosSacados);

    if (compruebaLinea(carton, numerosSacados)) {
        document.getElementById("resultado").innerHTML = `<h3>Has cantado LINEA </h3>`
    }

    if (compruebaBingo(carton, numerosSacados)) {
        document.getElementById("resultado").innerHTML = `<h1>Has cantado BINGO </h1>`
    }
});
