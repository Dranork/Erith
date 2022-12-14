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
    correndo: 0,
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

        case 'KeyA':
            x = -1;
            break;
        case 'KeyD':
            x = 1;
            break;
        case 'Space':
            console.log("pos:" + player.x + " ");
            break;

    }

    mover(x);

    if (e.code == 'KeyA' || e.code == 'KeyD') {

        if (player.correndo == 0) {

            player.correndo = 1;
            player.playerEl.src = "Asset/Correndinho.gif"

        }

    } else {

        player.playerEl.src = "Asset/empe.gif";

    }

    if (e.type == 'keyup') {

        player.playerEl.src = "Asset/empe.gif";
        player.correndo = 0;

    }

    console.log(player.correndo + " " + e.type);

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

function dialogueCheck(npc, dialogo) {

    let npcX = npc.offsetLeft;

    if (player.x <= (npcX + jogo.width / 20) && player.x >= (npcX - jogo.width / 20)) {
        escrever(dialogo);
        return 1;
    } else return 0;

}
let NewUrl = window.location.href.replace("game", "gamefase2");;


let transfWeb = setInterval(() => {

    if ((player.x + 314) >= jogo.size)
        window.location.replace(NewUrl);

}, 10)


let npcTeste = {

    npcEl: document.querySelector(`#npcDeTeste`),
    x: 0,
    dialogo: "OhoHo, Bem VinDo AveNTuReIRO... n??o SE pREoCUPe, Isso n??o ?? ??lcool. ?? apenas minha dose de calma di??ria, N??O ESTOU B??BADO. Voc?? ?? novo na vida e nessa cidade amaldi??oada dos infernos HAHAHAHA logo entender?? oque estou falando"

}

npcTeste.x = npcTeste.offsetLeft;

let npcTeste2 = {

    npcEl: document.querySelector(`#npcDeTeste2`),
    x: 0,
    dialogo: "Viajante novo? Tente n??o morrer por aqui, meu nome ?? Polko, ?? melhor ir para casa antes que voc?? morra... ou eu te mate"
}

npcTeste2.x = npcTeste2.offsetLeft;

let npcTeste3 = {

    npcEl: document.querySelector(`#npcDeTeste3`),
    x: 0,
    dialogo: "OH, eu sou o padre da cidade, visitante, faz tempo que n??o vejo caras novas por aqui filho, afinal, todos passam fome nessa cidade... n??o seria inesperado se descobrissem que ...hehe... esque??a, tenha um bom dia."
}

npcTeste3.x = npcTeste3.offsetLeft;

let npcTeste4 = {

    npcEl: document.querySelector(`#npcDeTeste4`),
    x: 0,
    dialogo: "Vo.. voc?? veio matar o demonio!?!?"
}

npcTeste4.x = npcTeste4.offsetLeft;

let npcTeste5 = {

    npcEl: document.querySelector(`#npcDeTeste5`),
    x: 0,
    dialogo: "Ah, ora ora, voc?? ... percebeu que j?? estou mais s??brio?! hehehe... oque voc?? disse? voc?? quer saber mais sobre essa cidade? Bom, voc?? entender?? quando o padre abrir a boca... n??o me impressionaria se voc?? estivesse temperado quando ele fizer isso. Mas se voc?? quer mesmo saber, busque por aqueles cultistas do submundo, mas tome cuidado onde se mete."
}

npcTeste5.x = npcTeste5.offsetLeft;
let infNpc = setInterval(() => {

    let check = 0;

    check += dialogueCheck(npcTeste.npcEl, npcTeste.dialogo);
    check += dialogueCheck(npcTeste2.npcEl, npcTeste2.dialogo);
    check += dialogueCheck(npcTeste3.npcEl, npcTeste3.dialogo);
    check += dialogueCheck(npcTeste4.npcEl, npcTeste4.dialogo);
    check += dialogueCheck(npcTeste5.npcEl, npcTeste5.dialogo);


    if (!check) fimDialogo();

}, 10)