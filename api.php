<?php

sleep(0); // cette fonction permet de mettre en pause pendant 10 secondes : càd le php ne répondra pas pendant 10 secondes

// ------------------------- Connexion à la bdd ----------------------------
try
{
	$dbh = new PDO('mysql:host=localhost;dbname=baseajax','root','');
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
}
catch(PDOException $e)
{
	echo 'Connexion impossible. Message error:' . $e;
}

// le TRY-CATCH permet d'enlever le 'Fatal error'

//$content ="";

// --------------- Vérification des données formulaire -------------------

if($_SERVER['REQUEST_METHOD']=='POST') // on vérifie quelle méthode a été utilisée pour lancer la requête, ici si la méthode est POST on rentre dans le IF
{
	if(!empty($_POST))
	{

	$stmt = $dbh->prepare("INSERT INTO users(nom, prenom, poste, date_naissance, date_create)VALUES(:nom, :prenom, :poste, :date_naissance, now() )");
	$stmt->bindParam(':nom', $_POST['nom'], PDO::PARAM_STR);
	$stmt->bindParam(':prenom', $_POST['prenom'], PDO::PARAM_STR);
	$stmt->bindParam(':poste', $_POST['poste'], PDO::PARAM_STR);
	$stmt->bindParam(':date_naissance', $_POST['date_naissance'], PDO::PARAM_STR);
	$stmt->execute();
	}
}


elseif($_SERVER['REQUEST_METHOD'] =='GET')
{
	if(empty($_GET))
	{
		$stmt = $dbh->prepare("SELECT * FROM users");
	}
	else
	{	
		$stmt = $dbh->prepare("SELECT * FROM users WHERE id_user=". $_GET['id_user']);
	}
	$stmt->execute();
	//echo '<pre>'; var_dump($stmt->fetchAll()); echo '</pre>';
	echo json_encode($stmt->fetchAll()); // transforme notre tableau php en format json
}


// avec bindParam on peut caster les valeurs alors qu'avec bindValue on est obligé de préciser l'ordre : valeur 1, valeur 2, valeur 3 etc.
// Note : le 3e paramètre PDO::PARAM_STR n'est pas obligatoire

?>