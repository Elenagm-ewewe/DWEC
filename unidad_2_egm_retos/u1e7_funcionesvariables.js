let areaTriangulo = (base,altura) => (base * altura)/2 ;

let areaCuadrado = (lado) => lado * lado;

let areaRectangulo = (base,altura) => base * altura;

let areaCirculo = (radio) => Math.PI * radio * radio;

let perimetroTrianguloEq = (lado1) => lado1 *3 ; 

let perimetroTrianguloIs = (lado1, lado2) => lado1 + (lado2 * 2); 

let perimetroTrianguloEsc = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

let perimetroCuadrado = (altura) => altura * 4;

let perimetroRectangulo = (base, altura) => (altura * 2) + (base * 2);

let perimetroCirculo = (radio) => 2 * Math.PI * radio;


function perimetroTriangulo(){
    if(arguments.length === 1){
        return perimetroTrianguloEq(arguments[0]);
    }else if(arguments.length === 2){
        return perimetroTrianguloIs(arguments[0] , arguments[1]);
    }else if(arguments.length === 3){
        return perimetroTrianguloEsc(arguments[0],arguments[1],arguments[2]);
    }else{
        console.log("ERROR");
    }
};


function perimetroParalelogramo(){
    if(arguments.length = 1){
        return perimetroCuadrado(arguments[0]);
    }else if(arguments.length = 2){
        return perimetroRectangulo(arguments[0], arguments[1]);
    }
};
