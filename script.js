const lista = document.querySelector("#estudiantes")

let carta = ``

fetch('file.json')
    .then((res) => res.json())
    .then((info) => {
    for (let i = 0; i < info.length; i++) {
        carta += 
            `<div class="carta">
                <img src="https://github.com/${info[i].usernameGithub}.png" class="foto" alt="foto del estudiante">
                <hr>
                <p class="nombre">${info[i].student}</p>
                <a href="https://github.com/${info[i].usernameGithub}" class="git">link a github</a>
            </div>`
    }
    lista.innerHTML = carta;
    console.log(carta)
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

