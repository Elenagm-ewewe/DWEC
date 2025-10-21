document.getElementById("formulario").addEventListener("submit", function(evento){
evento.preventDefault(); 
     
     const form = new FormData(this); 
     const numero = form.get("num"); //Importamos el valor del número introducido 
     let base = form.get("bases"); //Importamos el valor de la base escocogida 
     const salida = document.getElementById("resul"); //El resultad se escribirá en <p> "resultado" justo debajo del formulario 
     
     //Convierte el valor de bases en un número entero;  
     if(base === "binario"){
         base = parseInt(2);
    }else if(base === "octal"){
         base = parseInt(8); 
    }else if(base === "decimal"){
         base = parseInt(10); 
    }else if(base === "hexadecimal"){
        base = parseInt(16); }
   
      let decimal = parseInt(numero, base);  //Pasamos el numero introducido a decimal, indipendientemente de la base escogida gracias a la funcion ParseInt 
    
    if(isNaN(decimal)){ //Si el resultado no es numérico, significa que hay un error en la conversión y que el dato inroducido no es correcto
          salida.innerHTML = `El número introducido no correspnde con la base seleccionada`; 
    }else{ 
          salida.innerHTML = `Binario: ${decimal.toString(2)} </br> 
                            Octal: ${decimal.toString(8)} </br> 
                            Decimal: ${decimal.toString(10)} </br> 
                            Hexadecimal: ${decimal.toString(16)} </br>` 
    } 
                        
});