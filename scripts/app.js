// -- Exercice : faire un slider avec des images qui changent toutes les 3 secondes

/*
$(function(){
	let image=$('#imgslider');
	let allImage=["images/00.jpg", "images/01.jpg","images/02.jpg"];
	let i=0;

	setInterval(function()
	{
		image.fadeOut("slow",function(){
			$(this).attr('src',allImage[i]);
		});

		image.fadeIn("slow",function(){
		});

		if(i<allImage.length-1){
			i++;
		}
		else{
			i=0;
		}

	},3000,image,allImage,i);
}); 
*/

//setInterval VS setTimer
//setInterval prend 2 arguments : la fonction, et le temps

// Correction du prof :

$(function(){

	let images=["images/00.jpg", "images/01.jpg","images/02.jpg", "images/03.jpg"];
	let index=0;

	setInterval(function()
	{
		if(index == images.length) // si l'index est égal à la taille du tableau càd si on est arrivé à la dernière ligne on remet l'index à zéro
			index = 0; // ici pas besoin d'accolade comme en php

		$('#imgslider').attr('src',images[index]); // modificaton de source image

		index++; // increment index

	}, 3000);

});

// -- Exercice : Afficher les noms des gens de la bdd dans la partie CATEGORIES dans la colonne droite

var name = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "http://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
});

/*
request.done(function( msg ) {
	let list=$('#listname');

	for(let i=0; i<msg.length; i++){
  	console.log(msg[i].name);
  	list.append('<li><a href="">'+msg[i].name+'</a></li>');
  	}
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
*/


//----------- Correction du prof ----------------- 


request.done(function( data ) {
	var content ="";

	data.forEach(function(element){
		content += '<li id="user-'+element.id+'"><a href="">'+element.name+'</a></li>';
	});

	console.log(data);

	$("#right_column ul").html(content);

	$("#right_column ul > li").click(function(e){
		e.preventDefault();
		var idUser= $(this).attr("id");
		console.log(idUser.split("-"));
		idUser = idUser.split("-");

		var ficheUser= $.ajax({
			url: "http://jsonplaceholder.typicode.com/users",
			method: "GET",
			data: { id : idUser[1] },
  			dataType: "json" 
		});

		ficheUser.done(function(dataUser){
			console.info(dataUser[0].username+" "+dataUser[0].email);
		});
	});
});

request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});


// -- Exercice : Afficher dans la console l'e-mail et le pseudo de la personne quand on clique sur son nom

