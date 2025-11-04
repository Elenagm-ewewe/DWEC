let html = [];

for(let i = 2000 ; i <= 2100 ;i++){

    let fecha = new Date(i, 5, 21);

    if(fecha.getDay() === 6){
        html.push(fecha);
    }

}

let htmlfechas = html.map(fecha => ` <div class="fecha"> <p> ${fecha.toLocaleDateString()}</p></div> `)

document.getElementById("resultado").innerHTML = htmlfechas.join(" ");