
let numero = prompt("Introduce un número entero");

if(numero >= 2){

    for (let i = 1; i <= numero; i++) {
        
        if(i%2 == 0){
            console.log(i);
        }
        
    }

}else{
    alert("Introduce un número mayor o igual a 2")
}