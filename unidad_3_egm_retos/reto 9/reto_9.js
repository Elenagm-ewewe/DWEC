let sandkill1 = {
    nombre: "Antonio",
    edad: 25,
    especialidad: "Infiltración",
    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}`;
    }
};


let sandkill2 = new Object();
sandkill2.nombre = "Ana";
sandkill2.edad = 24;
sandkill2.especialidad = "Combate cuerpo a cuerpo";
sandkill2.toString = function () {
return `Nombre: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}`;
};


class Sandkill {
    constructor(nombre, edad, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}`;
    }
}

let sandkill3 = new Sandkill("Miguel", 28, "Francotirador");



// Añadir propiedad a sandkill1
sandkill1.nacionalidad = "Japonesa";

// Añadir propiedad a sandkill2
sandkill2.lenguajeFavorito = "JavaScript";

// Eliminar propiedad de sandkill3
delete sandkill3.especialidad;



function mostrarPropiedades(obj) {
    let resultado = "";
    for (let prop in obj) {
        // Evitar funciones (como toString)
        if (typeof obj[prop] !== "function") {
        resultado += `${prop}: ${obj[prop]} | `;
        }
    }
  return resultado.slice(0, -3); // eliminar el último separador " | "
}


const contenedor = document.getElementById("cards");
    const propiedadesDiv = document.getElementById("propiedades");

    const sandkills = [sandkill1, sandkill2, sandkill3];

    sandkills.forEach((sk, i) => {
        contenedor.innerHTML += `
            <div class="card">
            <h3>Sandkill ${i + 1}</h3>
            <p>${sk.toString()}</p>
            </div>
        `;
    });

    propiedadesDiv.innerHTML = `
        <h2>Propiedades sin usar <code>.toString()</code>:</h2>
        <p><strong>Sandkill 1:</strong><br>${mostrarPropiedades(sandkill1)}</p>
        <p><strong>Sandkill 2:</strong><br>${mostrarPropiedades(sandkill2)}</p>
        <p><strong>Sandkill 3:</strong><br>${mostrarPropiedades(sandkill3)}</p>
    `;