var meuComponente = document.getElementById("meuComponente");
var minhaImagem = meuComponente.querySelector("img");
var container = document.getElementById("game");
meuComponente.addEventListener("click", moverComponente);

function moverComponente() {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    
    var novoLeft = Math.random() * (containerWidth - meuComponente.offsetWidth);
    var novoTop = Math.random() * (containerHeight - meuComponente.offsetHeight);

    meuComponente.style.left = novoLeft + "px";
    meuComponente.style.top = novoTop + "px";

}