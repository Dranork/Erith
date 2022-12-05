let jogo = {

    jogoEl: document.querySelector("html"),
    mapaEl: document.querySelector("#mundo"),
    scrollerEL: document.querySelector("#sideScroller"),
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
    let x = window.innerWidth;

    ratio = y / 288;

    jogo.height = y;
    jogo.width = x;
    jogo.fixedWidth = x - y / 8;

    jogo.size = 1536 * ratio;

    style.innerHTML = `
        #mundo {
            margin: auto;
            height: ${y}px;
            width: ${x}px;
            margin-top: 0;
            margin-bottom: 0;
        }

        #sideScroller{

            height: ${y}px;
            width: ${jogo.size}px;
            margin: auto;

        }

        #player {
            position: absolute;
            height: ${y/6}px;
            width: ${y/8}px;
            bottom: ${y/8}px;
    
        }
        
        .npc {

            position: absolute;
            height: ${y/6}px;
            bottom: ${y/8}px;

        }`;

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
    jogo.scrollerEL.style.left = `${-jogo.xScroll}px`

}

jogo.jogoEl.addEventListener('keypress', teclado);
jogo.jogoEl.addEventListener('keyup', teclado);