
let numero = prompt("Introduce un número entero");

if(numero >= 1){

    for (let i = numero ; i >= 1; i--) {
        
        if(i%2 != 0){
            console.log(i);
        }
        
    }

}else{
    alert("Introduce un número mayor o igual a 1")
}