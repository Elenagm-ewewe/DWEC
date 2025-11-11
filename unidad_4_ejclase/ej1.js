
let contador = 0;

const acum = document.getElementById("clicks");
const boton = document.getElementById("boton");
const limpito = document.getElementById("limpiar");

boton.addEventListener("click", function(e){
e.preventDefault();

contador += 1;
acum.innerHTML = `${contador}`;

});

limpito.addEventListener("click", function(e){
    e.preventDefault()

    contador = 0;
    acum.innerHTML = `${contador}`;

})


