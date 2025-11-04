class Biblioteca {
  constructor(nombre, localidad, responsable) {
    this.nombre = nombre;
    this.localidad = localidad;
    this.responsable = responsable;
    this.libros = [];
    this.socios = [];
  }

  añadirLibro(libro) {
    this.libros.push(libro);
  }

  borrarLibro(titulo) {
    const index = this.libros.findIndex(l => l.titulo === titulo);
    if (index >= 0) this.libros.splice(index, 1);
  }

  añadirSocio(socio) {
    this.socios.push(socio);
  }

  borrarSocio(nombre) {
    const index = this.socios.findIndex(s => s.nombre === nombre);
    if (index >= 0) this.socios.splice(index, 1);
  }
}

class Libro {
  constructor(titulo, autor, biblioteca) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.biblioteca = biblioteca;
  }

  prestar() {
    if (this.prestado) return "Ya está prestado";
    this.prestado = true;
    return "Prestado correctamente";
  }
}

class Socio {
  constructor(nombre, biblioteca) {
    this.nombre = nombre;
    this.biblioteca = biblioteca;
  }
}

let bibliotecas = [];

// Crear biblioteca
document.getElementById("crearbiblioteca").addEventListener("click", function(e){
  e.preventDefault();

  let nombre = document.getElementById("nombrebiblio").value.trim();
  let localidad = document.getElementById("localidad").value.trim();
  let responsable = document.getElementById("responsable").value.trim();

  if (!nombre || !localidad || !responsable) return alert("Completa todos los campos");

  bibliotecas.push(new Biblioteca(nombre, localidad, responsable));

  document.getElementById("resultado").innerHTML = "✅ Biblioteca añadida";
  actualizarSelects();
});

function actualizarSelects() {
  let html = bibliotecas.map(b => `<option value="${b.nombre}">${b.nombre}</option>`).join("");
  document.getElementById("bibliotecas").innerHTML = html;
  document.getElementById("bibliotecasocio").innerHTML = html;
}

// Crear libro
document.getElementById("crearlibro").addEventListener("click", function(e){
  e.preventDefault();

  let titulo = document.getElementById("titulo").value.trim();
  let autor = document.getElementById("autor").value.trim();
  let biblioteca = document.getElementById("bibliotecas").value;

  if (!titulo || !autor) return alert("Completa todos los campos");

  let biblio = bibliotecas.find(b => b.nombre === biblioteca);
  biblio.añadirLibro(new Libro(titulo, autor, biblio.nombre));

  document.getElementById("resultado").innerHTML = "📘 Libro añadido";
});

// Crear socio
document.getElementById("crearsocio").addEventListener("click", function(e){
  e.preventDefault();

  let nombre = document.getElementById("nombresocio").value.trim();
  let biblioteca = document.getElementById("bibliotecasocio").value;

  if (!nombre) return alert("Introduce el nombre del socio");

  let biblio = bibliotecas.find(b => b.nombre === biblioteca);
  biblio.añadirSocio(new Socio(nombre, biblio.nombre));

  document.getElementById("resultado").innerHTML = "👤 Socio creado";
});

// Ver bibliotecas
document.getElementById("verbibliotecas").addEventListener("click", function(e){
  e.preventDefault();
  let html = bibliotecas.map(b => `
    <div class="biblioteca-item">
      <strong>${b.nombre}</strong> (${b.localidad}) - Responsable: ${b.responsable}<br>
      <button class="editar-biblio" data-nombre="${b.nombre}">✏️ Editar</button>
      <button class="borrar-biblio" data-nombre="${b.nombre}">🗑️ Borrar</button>
    </div>
  `).join("<hr>");
  document.getElementById("resultado").innerHTML = html || "No hay bibliotecas";
});

// Ver socios
document.getElementById("versocios").addEventListener("click", function(e){
  e.preventDefault();
  let html = bibliotecas.flatMap(b => 
    b.socios.map(s => `
      <div class="socio-item">
        <strong>${s.nombre}</strong> (${s.biblioteca})
        <button class="editar-socio" data-nombre="${s.nombre}" data-biblio="${b.nombre}">✏️ Editar</button>
        <button class="borrar-socio" data-nombre="${s.nombre}" data-biblio="${b.nombre}">🗑️ Borrar</button>
      </div>
    `)
  ).join("<hr>");
  document.getElementById("resultado").innerHTML = html || "No hay socios";
});

// Ver libros
document.getElementById("verlibros").addEventListener("click", function(e){
  e.preventDefault();
  let html = bibliotecas.flatMap(b => 
    b.libros.map(l => `
      <div class="libro-item">
        <strong>${l.titulo}</strong> - ${l.autor} (${l.biblioteca})
        <br>Prestado: ${l.prestado ? "Sí" : "No"}
        <br>
        <button class="editar-libro" data-titulo="${l.titulo}" data-biblio="${b.nombre}">✏️ Editar</button>
        <button class="borrar-libro" data-titulo="${l.titulo}" data-biblio="${b.nombre}">🗑️ Borrar</button>
      </div>
    `)
  ).join("<hr>");
  document.getElementById("resultado").innerHTML = html || "No hay libros";
});

// 🔹 Manejar botones de borrar/editar (delegación de eventos)
document.getElementById("resultado").addEventListener("click", function(e) {
  if (e.target.classList.contains("borrar-biblio")) {
    let nombre = e.target.dataset.nombre;
    bibliotecas = bibliotecas.filter(b => b.nombre !== nombre);
    actualizarSelects();
    document.getElementById("resultado").innerHTML = "🗑️ Biblioteca eliminada";
  }

  if (e.target.classList.contains("editar-biblio")) {
    let nombre = e.target.dataset.nombre;
    let b = bibliotecas.find(b => b.nombre === nombre);
    let nuevoNombre = prompt("Nuevo nombre:", b.nombre);
    let nuevaLocalidad = prompt("Nueva localidad:", b.localidad);
    let nuevoResp = prompt("Nuevo responsable:", b.responsable);
    if (nuevoNombre) b.nombre = nuevoNombre;
    if (nuevaLocalidad) b.localidad = nuevaLocalidad;
    if (nuevoResp) b.responsable = nuevoResp;
    actualizarSelects();
    document.getElementById("resultado").innerHTML = "✏️ Biblioteca modificada";
  }

  if (e.target.classList.contains("borrar-libro")) {
    let titulo = e.target.dataset.titulo;
    let biblio = e.target.dataset.biblio;
    let b = bibliotecas.find(b => b.nombre === biblio);
    b.borrarLibro(titulo);
    document.getElementById("resultado").innerHTML = "🗑️ Libro eliminado";
  }

  if (e.target.classList.contains("editar-libro")) {
    let titulo = e.target.dataset.titulo;
    let biblio = e.target.dataset.biblio;
    let b = bibliotecas.find(b => b.nombre === biblio);
    let libro = b.libros.find(l => l.titulo === titulo);
    let nuevoTitulo = prompt("Nuevo título:", libro.titulo);
    let nuevoAutor = prompt("Nuevo autor:", libro.autor);
    if (nuevoTitulo) libro.titulo = nuevoTitulo;
    if (nuevoAutor) libro.autor = nuevoAutor;
    document.getElementById("resultado").innerHTML = "✏️ Libro modificado";
  }

  if (e.target.classList.contains("borrar-socio")) {
    let nombre = e.target.dataset.nombre;
    let biblio = e.target.dataset.biblio;
    let b = bibliotecas.find(b => b.nombre === biblio);
    b.borrarSocio(nombre);
    document.getElementById("resultado").innerHTML = "🗑️ Socio eliminado";
  }

  if (e.target.classList.contains("editar-socio")) {
    let nombre = e.target.dataset.nombre;
    let biblio = e.target.dataset.biblio;
    let b = bibliotecas.find(b => b.nombre === biblio);
    let socio = b.socios.find(s => s.nombre === nombre);
    let nuevoNombre = prompt("Nuevo nombre del socio:", socio.nombre);
    if (nuevoNombre) socio.nombre = nuevoNombre;
    document.getElementById("resultado").innerHTML = "✏️ Socio modificado";
  }
});
