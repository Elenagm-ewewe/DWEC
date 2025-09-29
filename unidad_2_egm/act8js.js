function comprobarsudoku(){

    const sukoku = obtenerArray();

    const comprobar = esSudokuCorrecto(sukoku);

    if (comprobar) {
        alert("El Sudoku es correcto");
    } else {
        alert("El Sudoku no es correcto");
    }

}

document.addEventListener ('DOMContentLoaded', function(){

    const boton = document.getElementById("comprobar");

    if(boton){
        boton.addEventListener('click', comprobarsudoku);
    }

});



function obtenerArray(){

    let sudoku = [];

    for (let q =0 ; q < 9; q++) {

        let fila = [];
    
        for (let a = 0 ; a < 9; a++) {
        
            let nombrecelda = "cell"+q+a ;

            let elementoescrito = document.getElementById(nombrecelda);

            const valorNum = parseInt(elementoescrito)

            fila.push(valorNum);
        }

    sudoku.push(fila);
    }   

return sudoku;
}


/* let sudoku= [   [5,3,4,6,7,8,9,1,2],
                [6,7,2,1,9,5,3,4,8],
                [1,9,8,3,4,2,5,6,7],
                [8,5,9,7,6,1,4,2,3],
                [4,2,6,8,5,3,7,9,1],
                [7,1,3,9,2,4,8,5,6],
                [9,6,1,5,3,7,2,8,4],
                [2,8,7,4,1,9,6,3,5],
                [3,4,5,2,8,6,1,7,9]
            ]; */


function esSudokuCorrecto(miArrayBi) {

    for (let i = 0; i < miArrayBi.length; i++) {
            let comprobarfila = [];

    for (let j = 0; j < miArrayBi[i].length; j++) {
        comprobarfila.push(miArrayBi[i][j]);
    }

    let comprobarfila1 = [...new Set(comprobarfila)];

    if(comprobarfila1.length < miArrayBi.length){
        return false;

    }
    }


    for (let o = 0; o < miArrayBi.length; o++) {
            let comprobarfila = [];

    for (let p = 0; p < miArrayBi[o].length; p++) {
        comprobarfila.push(miArrayBi[p][o]);
    }

    let comprobarfila1 = [...new Set(comprobarfila)];

    if(comprobarfila1.length < miArrayBi.length){
        return false;

    }
    }

    return true;
}

