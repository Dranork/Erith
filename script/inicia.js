function inicio() {
    var txt = ['Há muito tempo atrás...', 'Em uma pequena terra isolada, batizada de <div class="Erith">Erith<div> ','<div class="pecado">Suja de sangue, dor e ódio.<div>', '<div class="pecado">Manchada pelos pecados daqueles que à habitavam.<div>', 'Mesmo diante tanta desgraça,', 'Ainda havia esperança...', 'Ainda havia quem buscasse sua <div id="redencao">Redenção<div>'];
    var nDialogo = 0;

    function dialogos() {
        if (txt.length != nDialogo) {
            var falas = document.createElement("p");
            falas.setAttribute("id", "dialogo");
            document.body.appendChild(falas);
            falas.innerHTML = txt[nDialogo];
            setTimeout(function apagaFala() {     
                falas.style.animation = "desaparecerTexto 3s";
                falas.style.color = "black";
                nDialogo++;
                setTimeout(function () {    
                    falas.remove();
                    dialogos();
                }, 3000);
            }, 6000);
        }  
    };


    document.getElementById("audio").remove();
    var element = document.getElementById("htmlAlteravel");
    var bodyStyle = document.getElementById("body").style;
    bodyStyle.backgroundImage = "none";
    bodyStyle.backgroundColor = "black";
    element.innerHTML = "";
    setTimeout(dialogos(), 2000);
};