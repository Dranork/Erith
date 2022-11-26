var audioGetCalled = false;
function myFunction() {
    if (audioGetCalled === false) {
        var musica = "MusicMenu.wav";
        var audio = new Audio(musica);
        audio.controls = false;
        document.body.appendChild(audio);
        audio.play();
        audioGetCalled = true;
    }
};