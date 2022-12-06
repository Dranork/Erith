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
    let x = window.innerWidth;

    ratio = y / 288;

    jogo.height = y;
    jogo.width = x;
    jogo.fixedWidth = x - y / 8;
    jogo.size = 900 * ratio;
    jogo.fixedSize = jogo.size - y / 8;


    style.innerHTML = `
        #mundo {
            margin: auto;
            height: ${y}px;
            width: ${jogo.size}px;
            margin-right: 0px;
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
            console.log("pos:" + player.x + " ");
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

        player.x += mov;

    } else {

        if (jogo.xScroll == 0) {

            if (player.x + mov <= jogo.fixedWidth / 2) {

                if (player.x + mov > 0)
                    player.x += mov;
                else player.x = 0;

            } else {

                jogo.xScroll += mov;
                player.x += mov;

            }

        } else {

            if (player.x + mov - jogo.xScroll >= jogo.fixedWidth / 2) {

                if (player.x + mov < jogo.fixedSize)
                    player.x += mov;
                else player.x = jogo.fixedSize;

            } else {

                jogo.xScroll += mov;
                player.x += mov;

            }

        }

    }


    player.playerEl.style.left = `${player.x}px`;
    jogo.mapaEl.style.left = `${-jogo.xScroll}px`;

}

jogo.jogoEl.addEventListener('keypress', teclado);
jogo.jogoEl.addEventListener('keyup', teclado);


//falas

let fala = document.querySelector('#dialogues');

function escrever(dialogo) {
    fala.textContent = dialogo; //aqui eu vou precisar de um vertor de caracteres
    fala.hidden = false;
}

function fimDialogo() {
    fala.textContent = "";
    fala.hidden = true;
}

let npc = {

    npcEl: 0,
    x: -100,
    dialogo: "isso é um dialogo de teste! :D",

}


function dialogueCheck(npc, dialogo) {

    escrever("");

    let npcX = npc.offsetLeft;

    if (player.x <= (npcX + jogo.width / 20) && player.x >= (npcX - jogo.width / 20))
        escrever(dialogo);
    else fimDialogo();

}
let npcTeste2 = npc;
npcTeste2.npcEl = document.querySelector(`#npcDeTeste2`);
npcTeste2.x = npcTeste2.offsetLeft;
npcTeste2.dialogo = "Inferior... venho aguardando a dias sua chegada, a chegada de quem ousa sequer desejar me destruir, eu, o poderoso Nebasu. você ousa destruir quem esteve punindo aqueles que devem ser punidos, dando fome aqueles que são abençoados pela gula, matando aqueles que matam, fazendo sofrer aqueles que fazem sofrer. Heroi, sua justiça nunca foi justiça, você apenas estava alimentando seu ego, caso contrário, prove sua verdadeira bondade, se sacrificando por aqueles que pecam, seja o verdadeiro SALVADOR e aceite o fardo desse título ao passar pela porta.";

let infNpc = setInterval(() => {
   
    
    dialogueCheck(npcTeste2.npcEl, npcTeste2.dialogo);
}, 10)