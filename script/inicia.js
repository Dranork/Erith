function inicio() {
    let txt = ['Há muito tempo atrás...', 'Em uma pequena terra isolada, batizada de <div class="Erith">Erith<div> ', '<div class="pecado">Suja de sangue, dor e ódio.<div>', '<div class="pecado">Manchada pelos pecados daqueles que à habitavam.<div>', 'Mesmo diante tanta desgraça,', 'Ainda havia esperança...', 'Ainda havia quem buscasse sua <div id="redencao">Redenção<div>', 'Você está pronto para entrar nessa jornada?'];
    let nDialogo = 0;

    function dialogos() {
        if (txt.length - 1 != nDialogo) {
            let falas = document.createElement("p");
            falas.setAttribute("id", "dialogo");
            document.body.appendChild(falas);
            falas.innerHTML = txt[nDialogo];
            setTimeout(function apagaFala() {
                falas.style.animation = "desaparecerTexto 3s";
                falas.style.color = "black";
                nDialogo++;
                setTimeout(function() {
                    falas.remove();
                    dialogos();
                }, 3000);
            }, 6000);
        } else {

            let falas = document.createElement("p");
            falas.setAttribute("id", "ultimaRedencao");
            document.body.appendChild(falas);
            falas.innerHTML = txt[txt.length - 1];
            let vamos = document.createElement("a");
            document.body.appendChild(vamos);
            vamos.innerHTML = "Vamos!";
            vamos.href = "game.html";
            let orandinho = document.createElement("img");
            orandinho.src = "style/Levantando.gif"
            orandinho.setAttribute("id", "pray");
            document.body.appendChild(orandinho);
            setTimeout(function() {
                orandinho.src = "style/empe.gif"
            }, 1500);
        }
    };




    document.getElementById("audio").remove();
    let element = document.getElementById("htmlAlteravel");
    let bodyStyle = document.getElementById("body").style;
    bodyStyle.backgroundImage = "none";
    bodyStyle.backgroundColor = "black";
    element.innerHTML = "";
    let musica = "musica.mp3";
    let audio = new Audio(musica);
    audio.controls = false;
    audio.setAttribute("id", "audio");
    document.body.appendChild(audio);
    audio.play();
    setTimeout(dialogos(), 2000);
};