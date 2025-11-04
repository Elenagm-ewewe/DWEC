let fechahoy = new Date();
let fincurso = new Date("2026-05-22")

//Diferencia en milisegundos / convertimos los milisegundos en dias
let diferencia = (fincurso - fechahoy) / (1000 * 60 * 60 * 24);

document.getElementById("dias-restantes").innerText =  Math.round(diferencia);