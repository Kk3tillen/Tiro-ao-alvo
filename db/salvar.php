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
date_default_timezone_set('America/Sao_Paulo');

$data = date('d/m/Y');
$hora = date('H:i');


$p = $conn->prepare(
    
    "INSERT INTO partida
    (nome, qnt_acertos, qnt_erros, total, data, hora)
    VALUES(:nome, :qnt_acertos ,:qnt_erros, :total, :data, :hora);"
);

$p->bindParam(":nome", $nome);
$p->bindParam(":qnt_acertos", $acertos);
$p->bindParam(":qnt_erros", $erros);
$p->bindParam(":total", $total);
$p->bindParam(":data", $data);
$p->bindParam(":hora", $hora);

$p->execute();

header("Location:../ranking.php");
