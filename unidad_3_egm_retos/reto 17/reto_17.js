
class Localidad {
  constructor(nombre, numHabitantes, provincia) {
    this.nombre = nombre;
    this.numHabitantes = numHabitantes;
    this.provincia = provincia;
  }
}

class Tanque {
  constructor(numero, capacidad, localidad) {
    this.numero = numero;
    this.capacidad = capacidad;
    this.localidad = localidad;
  }
}

class Habitante {
  constructor(nombre, edad, localidad, tanque) {
    this.nombre = nombre;
    this.edad = edad;
    this.localidad = localidad;
    this.tanque = tanque;
  }
}


let localidades = [];
let tanques = [];
let habitantes = [];


function actualizarSelects() {
  let opcionesLoc = localidades.map(l => `<option value="${l.nombre}">${l.nombre}</option>`).join("");
  document.getElementById("localidadTanque").innerHTML = opcionesLoc;
  document.getElementById("localidadHabitante").innerHTML = opcionesLoc;

  let opcionesTanques = tanques.map(t => `<option value="${t.numero}">${t.numero} (${t.localidad})</option>`).join("");
  document.getElementById("tanqueHabitante").innerHTML = opcionesTanques;
}


document.getElementById("crearLocalidad").addEventListener("click", () => {
  let nombre = document.getElementById("nombreLocalidad").value.trim();
  let numHab = document.getElementById("numHabitantes").value;
  let provincia = document.getElementById("provincia").value.trim();

  if (!nombre || !numHab || !provincia) return alert("Rellena todos los campos");

  localidades.push(new Localidad(nombre, numHab, provincia));
  document.getElementById("resultado").innerHTML = "🏙️ Localidad añadida.";
  actualizarSelects();
});


document.getElementById("crearTanque").addEventListener("click", () => {
  let num = document.getElementById("numTanque").value;
  let cap = document.getElementById("capacidad").value;
  let loc = document.getElementById("localidadTanque").value;

  if (!num || !cap || !loc) return alert("Completa todos los campos");

  tanques.push(new Tanque(num, cap, loc));
  document.getElementById("resultado").innerHTML = "💧 Tanque añadido.";
  actualizarSelects();
});


document.getElementById("crearHabitante").addEventListener("click", () => {
  let nombre = document.getElementById("nombreHabitante").value.trim();
  let edad = document.getElementById("edadHabitante").value;
  let localidad = document.getElementById("localidadHabitante").value;
  let tanque = document.getElementById("tanqueHabitante").value;

  if (!nombre || !edad || !localidad || !tanque) return alert("Completa todos los campos");

  habitantes.push(new Habitante(nombre, edad, localidad, tanque));
  document.getElementById("resultado").innerHTML = "👤 Habitante añadido.";
});


document.getElementById("verLocalidades").addEventListener("click", () => {
  let html = localidades.map(l => `
    <div class="item">
      <b>${l.nombre}</b> - ${l.numHabitantes} hab. (${l.provincia})
      <button class="editar-localidad" data-nombre="${l.nombre}">✏️</button>
      <button class="borrar-localidad" data-nombre="${l.nombre}">🗑️</button>
    </div>`).join("");
  document.getElementById("resultado").innerHTML = html || "No hay localidades.";
});

document.getElementById("verTanques").addEventListener("click", () => {
  let html = tanques.map(t => `
    <div class="item">
      <b>Tanque ${t.numero}</b> - Capacidad: ${t.capacidad}L (Localidad: ${t.localidad})
      <button class="editar-tanque" data-num="${t.numero}">✏️</button>
      <button class="borrar-tanque" data-num="${t.numero}">🗑️</button>
    </div>`).join("");
  document.getElementById("resultado").innerHTML = html || "No hay tanques.";
});

document.getElementById("verHabitantes").addEventListener("click", () => {
  let html = habitantes.map(h => `
    <div class="item">
      <b>${h.nombre}</b> - ${h.edad} años (Localidad: ${h.localidad}, Tanque: ${h.tanque})
      <button class="editar-habitante" data-nombre="${h.nombre}">✏️</button>
      <button class="borrar-habitante" data-nombre="${h.nombre}">🗑️</button>
    </div>`).join("");
  document.getElementById("resultado").innerHTML = html || "No hay habitantes.";
});


document.getElementById("resultado").addEventListener("click", e => {

  if (e.target.classList.contains("borrar-localidad")) {
    let nombre = e.target.dataset.nombre;
    localidades = localidades.filter(l => l.nombre !== nombre);
    tanques = tanques.filter(t => t.localidad !== nombre);
    habitantes = habitantes.filter(h => h.localidad !== nombre);
    actualizarSelects();
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("editar-localidad")) {
    let nombre = e.target.dataset.nombre;
    let loc = localidades.find(l => l.nombre === nombre);
    loc.nombre = prompt("Nuevo nombre:", loc.nombre) || loc.nombre;
    loc.numHabitantes = prompt("Nuevo número de habitantes:", loc.numHabitantes) || loc.numHabitantes;
    loc.provincia = prompt("Nueva provincia:", loc.provincia) || loc.provincia;
    actualizarSelects();
  }


  if (e.target.classList.contains("borrar-tanque")) {
    let num = e.target.dataset.num;
    tanques = tanques.filter(t => t.numero != num);
    actualizarSelects();
    e.target.parentElement.remove();
  }


  if (e.target.classList.contains("editar-tanque")) {
    let num = e.target.dataset.num;
    let t = tanques.find(t => t.numero == num);
    t.numero = prompt("Nuevo número:", t.numero) || t.numero;
    t.capacidad = prompt("Nueva capacidad:", t.capacidad) || t.capacidad;
    actualizarSelects();
  }


  if (e.target.classList.contains("borrar-habitante")) {
    let nombre = e.target.dataset.nombre;
    habitantes = habitantes.filter(h => h.nombre !== nombre);
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("editar-habitante")) {
    let nombre = e.target.dataset.nombre;
    let h = habitantes.find(h => h.nombre === nombre);
    h.nombre = prompt("Nuevo nombre:", h.nombre) || h.nombre;
    h.edad = prompt("Nueva edad:", h.edad) || h.edad;
  }
});
