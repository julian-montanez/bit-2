const lista = document.querySelector("#estudiantes")

let carta = ``

fetch('file.json')
    .then((res) => res.json())
    .then((info) => {
    //console.log(info[3].projects[1].score.length)
        for (let i = 0; i < info.length; i++) {
            function promedio(nota){
                let total = 0
                if(nota.length == 10){
                    for(a = 0; a < 10; a++){
                        total += info[i].projects[1].score[a]
                    }
                    total /= 2
                    return total
                } else if (nota > 5){
                    total = info[i].projects[1].score / 2
                    return total
                } else {
                    return nota
                }
            }
        carta += 
            `<div class="contenedor">
                <div class="carta cara-delantera">
                    <img src="${info[i].usernameGithub == false ? "assets/usuario-no-foto.png" : `https://github.com/${info[i].usernameGithub}.png`}" class="foto" alt="foto del estudiante">
                    <hr>
                    <p class="nombre">${info[i].student}</p>
                    <p class="code">N°${info[i].code}</p>
                </div>
                <div class="carta cara-trasera">
                    <h2>intencidad del curso</h2>
                    <p>${info[i].intensity} horas</p>
                    <h3>notas de proyectos</h3>
                    <ul>
                        <li>${info[i].projects[0].name}: <br>${promedio(info[i].projects[0].score)}</li>
                        <li>${info[i].projects[1].name}: <br>${Math.floor(promedio(info[i].projects[1].score))}</li>
                    </ul>
                    <div class="contenedor-boton">
                        ${info[i].usernameGithub == false ? `<div class="aviso"><p>el estudiante no posee GitHub</p></div>` : `<a href="${`https://github.com/${info[i].usernameGithub}`}" class="git" target="blank"><button>link de <img class="git-logo" src="assets/git-logo.png" alt="git"></button></a>`}
                    </div>
                </div>
            </div>`;
        }
    lista.innerHTML = carta;
    })
    .catch((err) => {
    console.log('error:', err);
});



/*fetch('file.json')
    .then((res) => res.json())
    .then((info) => {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].student);
    }
    })
    .catch((err) => {
    console.log('error:', err);
});*/

