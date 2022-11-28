
let fala = document.querySelector('p');
function escrever(dialogo) {
    fala.textContent = dialogo;//aqui eu vou precisar de um vertor de caracteres
}
const inf = setInterval(() => {
    escrever("");
    const hero = document.querySelector('#player');
    const npc = document.querySelector('.npc');
    let npcLeft = npc.offsetLeft;

    let heroLocal = +window.getComputedStyle(hero).bottom.replace('px', '');
    let heroCenter = hero.offsetLeft;

    if (npcLeft >= heroCenter-480 && npcLeft <= heroCenter+hero.clientWidth+80 && npcLeft > 0)
        escrever("OhoHo, Bem VinDo AveNTuReIRO... nÃo SE pREoCUPe, Isso não é alcool É apenas minha dose de calma diária, NÃO ESTOU BEBADO. Você É novo nessa cidade amaldiçoada dos infernos HAHAHAHA logo entenderá oque estou Á dizer  ");


}, 10)

