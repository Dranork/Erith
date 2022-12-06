let audioPode = false;
let configSalva = {
    alturaSom: 100
};
let janelaAberta = false;

function comecaAudio() {
    if (audioPode === false) {
        if (localStorage.getItem('config') != null) {
            let config = localStorage.getItem('config');
            configSalva = JSON.parse(config);
        }
        let musica = "MusicMenu.mp3";
        let audio = new Audio(musica);
        audio.controls = false;
        audio.setAttribute("id","audio");
        document.body.appendChild(audio);
        audio.play();
        audio.volume = configSalva.alturaSom / 100
        audioPode = true;
    }
};
function options() {
    if (janelaAberta == false) {
        let janela = criarJanela();
        janelaAberta = true;
        let volume = document.createElement("p");
        volume.setAttribute("id", "option");
        janela.appendChild(volume);
        volume.innerHTML = "Volume da música";
        let volumeSlide = document.createElement("input");
        volumeSlide.setAttribute("type", "range");
        volumeSlide.setAttribute("value", "100");
        janela.appendChild(volumeSlide);
        let aplicar = document.createElement("button");
        aplicar.setAttribute("id", "aplicar");
        aplicar.innerHTML = "Aplicar alterações";
        janela.appendChild(aplicar);
        aplicar.addEventListener('click', salvarVolume);

        function salvarVolume() {
            configSalva.alturaSom = volumeSlide.value;
            let dados = JSON.stringify(configSalva);
            localStorage.setItem('config', dados);
            document.getElementById("audio").volume = configSalva.alturaSom / 100;
        };
    }
};

function criarJanela() {
    let janela = document.createElement("div");
    janela.setAttribute("id", "janelinha");
    document.getElementById("htmlAlteravel").appendChild(janela);
    let fechar = document.createElement("button");
    fechar.setAttribute("id", "fechou");
    fechar.innerHTML = "X";
    janela.appendChild(fechar);
    fechar.addEventListener('click', apagaTudo);
    return janela;
};

function sobreNos() {
    let janela = criarJanela();
    function adicionarTexto() {
        
    };
};


window.onload = function chuvinha() {
    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5033cbde8fac0b1b4f9e39292c1ffb0a`)
            .then(response => response.json())
            .then(data => {
                switch (Math.trunc(data.weather[0].id / 100)) {
                    case 2:
                        document.body.style.backgroundImage = "url('Asset/backgroundchuvendinho.gif')";
                        break;
                    case 3:
                        document.body.style.backgroundImage = "url('Asset/backgroundchuvendinho.gif')";
                        break;
                    case 5:
                        document.body.style.backgroundImage = "url('Asset/backgroundchuvendinho.gif')";
                        break;
                }
            })
    }
    if (!navigator.geolocation) {
        window.alert('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success);
    }
};

function apagaTudo() {
    document.querySelector('#janelinha').remove();
    janelaAberta = false;
}

