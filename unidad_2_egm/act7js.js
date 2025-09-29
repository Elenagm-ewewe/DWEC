
let array = [[0, -1, 0, -1],
            [0, 0, -1, -1],
             [-1, 0, -1, 0]];

function contandoMinas(array){

for (let i = 0; i < array.length; i++) {

for (let j = 0; j < array[i].length; j++) {

    let contador = 0;

    if(array[i][j] == -1)continue;

    for (let o = -1; o <= 1; o++) {
    for (let p = -1; p <= 1; p++) {



        if(o== 0 && p == 0)continue;
      
        let posX = i + o;
        let posY = j + p;

        if(posX < 0 || posX >= array.length || posY < 0 || posY >= array[0].length){
            continue;
        }

        if(array[posX][posY] == -1){
            contador++;
        }
    }
    }

    array[i][j] = contador;

}
}

return array;

}

console.log(array);

console.log(contandoMinas(array));