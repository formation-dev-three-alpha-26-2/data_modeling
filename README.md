
# data_modeling

---

# EXERCICES LIVRES

## Réfléchir aux attributs d’un livre

Exemples possibles :
- titre
- auteurs (tableau)
- prix
- genre
- nombreDePages
- description

---

##  Représenter des livres sous forme d’objets

Créer des objets pour :

- Harry Potter à l’école des sorciers (J.K. Rowling)
- Roméo et Juliette (William Shakespeare)
- Structure et interprétation des programmes informatiques (Gerald Jay Sussman, Hal Abelson)
- Ajouter 3 autres livres célèbres

---

## Éviter les répétitions (Principe DRY)

Créer une fonction fabrique :
 Créer un livre
```javascript
function creerLivre(titre, auteurs, prix, genre, nombreDePages, description) {
  // Ton code ici
}
```

Elle doit :
- Prendre les attributs en paramètres
- Retourner un objet représentant un livre

---

##  Affichage lisible d’un livre

Créer une fonction :

```javascript
function afficherLivre(livre) {
  // Ton code ici
}
```

Exemple attendu :
"Harry Potter à l’école des sorciciers, par J.K. Rowling -- fantasy, 24.99 DT"

---

## Tableau des livres

Créer un tableau :

```javascript
let livres = [];
```

Ajouter tous les livres dedans.

---

##  Affichage de tous les livres

Créer une fonction :

```javascript
function afficherTousLesLivres(livres) {
  // Ton code ici
}
```

Elle doit :
- Utiliser afficherLivre
- Numéroter chaque livre
- Séparer par un saut de ligne (\n)

---

##  Recherche de livres

Créer :

```javascript
function correspondLivre(recherche, livre) {
  // Ton code ici
}
```

Elle doit retourner `true` si le livre correspond à la recherche.

Puis :

```javascript
function rechercherLivres(recherche, livres) {
  // Ton code ici
}
```

Décider :
- Quels champs sont recherchés ?
- Sensible à la casse ou non ?
- Recherche au début ou n’importe où ?

---

##  Supprimer un livre

Créer :

```javascript
function supprimerLivre(titre, livres) {
  // Ton code ici
}
```

Elle doit retourner un nouveau tableau sans le livre ayant ce titre.

---

#  EXERCICES FILMS

##  Réfléchir aux attributs d’un film

Exemples :
- titre
- realisateur
- duree
- dateSortie
- acteurs (tableau)
- studios
- resume
- note

Optionnel :
- Tableau d’acteurs sous forme d’objets { acteur, role }
- Récompenses
- Note du public ou des critiques

---

## Créer cinq films

Créer 5 objets films avec ton modèle.

---

##  Fonction fabrique pour films

```javascript
function creerFilm(titre, realisateur, duree, dateSortie, acteurs, studios, resume, note) {
  // Ton code ici
}
```

Elle doit retourner un objet film.

---

## Affichage d’un film

```javascript
function afficherFilm(film) {
  // Ton code ici
}
```

Format lisible similaire à afficherLivre.

---

##  Affichage du casting

```javascript
function afficherCasting(film) {
  // Ton code ici
}
```

Elle doit afficher :
- Le rôle
- Le nom de l’acteur ou actrice

---

##  Tableau des films

Créer un tableau :

```javascript
let films = [];
```

Ajouter tous les films dedans.

---

##  Affichage de tous les films

Créer une fonction :

```javascript
function afficherTousLesFilms(films) {
  // Ton code ici
}
```

Elle doit :
- Utiliser afficherFilm
- Numéroter
- Séparer par \n

---

##  Moyenne de la durée

```javascript
function moyenneDuree(films) {
  // Ton code ici
}
```

Optionnel :

```javascript
function moyenneNote(films) {
  // Ton code ici
}
```

---

##  Recherche de films

```javascript
function correspondFilm(recherche, film) {
  // Ton code ici
}
```

Puis :

```javascript
function rechercherFilms(recherche, films) {
  // Ton code ici
}
```

Adaptée aux champs des films.
