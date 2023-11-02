<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiro ao Alvo</title>
  <link rel="stylesheet" href="style/game.css">
</head>

<body>
  <audio src="sounds/theme-dora.wav" autoplay>
  </audio>
  <div id="pontuacao">
    <div id="acerto">
      <h3>Acertos</h3>
      <span id="acertou">0</span>
    </div>
    <div id="erros">
      <h3>Erros</h3>
      <span id="errou">0</span>
    </div>
    <div id="total">
      <h3>Total</h3>
      <span id="todo">0</span>
    </div>
    <div id="div-timer">
      <p id="label-time">tempo restante</p>
      <div id="timer"></div>
    </div>
  </div>
  <main>
    <div id="game" class="game-container">
      <img id="target" src="imgs/raposo.png" alt="Minha Imagem" width="162" height="121" class="movable-image">
    </div>
    <div class="container">
      <form action="db/salvar.php" method="GET">

        <h2>Fim de jogo</h2>
        
        <div>
          <input type="hidden" name="nome" id="nomeJogador" value="<?= $_GET["name"] ?>">
          <p>Jogador: <span id="pop-up-name"><?= $_GET["name"] ?></span></p>
        </div>
        <div>
          <p>pontuação total</p>
          <input type="hidden" id="totalCliq" name="totalCliq" value="">
          <span id="tot"></span>
        </div>
        <div>
          <p>Acertos</p>
          <input type="hidden" id="acertos" name="acertos" value="">
          <span id="acert"></span>
        </div>
        <div>
          <p>Erros</p>
          <input type="hidden" id="errosFinal" name="errosFinal" value="">
          <span id="error"></span>
        </div>
        <input id="btn-rank" type="submit" value="Ver Ranking">
      </form>
    </div>
  </main>
  <footer id="rodape">
    <div>
      <h4>Atividade</h4>
      <p>Disciplina: Programação para internet</p>
      <p>Professor: Marcelo Figueiredo Barbosa Junior</p>
      <p>IFRN - Campus Santa Cruz</p>
    </div>
    <p id="text_reservado">Todos os direitos reservados ©</p>
    <div>
      <h4>Alunos</h4>
      <p>Kézia Ketillen Santos Lima</p>
      <p>Maria Francielen Barros de Menezes</p>
      <p>Alex Gomes da Silva</p>
    </div>
  </footer>
  <script src="js/script.js"></script>
</body>

</html>