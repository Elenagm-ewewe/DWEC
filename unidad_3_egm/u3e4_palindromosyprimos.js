
let primospalindromos = [];

//Realiza un programa que calcule cuántos números son a la vez primos y palíndromos desde el 1 hasta 100,000. 
//Debe guardar todos ellos en un array y al finalizar el proceso imprimir dicho array.

for(let i =1 ; i<=100000; i++){

    if(esPrimo(i)&& esPalindromo(i)){
        primospalindromos.push(i);
    }
}

document.getElementById("resultado").innerText = `Hay ${primospalindromos.length} números primos y palíndromos entre 1 y 100,000. Son: \n ${primospalindromos.join(", ")}`;


function esPrimo(n){

    for(let i = 2; i<n; i++){

        if(n%i == 0){
            return false;
        }
    }
    return true;

}

function esPalindromo(n){
    let str = n.toString();
    let strInvertido = str.split("").reverse().join("");

    if(str === strInvertido){
        return true;
    }else{
        return false;
    }
}