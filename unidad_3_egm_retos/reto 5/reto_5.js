document.getElementById("nacional").addEventListener("click", function(e){
    e.preventDefault();

    let nacional = Math.floor(Math.random()*100000);

    nacional = nacional.toString().padStart(5, "0");

    document.getElementById("resultado").innerHTML = `<strong> ${nacional} </strong>`

});


document.getElementById("primitiva").addEventListener("click", function(e){
    e.preventDefault();

    let serie = "";
    let reintegro = (Math.floor(Math.random()*50)).toString().padStart(2,"0");
    let complementario = (Math.floor(Math.random()*50)).toString().padStart(2,"0");


    for(let i = 0 ; i < 5 ; i++){
        let num = Math.floor(Math.random() * 50);
        num = num.toString().padStart(2, "0");
        serie += `${num} `;
    }

document.getElementById("resultado").innerHTML = `<strong> ${serie} </strong> <p> Reintegro: <strong> ${reintegro}</strong> </p> <p>Complementario: <strong>${complementario}</strong></p>`;
});


document.getElementById("quiniela").addEventListener("click", function(e){
    e.preventDefault();

    let resultados = []; 

    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random() * 3);
        let signo;

        if (random === 0) signo = "1";
        else if (random === 1) signo = "X";
        else signo = "2";

        resultados.push(`Partido ${i + 1}: <strong> ${signo} </strong>`);
    }

document.getElementById("resultado").innerHTML = resultados.join("<br>");
});