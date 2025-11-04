// ===================================
// CLASES
// ===================================
class Escuela {
    constructor(nombre, localidad, responsable) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.profesores = []; // Array de objetos Profesor
        this.alumnos = [];    // Array de objetos Alumno
    }

    // Métodos para gestionar colecciones internas
    añadirProfesor(profesor) {
        this.profesores.push(profesor);
    }

    añadirAlumno(alumno) {
        this.alumnos.push(alumno);
    }
}

class Profesor {
    constructor(nombre, tipo, escuela) {
        this.nombre = nombre;
        this.tipo = tipo; // 'ciencias' o 'letras'
        this.escuela = escuela; // Nombre de la escuela a la que pertenece
    }
}

class Alumno {
    constructor(nombre, curso, profesorResponsable, escuela) {
        this.nombre = nombre;
        this.curso = curso;
        this.profesorResponsable = profesorResponsable; 
        this.escuela = escuela; 
    }
}


let escuelas = []; 


function actualizarSelects() {
    let opcionesEscuela = escuelas.map(e => `<option value="${e.nombre}">${e.nombre}</option>`).join('');
    
    // Selectores para añadir Profesor y Alumno
    document.getElementById("selectEscuelaProfesor").innerHTML = opcionesEscuela;
    document.getElementById("selectEscuelaAlumno").innerHTML = opcionesEscuela;

    let profesores = escuelas.flatMap(e => e.profesores.map(p => p.nombre));
    let opcionesProfesor = profesores.map(p => `<option value="${p}">${p}</option>`).join('');
    document.getElementById("selectProfesorAlumno").innerHTML = opcionesProfesor;
}



document.getElementById("btnCrearEscuela").addEventListener("click", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreEscuela").value;
    const localidad = document.getElementById("localidadEscuela").value;
    const responsable = document.getElementById("responsableEscuela").value;

    if (nombre) {
        escuelas.push(new Escuela(nombre, localidad, responsable));
        actualizarSelects();
        document.getElementById("resultado").innerHTML = `Escuela **${nombre}** creada.`;
    } else {
        document.getElementById("resultado").innerHTML = "El nombre de la escuela es obligatorio.";
    }
});


document.getElementById("btnCrearProfesor").addEventListener("click", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreProfesor").value;
    const tipo = document.getElementById("tipoProfesor").value;
    const nombreEscuela = document.getElementById("selectEscuelaProfesor").value;

    let escuela = escuelas.find(e => e.nombre === nombreEscuela);

    if (escuela && nombre) {
        let nuevoProfesor = new Profesor(nombre, tipo, escuela.nombre);
        escuela.añadirProfesor(nuevoProfesor);
        actualizarSelects(); // Importante para que aparezca en el select de Alumno
        document.getElementById("resultado").innerHTML = `Profesor **${nombre}** añadido a **${escuela.nombre}**.`;
    } else {
        document.getElementById("resultado").innerHTML = "Error al añadir profesor. ¿Ha seleccionado una escuela?";
    }
});


document.getElementById("btnCrearAlumno").addEventListener("click", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreAlumno").value;
    const curso = document.getElementById("cursoAlumno").value;
    const profesor = document.getElementById("selectProfesorAlumno").value;
    const nombreEscuela = document.getElementById("selectEscuelaAlumno").value;

    let escuela = escuelas.find(e => e.nombre === nombreEscuela);

    if (escuela && nombre) {
        let nuevoAlumno = new Alumno(nombre, curso, profesor, escuela.nombre);
        escuela.añadirAlumno(nuevoAlumno);
        document.getElementById("resultado").innerHTML = `Alumno **${nombre}** de ${curso} añadido a **${escuela.nombre}**.`;
    } else {
        document.getElementById("resultado").innerHTML = "Error al añadir alumno. Verifique todos los campos.";
    }
});


document.getElementById("btnVerDatos").addEventListener("click", function(e) {
    e.preventDefault();
    let htmlResultado = "<h2>Estado Actual del Sistema</h2>";

    if (escuelas.length === 0) {
        htmlResultado += "<p>No hay escuelas registradas.</p>";
    } else {
        escuelas.forEach(escuela => {
            htmlResultado += `
                <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
                    <h3>🏫 Escuela: ${escuela.nombre}</h3>
                    <p>Localidad: ${escuela.localidad} | Responsable: ${escuela.responsable}</p>
                    
                    <h4>🧑‍🏫 Profesores (${escuela.profesores.length})</h4>
                    ${escuela.profesores.length > 0 ? 
                        `<ul>${escuela.profesores.map(p => `<li>**${p.nombre}** (${p.tipo})</li>`).join('')}</ul>` : 
                        '<p>No hay profesores.</p>'}

                    <h4>📚 Alumnos (${escuela.alumnos.length})</h4>
                    ${escuela.alumnos.length > 0 ? 
                        `<ul>${escuela.alumnos.map(a => `<li>**${a.nombre}** (${a.curso}) - Prof. Responsable: ${a.profesorResponsable}</li>`).join('')}</ul>` : 
                        '<p>No hay alumnos.</p>'}
                </div>
            `;
        });
    }

    document.getElementById("resultado").innerHTML = htmlResultado;
});