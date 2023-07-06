let meuComponente = document.getElementById("meuComponente");
let acertou = document.getElementById("acertou");
let errou = document.getElementById("errou");
let todo = document.getElementById("todo");

let valor1 = parseInt(acertou.textContent);
let valor2 = parseInt(errou.textContent); 

let minhaImagem = meuComponente.querySelector("img");
let container = document.getElementById("game");
meuComponente.addEventListener("click", moverComponente);

function moverComponente() {
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    
    let novoLeft = Math.random() * (containerWidth - meuComponente.offsetWidth);
    let novoTop = Math.random() * (containerHeight - meuComponente.offsetHeight);

    meuComponente.style.left = novoLeft + "px";
    meuComponente.style.top = novoTop + "px";

    acertou.innerHTML = valor1++;
}
document.getElementById("game").onclick=function(){
   errou.innerHTML = valor2++; 
}




