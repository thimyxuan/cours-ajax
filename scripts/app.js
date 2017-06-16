
//----------------------------------------------------------------------
// EXERCICE 1 : faire un slider avec des images qui changent toutes les 3 secondes
//----------------------------------------------------------------------

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


//----------- Correction du prof -----------------

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



//----------------------------------------------------------------------
// EXERCICE 2 : Afficher les noms des gens de la bdd dans la partie CATEGORIES dans la colonne droite
//----------------------------------------------------------------------

/*
var name = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "http://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
});

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

//----------------------------------------------------------------------
// EXERCICE 3 : Afficher dans la console l'e-mail et le pseudo de la personne quand on clique sur son nom
//----------------------------------------------------------------------

//----------- Correction du prof -----------------


var name = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "http://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
});


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



//----------------------------------------------------------------------
// EXERCICE 4 : Aller récupérer les infos des 4 premiers posts : titre et contenu et l'afficher sous la banière image. Le texte doit faire 100 caractères et la suite sera tronquée avec trois petits-points ... Réduire le titre à 15 caractères
//----------------------------------------------------------------------

/*
var requete = $.ajax({
  url: "http://jsonplaceholder.typicode.com/posts",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
});


requete.done(function( dataPosts ) {
	var content="";

	for(let i=0; i<4; i++){
	console.log(dataPosts[i].title+dataPosts[i].body);
	content = '<strong>'+dataPosts[i].title.slice(0,15)+'</strong><p>'+dataPosts[i].body.slice(0,100)+'...</p>';

	$(".test").eq(i).html(content);

	}

});

req.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});

*/

//----------- Correction du prof -----------------

$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
})

.done(function( dataPosts ) {

	//console.log(dataPosts);

	for(let i=0; i<4; i++)
	{
		//console.log($('.one_quarter > strong'));
		$('.one_quarter > div > strong').eq(i).text(dataPosts[i].title.slice(0,15));
		$('.resume').eq(i).text(dataPosts[i].body.slice(0,100));

		$('.one_quarter a').eq(i).click(function(e){
			e.preventDefault();
			
			if($(this).text() != '« Read Less' )
			{
				$('.resume').eq(i).text(dataPosts[i].body);
				$(this).text('« Read Less');
			}
			else
			{
				$('.resume').eq(i).text(dataPosts[i].body.slice(0,100)+'...');
				$(this).text('Read More »');
			}

		});
	}
})

// Note : text() permet de récupérer le texte brut alors que html() prend en compte les balises html

.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});


//----------------------------------------------------------------------
// EXERCICE 5 : afficher les 3 premieres photos de la bdd + afficher 10 photos suivantes lorsque l'on clique sur View more
//----------------------------------------------------------------------

/*
var requet = $.ajax({
  url: "http://jsonplaceholder.typicode.com/photos",
  method: "GET",
  dataType: "json" // cette ligne est optionnelle
});


requet.done(function( dataPhotos ) {
	var content="";

	for(let i=0; i<3; i++)
	{
		let images=[dataPhotos[i].url];
		console.log(images);
		$('.one_third img').eq(i).attr('src',images);
	}

	//dataPhotos.forEach(function(photo)
	for(let i=3; i<5; i++)
	{
		let images=[dataPhotos[i].url];
		$('.clear').append('<li class="one_third"><img src="'+images+'" width="290" height="180" alt=""></li>');*/
		/*
		$('.plus a').eq(i).click(function(e){
			e.preventDefault();
			$('.lastbox').append('<img src="'+images+'" width="290" height="180" alt="">');
			
		});*/
/*
	}

	for(let i=5; i<6; i++)
	{
		let images=[dataPhotos[i].url];
		$('.clear').append('<li class="one_third lastbox"><img src="'+images+'" width="290" height="180" alt=""></li>');
	}

});

requet.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});*/



//----------- Correction du prof -----------------

let increment = 0;
let picture;

$.get("http://jsonplaceholder.typicode.com/photos")

.done(function(data){

	//console.log(data);

	for(let i=0; i<3;i++)
	{
		$('.one_third').eq(i).children().attr('src',data[i].url);
		picture = data;
	}

	});

	$('figcaption > a').click(function(e){
		e.preventDefault();
		console.log('kk'); // ceci est pour vérifier que mon événement fonctionne bien, si c'est le cas la console affiche 'kk'

		var content="";
		var indexLi= $('.one_third').length;
		//console.log(indexLi);

		for(let i=increment; i<increment+10; i++)
			{
				//console.log(i);
				var classHtml = "";
				if((indexLi+1)%3 == 0)
				{					
					classHtml = 'lastbox';
				}
				content += '<li class="one_third'+classHtml+'"><img src="'+picture[i].url+'" width="290" height="180" alt=""></li>';
				indexLi++;
			}

		$('#affichephoto').append(content);

		increment += 10;

	})

.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
