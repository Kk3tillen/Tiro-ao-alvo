
let gameDiv = document.getElementById("game");
let raposoImg = document.querySelector("#game .movable-image");

const MOVER_COMPONENTE_AUTOMATICO_APOS_SECS = 3000;
let target = document.getElementById("target");
let acertou = document.getElementById("acertou");
let errou = document.getElementById("errou");
let todo = document.getElementById("todo");

let valor1 = 0;
let valor2 = 0; 

let moverComponenteAutomatico;


raposoImg.addEventListener("click", function() {
  // Gera coordenadas aleatórias dentro dos limites da div "game"
  let limiteX = gameDiv.clientWidth - raposoImg.clientWidth;
  let limiteY = gameDiv.clientHeight - raposoImg.clientHeight;
  let novaPosicaoX = Math.floor(Math.random() * limiteX);
  let novaPosicaoY = Math.floor(Math.random() * limiteY);

  // Define a posição da imagem usando as propriedades left e top
  raposoImg.style.left = novaPosicaoX + "px";
  raposoImg.style.top = novaPosicaoY + "px";

});

document.getElementById("game").onclick=function(){
    errou.innerHTML = valor2++; 
 }

let container = document.getElementById("game");
target.addEventListener("click", (e) => {
    e.stopPropagation();
    acertou.innerHTML = ++valor1;
    clearInterval(moverComponenteAutomatico);
    moverComponente();
    moverComponenteAutomatico = setInterval(moverComponente, MOVER_COMPONENTE_AUTOMATICO_APOS_SECS)
    todo.innerHTML = valor1 + valor2;
});

function moverComponente() {
    const offset = 50;
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let novoLeft = Math.floor(Math.random()*containerWidth-offset);
    let novoTop = Math.floor(Math.random() * containerHeight-offset);
    
    const flip = Math.floor(Math.random()*2);
    target.style.transform= (flip)? 'scale(-1,1)' : 'scale(1,1)';

    target.style.left = novoLeft + "px";
    target.style.top = novoTop + "px";
}

moverComponenteAutomatico = setInterval(moverComponente, MOVER_COMPONENTE_AUTOMATICO_APOS_SECS);
document.getElementById("game").onclick=function(){
   errou.innerHTML = ++valor2; 
   todo.innerHTML = valor1 + valor2;
}
