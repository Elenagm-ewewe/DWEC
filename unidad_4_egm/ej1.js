class Producto{
#nombre;
#precio;
#unidades;

constructor(nombre, precio, unidades){
    this.nombre= nombre;
    this.precio = precio;
    this.unidades = unidades;
}

    getNombre(){
        return this.#nombre;
    }

    getPrecio(){
        return this.#precio
    }

    getUnidades(){
        return this.#unidades;
    }

    toString(){
        return "Producto: " + this.#nombre + "  Precio: " + this.#precio + "  Unidades: " + this.#unidades;
    }

}



class Televisor extends Producto{
#pulgadas;
#tecnologia;

constructor(nombre, precio, unidades, pulgadas, tecnologia){
    super(nombre, precio, unidades);
    this.#pulgadas;
    this.#tecnologia;
}

getPulgadas(){
    return this.#pulgadas;
}

getTecnologia(){
    return this.#tecnologia;
}

}