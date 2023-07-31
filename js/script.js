let gameDiv = document.getElementById("game");
let raposoImg = document.querySelector("#game .movable-image");

let acertou = document.getElementById("acertou");
let errou = document.getElementById("errou");
let todo = document.getElementById("todo");

let valor1 = parseInt(acertou.textContent);
let valor2 = parseInt(errou.textContent); 

raposoImg.addEventListener("click", function() {
  // Gera coordenadas aleatórias dentro dos limites da div "game"
  let limiteX = gameDiv.clientWidth - raposoImg.clientWidth;
  let limiteY = gameDiv.clientHeight - raposoImg.clientHeight;
  let novaPosicaoX = Math.floor(Math.random() * limiteX);
  let novaPosicaoY = Math.floor(Math.random() * limiteY);

  // Define a posição da imagem usando as propriedades left e top
  raposoImg.style.left = novaPosicaoX + "px";
  raposoImg.style.top = novaPosicaoY + "px";

  acertou.innerHTML = valor1++;
});

document.getElementById("game").onclick=function(){
    errou.innerHTML = valor2++; 
 }