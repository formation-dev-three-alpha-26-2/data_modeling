function creerLivre(titre, auteurs, prix, genre, nombreDePages, description) {
  return {
    titre: titre,
    auteurs: auteurs,
    prix: prix,
    genre: genre,
    nombreDePages: nombreDePages,
    description: description,
  };
}

var livre1 = creerLivre(
  "Harry Potter à l’école des sorciciers",
  " J.K. Rowling",
  24.99,
  "fantasie",
  500,
  "un bon livre",
);
var livre2 = creerLivre(
  "Roméo et Juliette",
  "William Shakespeare",
  34.99,
  "romance",
  300,
  "livre",
);
var livre3 = creerLivre(
  "Structure et interprétation des programmes informatiques",
  "Gerald Jay Sussman",
  54.99,
  "programmation",
  700,
  "un bon livre",
);

function afficherLivre(livre) {
  return (
    livre.titre +
    " , par" +
    livre.auteurs +
    " " +
    livre.prix +
    " DT " +
    livre.genre
  );
}

var livres = [livre1, livre2, livre3];

function afficherTousLesLivres(livres) {
  var result = "";

  for (var i = 0; i < livres.length; i++) {
    result = result + i + "- " + afficherLivre(livres[i]) + "\n";
  }

  console.log(result);
}

function correspondLivre(recherche, livre) {
  return (
    livre.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    livre.description.toLowerCase().includes(recherche.toLowerCase()) ||
    livre.auteurs.toLowerCase().includes(recherche.toLowerCase())
  );
}

function rechercherLivres(recherche, livres) {
  var result = [];

  for (var i = 0; i < livres.length; i++) {
    if (correspondLivre(recherche, livres[i])) {
      result.push(livres[i]);
    }
  }

  return result;
}
//    ==> nouveau tableau 
function supprimerLivre(titre, livres) {  
  var result = [];

  for (var i = 0; i < livres.length; i++) {
    if (livres[i].titre !== titre) {
      result.push(livres[i]);
    }
  }

  return result;
}




////// films


function creerFilm(titre, realisateur, duree, acteurs, note) {

return {

    titre : titre , 
    realisateur : realisateur , 
    duree : duree , 
    acteurs : acteurs , 
    note : note


}

}


function afficherFilm(film) {
  return (
    film.titre +
    " , par" +
    film.realisateur +
    " " +
    film.duree +
    " " +
    film.note
  );
}


function afficherCasting(film) {
var result = ""
for (var i = 0; i < film.acteurs.length; i++) {
    
result = result + film.acteurs[i].acteur + " " + film.acteurs[i].role + "\n"
}
console.log(result);
}


let film1 = creerFilm("interstaller" , "Christopher Nolan" , 90 , 2014 , [
 { nom :  "Matthew McConaughey" , role :  "cooper" }  , { nom :  "Jessica" , role :  "murph"}
] , "studio" , "resum" , 9 )

let film2 = creerFilm("inception" , "Christopher Nolan" , 90 , 2014 , [
 { nom :  "amine" , role :  "role" }  , { nom :  "manar" , role :  "murph"}
] , "studio" , "resum" , 7 )


var films = [film1 , film2]

function    afficherTousLesFilms(films) {
  var result = "";

  for (var i = 0; i < films.length; i++) {
    result = result + i + "- " + afficherFilm(films[i]) + "\n";
  }

  console.log(result);
}


function moyenneDuree(films) {
var somme = 0
 for (var i = 0; i < films.length; i++) {
somme+= films[i].duree
 }
 return somme/ films.length
}



function moyenneNote(films) {
    var somme = 0
 for (var i = 0; i < films.length; i++) {
somme+= films[i].note
 }
  return somme/ films.length

}


function correspondFilm(recherche, film) {
  return (
    film.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    film.realisateur.toLowerCase().includes(recherche.toLowerCase())
  );
}

function rechercherFilms(recherche, films) {
  var result = [];

  for (var i = 0; i < films.length; i++) {
    if (correspondFilm(recherche, films[i])) {
      result.push(films[i]);
    }
  }

  return result;
} 
