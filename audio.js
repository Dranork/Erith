var audioPode = false;

function comecaAudio() {
    if (audioPode === false) {
        var musica = "MusicMenu.wav";
        var audio = new Audio(musica);
        audio.controls = false;
        document.body.appendChild(audio);
        audio.play();
        audioPode = true;
    }
};
