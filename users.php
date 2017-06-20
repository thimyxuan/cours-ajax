<?php

/*

// --------------- Connexion à la bdd -------------------

$pdo = new PDO('mysql:host=localhost;dbname=baseajax','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

$content ="";

if($_POST)
{
	$requete = "INSERT INTO users(nom, prenom, poste, date_naissance, date_create)VALUES(:nom, :prenom, :poste, :date_naissance, now() )";

	$r = $pdo->prepare($requete);

	$r->bindValue(':nom', $_POST['nom'], PDO::PARAM_STR);
	$r->bindValue(':prenom', $_POST['prenom'], PDO::PARAM_STR);
	$r->bindValue(':poste', $_POST['poste'], PDO::PARAM_STR);
	$r->bindValue(':date_naissance', $_POST['date_naissance'], PDO::PARAM_STR);
	$r->execute();

	$content .= "Formulaire envoyé !";
}

echo $content;

*/

?>