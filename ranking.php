<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <link rel="stylesheet" href="style/ranking.css">
</head>
<body>
     <main class="container-ranking">
        <table class="table">
        <h1>Ranking</h1>
            <thead>
                <tr>
                    <th>Jogador</th>
                    <th>Pontos de acertos</th>
                </tr>
            </thead>
            <tbody>
            <?php

        //Connection
        $conn = new PDO("sqlite:db/alvo.db");
        $conn->setAttribute(
             PDO::ATTR_DEFAULT_FETCH_MODE,
            PDO::FETCH_OBJ);

            $query = $conn->query("SELECT * FROM partida ORDER BY qnt_acertos DESC;");
            $jogador = $query->fetchAll();

            foreach($jogador as$f):
            ?>
            <tr>
                <td><?=$f->nome?></td>
                <td><?=$f->qnt_acertos?></td>
            </tr>
            <?php endforeach ?>
            </tbody>
        </table>
        <a href="index.php">Jogar novamente</a>
     </main>
     <footer>
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
</body>
</html>