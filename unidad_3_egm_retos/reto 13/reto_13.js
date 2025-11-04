let tiempoDeInicio = 0;
let tiempoAcumulado = 0;
let intervalo;

const reloj = document.getElementById('display');
const tiempos = document.getElementById('tiempos-capturados');

const iniciar = document.getElementById('iniciar');
const parar = document.getElementById('parar');
const reiniciar = document.getElementById('reiniciar');
const capturar = document.getElementById('capturar');

function formatear(ms) {
    const cs = Math.floor((ms % 1000) / 10); // centésimas
    const s = Math.floor(ms / 1000) % 60;
    const m = Math.floor(ms / 60000) % 60;
    const h = Math.floor(ms / 3600000);
    const f = n => n.toString().padStart(2, '0');
    return `${f(h)}:${f(m)}:${f(s)}.${f(cs)}`;
}

function mostrar() {
    reloj.textContent = formatear(tiempoAcumulado);
}

function iniciarCrono() {
    if (intervalo) return;
    tiempoDeInicio = Date.now() - tiempoAcumulado;
    intervalo = setInterval(() => {
        tiempoAcumulado = Date.now() - tiempoDeInicio;
        mostrar();
    }, 10);
}

function pararCrono() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciarCrono() {
    pararCrono();
    tiempoAcumulado = 0;
    mostrar();
}

function capturarTiempo() {
    const li = document.createElement('li');
    li.textContent = reloj.textContent;
    tiempos.prepend(li);
}

// Eventos
iniciar.onclick = iniciarCrono;
parar.onclick = pararCrono;
reiniciar.onclick = reiniciarCrono;
capturar.onclick = capturarTiempo;

// Inicializar display
mostrar();
