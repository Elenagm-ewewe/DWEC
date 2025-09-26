

function contandoMinas(array){

let copia = array;

for (let i = 0; i < array.length; i++) {

for (let j = 0; j < array[i].length; j++) {

        let contador = 0;

    if(array[i][j] == -1){
        continue;
    }

    let posiciones = [[0,1],[0,-1],[1,0],[-1,0], [1,1],[-1,-1], [1,-1], [-1,1]] ;//Las 8 posiciones adyacentes






copia[i][j] = contador;
    
}
    
}

return copia;

}

let array = [[0, -1, 0, -1],
            [0, 0, -1, -1]];

console.log(array);

