let jogo = {

    jogoEl: document.querySelector("html"),
    mapaEl: document.querySelector("#mundo"),
    width: 0,
    fixedWidth: 0,
    height: 0,
    xScroll: 0,
    size: 0
}

let player = {

    playerEl: document.querySelector('#player'),
    x: 0

}

function setTamanho() {

    let style = document.createElement('style');
    let y = window.innerHeight;

    style.innerHTML = `
        #mundo {
            margin: auto;
            height: ${y}px;
            width: ${y*4/3}px;
            margin-top: 0;
            margin-bottom: 0;
        }

        #player {
            position: absolute;
            height: ${y/6}px;
            width: ${y/8}px;
            bottom: ${y/8}px;
    
        }`;

    ratio = y / 288;

    jogo.height = y;
    jogo.width = y * 4 / 3;
    jogo.fixedWidth = jogo.width - y / 8;

    jogo.size = 1536 * ratio;

    document.head.appendChild(style);

}

setTamanho();

function teclado(e) {

    let x = 0;
    let y = 0;

    switch (e.code) {

        case 'KeyW':
            break;
        case 'KeyA':
            x = -1;
            break;
        case 'KeyS':
            break;
        case 'KeyD':
            x = 1;
            break;
        case 'Space':
            console.log("pos:" + player.x + " " + player.y);
            break;

    }

    mover(x);

    if (e.type == 'keyup') {



    }

}

function mover(x) {

    mov = x * (jogo.width / 100);

    if (x < 0) {

        player.playerEl.style.transform = "scaleX(-1)";

    } else {

        player.playerEl.style.transform = "scaleX(1)";

    }

    if (jogo.xScroll > 0 && jogo.xScroll < (jogo.size - jogo.width)) {

        console.log("teste!");

        if (jogo.xScroll + mov < 0) {

            jogo.xScroll = 0;

        } else if (jogo.xScroll + mov > jogo.size - jogo.width) {

            jogo.xScroll = (jogo.size - jogo.width);

        } else {

            jogo.xScroll += mov;

        }

    } else {

        if (jogo.xScroll == 0) {

            if (player.x + mov <= jogo.width / 2) {

                if (player.x + mov > 0)
                    player.x += mov;
                else player.x = 0;

            } else {

                jogo.xScroll += mov;

            }

        } else {

            if (player.x + mov >= jogo.width / 2) {

                if (player.x + mov < jogo.fixedWidth)
                    player.x += mov;

            } else {

                jogo.xScroll += mov;

            }

        }

    }


    player.playerEl.style.left = `${player.x}px`;
    jogo.mapaEl.style.backgroundPosition = `${-jogo.xScroll}px`

}

function mousePos(e) {

    console.log("mouse: " + e.clientX + " " + e.clientY);

}

jogo.jogoEl.addEventListener('keypress', teclado);
jogo.jogoEl.addEventListener('keyup', teclado);
jogo.jogoEl.addEventListener('click', mousePos);