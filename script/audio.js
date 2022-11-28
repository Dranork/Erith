let audioPode = false;
let audioOptions = true;
let alturaSom = 100;
let janelaAberta = false;

function comecaAudio() {
    if (audioPode === false) {
        let musica = "MusicMenu.mp3";
        let audio = new Audio(musica);
        audio.controls = false;
        audio.setAttribute("id","audio");
        document.body.appendChild(audio);
        audio.play();
        audioPode = true;
    }
};

function options() {
    if (janelaAberta == false) {
        let janela = criarJanela();
        janelaAberta = true;
        let volume = document.createElement("p");
        volume.setAttribute("id","option");
        janela.appendChild(volume);
        volume.innerHTML = "Volume da música = ";
        let volumeSlide = document.createElement("input");
        volumeSlide.setAttribute("type","range");
        volumeSlide.setAttribute("value","100");
        janela.appendChild(volumeSlide);
        let aplicar = document.createElement("button");
        aplicar.setAttribute("id","aplicar");
        aplicar.innerHTML = "Aplicar alterações";
        janela.appendChild(aplicar);
    }
};

function criarJanela() {
    let janela = document.createElement("div");
    janela.setAttribute("id", "janelinha");
    document.body.appendChild(janela);
    return janela;
};

function sobreNos() {
    let janela = criarJanela();
}; 