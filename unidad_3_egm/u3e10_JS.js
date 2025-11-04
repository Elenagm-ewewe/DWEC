class Autor {
    constructor(nombre, nacionalidad){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setNacionalidad(nacionalidad){
        this.nacionalidad = nacionalidad;
    }

    getNombre(){
        return this.nombre;
    }

    getNacionalidad(){
        return this.nacionalidad;
    }

}

class Libro{

    static contadorId = 1;

    constructor(titulo, autor, precio, genero, stock){
        this.ISBN = Libro.contadorId++;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.genero = genero;
        this.stock = stock;
    }

setPrecio(precio){
this.precio = precio;
}

setStock(stock){
    this.stock = stock;
}

getTitulo(){
    return this.titulo;
}

getAutor(){
    return this.autor;
}

getPrecio(){
    return this.precio;
}

getGenero(){
    return this.genero;
}

getStock(){
    return this.stock;
}

    tieneStock(){
        if(this.stock > 0){
            return true;
        }else{
            return false;
        }
    }

}


class Libreria{
    constructor(){
        this.libros = [];
        this.ganancias = 0;
    }

    agregarLibro(libro){
        this.libros.push(libro);
    }

    eliminar(id){
        let idlibro = this.libros.findIndex(libro => libro.ISBN === id)

        let libroeliminado = this.libros.splice(idlibro, 1)

        return libroeliminado
    }

    buscarPorId(id){
        let librobuscado = this.libros.find(libro => parseInt(libro.ISBN) === id);
        return librobuscado;
    }

    buscarPorTitulo(titulo){
        let librobuscado = this.libros.filter(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        return librobuscado;
    }

    filtrarPorAutor(autor){
        let obra = this.libros.filter(libro => (libro.autor).toLowerCase() === autor.toLowerCase());
        return obra;
    }

    filtrarPorGenero(genero){
        let obra = this.libros.filter(libro => libro.genero.toLowerCase() === genero.toLowerCase());
        return obra;
    }

    comprarLibros(idLibro){
        let libro = this.libros.find(libro => libro.ISBN === idLibro);

        if(libro.tieneStock()){
            //Aumentamos las ganancias
            this.ganancias += libro.precio;
            libro.stock -= 1;
        }else{
            console.log("No se pudo realizar la compra, No hya stock suficiente")
        }
    }

    obtenerGanancias(){
        return this.ganancias;
    }

}

//-----------------------------------------------------------------------------------------------------

let libreria = new Libreria();
let autores = [];

document.getElementById("agregarautor").addEventListener("click", function(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value;
let nacionalidad = document.getElementById("nacionalidad").value;

let nuevoautor = new Autor(nombre, nacionalidad);
autores.push(nuevoautor);

document.getElementById("resultado").innerHTML = `El autor ${nuevoautor.nombre} añadido correctamente`;
actualizarSelectAutores();
})

//----------------------------------------------------------------------------------------------------------------
function actualizarSelectAutores(){
    let html = autores.map(autor => `<option value="${autor.nombre}">${autor.nombre}<option>`)
    document.getElementById("autor").innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------------

document.getElementById("agregarlibro").addEventListener("click", function(e){
e.preventDefault();
let titulo = document.getElementById("titulo").value;
let autor =document.getElementById("autor").value;
let precio = document.getElementById("precio").value;
let genero = document.getElementById("genero").value;
let stock = document.getElementById("stock").value;

let nuevolibro = new Libro(titulo, autor, precio, genero, stock);
libreria.agregarLibro(nuevolibro)

document.getElementById("resultado").innerHTML = `Libro añadido correctamente`

});

//--------------------------------------------------------------

document.getElementById("buscarautor").addEventListener("click", function(e){
e.preventDefault();

let criterio = document.getElementById("buscar").value;

let lista = libreria.filtrarPorAutor(criterio).map(libro => `<p> Titulo: ${libro.titulo} <br> Autor: ${libro.autor} <br> Género: ${libro.genero} <br> Precio: ${libro.precio}€ <br> ISBN: ${libro.ISBN} <br> Stock: ${libro.stock}</p>`);

document.getElementById("resultado").innerHTML = lista;

});

//--------------------------------------------------------------

document.getElementById("buscarid").addEventListener("click", function(e){
e.preventDefault();

let criterio = parseInt(document.getElementById("buscar").value);

let libro = libreria.buscarPorId(criterio);

if(libro){
    document.getElementById("resultado").innerHTML = `<p> Titulo: ${libro.titulo} <br> Autor: ${libro.autor} <br> Género: ${libro.genero} <br> Precio: ${libro.precio}€ <br> ISBN: ${libro.ISBN} <br> Stock: ${libro.stock}</p>`;

}else{
    document.getElementById("resultado").innerHTML = `Libro no encontrado`;
}


});

//--------------------------------------------------------------

document.getElementById("buscargenero").addEventListener("click", function(e){
e.preventDefault();

let criterio = document.getElementById("buscar").value;

let lista = libreria.filtrarPorGenero(criterio).map(libro => `<p> Titulo: ${libro.titulo} <br> Autor: ${libro.autor} <br> Género: ${libro.genero} <br> Precio: ${libro.precio}€ <br> ISBN: ${libro.ISBN} <br> Stock: ${libro.stock}</p>`);

document.getElementById("resultado").innerHTML = lista;

});

//--------------------------------------------------------------

document.getElementById("buscartitulo").addEventListener("click", function(e){
e.preventDefault();

let criterio = document.getElementById("buscar").value;

let lista = libreria.buscarPorTitulo(criterio).map(libro => `<p> Titulo: ${libro.titulo} <br> Autor: ${libro.autor} <br> Género: ${libro.genero} <br> Precio: ${libro.precio}€ <br> ISBN: ${libro.ISBN} <br> Stock: ${libro.stock}</p>`);

document.getElementById("resultado").innerHTML = lista;

});



document.getElementById("eliminarlibro").addEventListener("click", function(e){
e.preventDefault();

let criterio = parseInt(document.getElementById("idlibro").value);

libreria.eliminar(criterio)

document.getElementById("resultado").innerHTML = `Libro eliminado correctamente`;

});

document.getElementById("comprar").addEventListener("click", function(e){
e.preventDefault();

let id = parseInt(document.getElementById("idlibroc").value);
let cantidad = parseInt(document.getElementById("cantidad").value)


for(let i = 0 ; i < cantidad ; i++){
libreria.comprarLibros(id)
}


document.getElementById("resultado").innerHTML = `Libro comprado correctamente`;

});

