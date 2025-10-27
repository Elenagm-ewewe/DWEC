//En stas constantes se almacenarán
let hospitales = [];
let pacientes = [];
let empleados = [];

//Definición de clases
class Hospital{
constructor(nombre, localidad, responsable){
    this.nombre = nombre;
    this.localidad = localidad;
    this.responsable = responsable;
    this.personal = [];  // aquí guardaremos índices o referencias
    this.pacientes = [];
}

}

class Paciente{
    constructor(nombre, personalAsignado, hospital){
        this.nombre = nombre;
        this.personalAsignado = personalAsignado
        this.hospital = hospital;
    }
}


class Personal{
    constructor(nombre, especialidad, hospital){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.hospital = hospital;
    }
}


//Añadir nuevo HOSPITAL desde el formulario
document.getElementById("nuevohosp").addEventListener("submit", e => {
    e.preventDefault();

    //Leemos los datos del formulario
    let nombre = document.getElementById("nuevonombrehosp").value;
    let localidad = document.getElementById("nuevalocalidadhosp").value;
    let responsable = document.getElementById("nuevaresponhosp").value;
    
    //Añadimos un nuevo ojeto al array de hospitales
    let nuevoHospital = new Hospital(nombre, localidad, responsable);
    hospitales.push(nuevoHospital);
    verHospitales();
    actualizarSelectHospitales();
});


//Añadir nuevo PERSONAL desde el formulario
document.getElementById("nuevoperso").addEventListener("submit", evento => {
evento.preventDefault();

    //Leemos los datos del formulario
    let nombre = document.getElementById("nuevonombreperso").value;
    let especialidad = document.getElementById("especialidad").value;
    let hospital = document.getElementById("pHospital").value;
    let nuevoempleado = new Personal (nombre, especialidad, hospital);
    empleados.push(nuevoempleado);
    verPersonal();
    actualizarSelectPersonal();
});


//Añadir nuevo PACIENTE desde el formulario
document.getElementById("nuevopaciente").addEventListener("submit", eventoo =>{
    eventoo.preventDefault();

    let nombre = document.getElementById("nuevonombrepaci").value;
    let personal = document.getElementById("nuevopersodepaci").value;
    let hospital = document.getElementById("pHospital").value;
    let nuevopaciente = new Paciente(nombre, personal, hospital);
    pacientes.push(nuevopaciente);
    verPacientes();
});


//Imprimir los hospitales que se vayan creando en una lista
function verHospitales() {
    let contenedor = document.getElementById("lista-hospitales");
    contenedor.innerHTML = "";

    if (hospitales.length === 0) {
        contenedor.innerHTML = "<p>No hay hospitales registrados</p>";
        return;
    }

    let html = "<ul>";
    hospitales.forEach((h, index) => {
        html += `
            <li id="hospital-${index}">
                <b>${h.nombre}</b>  <b>⚲ ${h.localidad}</b>  <b> ⛨ ${h.responsable}</b>
                <button onclick="editarHospital(${index})">✏️ Editar</button>
                <button onclick="borrarHospital(${index})">🗑️ Borrar</button>
            </li>`;
    });
    html += "</ul>";

    contenedor.innerHTML = html;
}

//Escribe en el documento el personal que se vaya creando en una lista
function verPersonal() {
    let contenedor = document.getElementById("lista-personal");
    contenedor.innerHTML = "";

    if (empleados.length === 0) {
        contenedor.innerHTML = "<p>No hay personal registrado</p>";
        return;
    }

    let html = "<ul>";
    empleados.forEach((e, index) => {
        html += `
            <li id="empleado-${index}">
                <b>${e.nombre}</b> <b> ${e.especialidad} </b>  <b>${e.hospital}</b>
                <button onclick="editarEmpleado(${index})">Editar</button>
                <button onclick="borrarEmpleado(${index})">Borrar</button>
            </li>`;
    });
    html += "</ul>";

    contenedor.innerHTML = html;
}

    //Escribir en el documento los pacientes que se vayan creando en una lista
    function verPacientes(){
        let contenedor = document.getElementById("lista-pacientes");
        contenedor.innerHTML="";

 let html = "<ul>";
    pacientes.forEach((p, index) => {
        html += `
            <li id="paciente-${index}">
                <b>${p.nombre}</b> - Personal asignado: ${p.personalAsignado} (Hospital: ${p.hospital})
                <button onclick="editarPaciente(${index})">✏️ Editar</button>
                <button onclick="borrarPaciente(${index})">🗑️ Borrar</button>
            </li>`;
    });
    html += "</ul>";

    contenedor.innerHTML = html;
    }


    function actualizarSelectHospitales() {
    // Seleccionamos todos los <select> que representen hospitales
    let selects = document.querySelectorAll("select#pHospital");
    
    selects.forEach(select => {
        // Limpiamos las opciones anteriores
        select.innerHTML = "";

        // Si no hay hospitales, mostramos un aviso
        if (hospitales.length === 0) {
            let option = document.createElement("option");
            option.textContent = "No hay hospitales registrados";
            option.disabled = true;
            option.selected = true;
            select.appendChild(option);
            return;
        }

        // Añadimos cada hospital como opción
        hospitales.forEach(h => {
            let option = document.createElement("option");
            option.value = h.nombre;   // aquí puedes poner un ID si lo tuvieras
            option.textContent = h.nombre;
            select.appendChild(option);
        });
    });
}

    function actualizarSelectPersonal() {
    // Seleccionamos todos los <select> que representen hospitales
    let selects = document.querySelectorAll("select#nuevopersodepaci");
    
    selects.forEach(select => {
        // Limpiamos las opciones anteriores
        select.innerHTML = "";

        // Si no hay hospitales, mostramos un aviso
        if (empleados.length === 0) {
            let option = document.createElement("option");
            option.textContent = "No hay empleados registrados";
            option.disabled = true;
            option.selected = true;
            select.appendChild(option);
            return;
        }

        // Añadimos cada hospital como opción
        empleados.forEach(h => {
            let option = document.createElement("option");
            option.value = h.nombre;   // aquí puedes poner un ID si lo tuvieras
            option.textContent = h.nombre;
            select.appendChild(option);
        });
    });
}

//Funcion para el borrado de elementos de la lista
function borrarHospital(indice) {
    hospitales.splice(indice, 1);
    verHospitales();
}

function borrarEmpleado(indice) {
    empleados.splice(indice, 1);
    verPersonal();
}

function borrarPaciente(indice) {
    pacientes.splice(indice, 1); // eliminamos ese paciente del array
    verPacientes(); // repintamos lista
}



function editarPaciente(indice) {
    let p = pacientes[indice];
    let li = document.getElementById(`paciente-${indice}`);

    // Generamos el select de hospitales dinámicamente
    let selectHospital = `<select id="edit-hospital-${indice}">`;
    hospitales.forEach(h => {
        // Marcamos como seleccionado el hospital actual del paciente
        let selected = (h.nombre === p.hospital) ? "selected" : "";
        selectHospital += `<option value="${h.nombre}" ${selected}>${h.nombre}</option>`;
    });
    selectHospital += `</select>`;

    li.innerHTML = `
        <input type="text" id="edit-nombre-${indice}" value="${p.nombre}">
        <input type="text" id="edit-personal-${indice}" value="${p.personalAsignado}">
        ${selectHospital}
        <button onclick="guardarPaciente(${indice})">💾 Guardar</button>
        <button onclick="verPacientes()">❌ Cancelar</button>
    `;
}

function guardarPaciente(indice) {
    let nuevoNombre = document.getElementById(`edit-nombre-${indice}`).value;
    let nuevoPersonal = document.getElementById(`edit-personal-${indice}`).value;
    let nuevoHospital = document.getElementById(`edit-hospital-${indice}`).value;

    pacientes[indice].nombre = nuevoNombre;
    pacientes[indice].personalAsignado = nuevoPersonal;
    pacientes[indice].hospital = nuevoHospital;

    verPacientes(); // repintamos con cambios guardados
}

function editarHospital(indice) {
    let h = hospitales[indice];
    let li = document.getElementById(`hospital-${indice}`);

    li.innerHTML = `
        <input type="text" id="edit-nombre-h-${indice}" value="${h.nombre}">
        <input type="text" id="edit-localidad-h-${indice}" value="${h.localidad}">
        <input type="text" id="edit-respon-h-${indice}" value="${h.responsable}">
        <button onclick="guardarHospital(${indice})">💾 Guardar</button>
        <button onclick="verHospitales()">❌ Cancelar</button>
    `;
}

function guardarHospital(indice) {
    let nuevoNombre = document.getElementById(`edit-nombre-h-${indice}`).value;
    let nuevaLocalidad = document.getElementById(`edit-localidad-h-${indice}`).value;
    let nuevoResp = document.getElementById(`edit-respon-h-${indice}`).value;

    hospitales[indice].nombre = nuevoNombre;
    hospitales[indice].localidad = nuevaLocalidad;
    hospitales[indice].responsable = nuevoResp;

    verHospitales();
}

function editarEmpleado(indice) {
    let e = empleados[indice];
    let li = document.getElementById(`empleado-${indice}`);

    // Select de especialidades
    let selectEspecialidad = `
        <select id="edit-especialidad-${indice}">
            <option value="Médico" ${e.especialidad === "Médico" ? "selected" : ""}>Médico</option>
            <option value="Enfermero" ${e.especialidad === "Enfermero" ? "selected" : ""}>Enfermero</option>
            <option value="Celador" ${e.especialidad === "Celador" ? "selected" : ""}>Celador</option>
        </select>
    `;

    // Select de hospitales
    let selectHospital = `<select id="edit-hospital-empleado-${indice}">`;
    hospitales.forEach(h => {
        let selected = (h.nombre === e.hospital) ? "selected" : "";
        selectHospital += `<option value="${h.nombre}" ${selected}>${h.nombre}</option>`;
    });
    selectHospital += `</select>`;

    li.innerHTML = `
        <input type="text" id="edit-nombre-e-${indice}" value="${e.nombre}">
        ${selectEspecialidad}
        ${selectHospital}
        <button onclick="guardarEmpleado(${indice})">💾 Guardar</button>
        <button onclick="verPersonal()">❌ Cancelar</button>
    `;
}

function guardarEmpleado(indice) {
    let nuevoNombre = document.getElementById(`edit-nombre-e-${indice}`).value;
    let nuevaEspecialidad = document.getElementById(`edit-especialidad-${indice}`).value;
    let nuevoHospital = document.getElementById(`edit-hospital-empleado-${indice}`).value;

    empleados[indice].nombre = nuevoNombre;
    empleados[indice].especialidad = nuevaEspecialidad;
    empleados[indice].hospital = nuevoHospital;

    verPersonal();
}