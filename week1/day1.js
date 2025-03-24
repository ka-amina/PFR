// Faciles
// Déclarez une variable nom avec votre nom et affichez-la dans la console avec console.log(nom).
const name= "amina kara";
console.log(name);
// Créez une constante age avec votre âge et affichez-la.
const age=24;
console.log(age);
// Déclarez une variable estEtudiant avec true si vous êtes étudiant, sinon false, et affichez-la
let estEtudiant= true;
console.log(estEtudiant);
// Moyens
// Créez deux variables numériques a et b, additionnez-les et affichez le résultat.
const a=5;
const b=9;
console.log(a+b);
// Concaténez deux chaînes de caractères (votre prénom et nom) dans une variable nomComplet et affichez-la.
const first_name="amina";
const last_name="kara";
const full_name= first_name.concat(" ",last_name);
console.log(full_name);
// Convertissez la chaîne "10" en nombre avec parseInt() ou Number(), ajoutez-la à un autre nombre, et affichez le résultat.
let chaine="10";
// console.log(chaine);
console.log(parseInt(chaine));
// Créez un tableau fruits avec trois fruits de votre choix et affichez-le.
const arr=["lemon","kiwi","anans"];
console.log(arr);
// Difficiles
// Créez un objet personne avec les propriétés nom, age et ville, puis affichez chaque propriété avec console.log().
const personne ={
    name:"amina",
    age:25,
    ville:"tanzania"
}

console.log("name: ",personne.name);
console.log("age: ",personne.age);
console.log("ville: ",personne.ville);

// Déclarez une variable let compteur = 5, modifiez sa valeur à 10, et affichez-la avant et après la modification.

let number=5;
console.log(number);
number=10
console.log(number);
// Essayez de modifier une constante (ex. const x = 5) et observez l’erreur dans la console.

const nbr=9;
// nbr=16;
// the const can't change its value.