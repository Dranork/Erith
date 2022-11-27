function inicio() {
    var txt = ['Se tudo estiver certo, isso deve aparecer.', '', '', '', ''];
    var speed = 50
    var i = 0


    document.getElementById("audio").remove();
    var element = document.getElementById("htmlAlteravel");
    var bodyStyle = document.getElementById("body").style;
    bodyStyle.backgroundImage = "none";
    bodyStyle.backgroundColor = "black";
    element.innerHTML = "";
    setInterval.setTimeout(dialogos(), 2000)

    function dialogos() {
        var falas = document.createElement("p");
        falas.setAttribute("id", "dialogo");
        document.body.appendChild(falas);

    };
        

};