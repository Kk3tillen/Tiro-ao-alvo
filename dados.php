<?php

//Connection
$conn = new PDO("sqlite:db/alvo.db");
$conn->setAttribute(
    PDO::ATTR_DEFAULT_FETCH_MODE,
    PDO::FETCH_OBJ);

$nome = $_GET["nome"];
$total = $_GET["pontTotal"];
$acertos = $_GET["pontAcertos"];
$erros = $_GET["pontErros"];

$p = $conn->prepare(
    "INSERT INTO partida
    (nome, qnt_acertos, qnt_erros, total)
    VALUES(:nome, :qnt_acertos , :qnt_erros, :total);"
);

$p->bindParam(":nome", $nome);
$p->bindParam(":qnt_acertos", $acertos);
$p->bindParam(":qnt_erros", $erros);
$p->bindParam(":total", $total);

$p->execute();