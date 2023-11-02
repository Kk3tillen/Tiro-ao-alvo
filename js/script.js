
const MOVER_COMPONENTE_AUTOMATICO_APOS_SECS = 1000;
let gameContainer = document.querySelector(".game-container");
let raposoImg = document.querySelector("#game .movable-image");
let target = document.getElementById("target");

let acertou = document.getElementById("acertou");
let errou = document.getElementById("errou");
let todo = document.getElementById("todo");

let valor1 = 0;
let valor2 = 0; 
const popUp = document.querySelector(".container");
popUp.style.display = "none";

let moverComponenteAutomatico;

function startTime(duration, display) {
    var timeLeft = duration;
  
    timer = setInterval(function () {
      if (timeLeft < 0) {
        clearInterval(timer);
        displayPopup();
      } else {
        minutes = parseInt(timeLeft / 60, 10);
        seconds = parseInt(timeLeft % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
        timeLeft--;
      }
    }, 1000);
  }
  
  function displayPopup() {
    const popUp = document.querySelector(".container");
    let erros = document.getElementById("errosFinal");
    let acertos = document.getElementById("acertos");
    let totalCliqs = document.getElementById("totalCliq");
    let tot = document.getElementById("tot");
    let acert = document.getElementById("acert");
    let error = document.getElementById("error");
    
    tot.innerHTML = valor1 + valor2;
    acert.innerHTML = valor1;
    error.innerHTML = valor2;

    acertos.value = valor1;
    erros.value = valor2;
    totalCliqs = valor1 + valor2;

    // Mostre a popup
    popUp.style.display = "block";
}
  
  startTime(15, document.getElementById("timer"));

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
    let limiteEsquerdo = 0;
    let limiteSuperior = 0;
    let limiteDireito = gameContainer.clientWidth - raposoImg.clientWidth;
    let limiteInferior = gameContainer.clientHeight - raposoImg.clientHeight;
    let novoLeft = Math.floor(Math.random() * (limiteDireito - limiteEsquerdo)) + limiteEsquerdo;
    let novoTop = Math.floor(Math.random() * (limiteInferior - limiteSuperior)) + limiteSuperior;
    
    const flip = Math.floor(Math.random() * 2);
    target.style.transform = flip ? 'scale(-1,1)' : 'scale(1,1)';
    target.style.left = novoLeft + "px";
    target.style.top = novoTop + "px";
}

moverComponenteAutomatico = setInterval(moverComponente, MOVER_COMPONENTE_AUTOMATICO_APOS_SECS);
document.getElementById("game").onclick=function(){
   errou.innerHTML = ++valor2; 
   todo.innerHTML = valor1 + valor2;
}

