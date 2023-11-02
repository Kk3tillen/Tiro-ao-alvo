<?php

//Connection
$conn = new PDO("sqlite:alvo.db");
$conn->setAttribute(
    PDO::ATTR_DEFAULT_FETCH_MODE,
    PDO::FETCH_OBJ);

$nome = $_GET["nome"];
$total = $_GET["totalCliq"];
$acertos = $_GET["acertos"];
$erros = $_GET["errosFinal"];

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

header("Location:../ranking.php");
