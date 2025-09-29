function calcularAreaTriangulo(base,altura){
    return (base * altura)/2;
};

function calcularPerimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
};

function calcularAreaCuadrado(lado){
    return lado * lado;
};

function calcularAreaRectangulo(base,altura){
    return base * altura;
};

function calcularPerimetroCuadrado(altura){
    return altura * 4;
};

function calcularPerimetroRectangulo(base, altura){
    return (altura * 2) + (base * 2);
};

function calcularAreaCirculo(radio){
    return Math.PI * radio * radio
};

function calcularPerimetroCirculo(radio){
    return 2 * Math.PI * radio;
}
