let AreaTrangulo = (base,altura) => (base * altura)/2 ;

let PerimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

let AreaCuadrado = (lado) => lado * lado;

let AreaRectangulo = (base,altura) => base * altura;

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
