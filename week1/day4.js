// Moyens

// Créez une fonction estPair(nombre) qui retourne true si le nombre est pair (nombre % 2 === 0), et testez-la.

function estPair(nbr) {
    if (nbr % 2 === 0) {
        return console.log(nbr + " est paire");
    } else {
        return console.log(nbr + " est imapaire");
    }
}

// estPair(7);

// Créez une fonction factorielle(n) qui calcule la factorielle d’un nombre (ex. 5! = 54321) avec une boucle.

// methode 1
function factorielle(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorielle(n - 1)
}

// console.log(factorielle(5));
// methode 2

function factoriel(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i
        // console.log("works");
    }
    return result;
}

// console.log(factoriel(5));

// Créez une fonction maximum(a, b) qui retourne le plus grand des deux nombres avec if.

function maximum(a, b) {
    if (a < b) {
        return b;
    }
    return a;
}

// console.log( maximum(5,9)+ " est grand");

// Difficiles

// Créez une fonction sommeTableau(tableau) qui prend un tableau de nombres et retourne leur somme avec une boucle.
function sommeTableau(tableau) {
    let somme = 0
    for (let i = 0; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }
    return somme;
}

// console.log(sommeTableau([1,2,3,4]));

// Créez une fonction inverserChaine(chaine) qui retourne la chaîne inversée (ex. "abc" → "cba") avec une boucle ou split().

// utilisant une boucle
function inverseChaine(chaine) {
    let result = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
        result = result + chaine[i]
    }
    return result;
}

// console.log(inverseChaine("serve"));

// utilisant split

function inverse(chaine) {
    return chaine.split('').reverse().join('');
}

console.log(inverse("serve"));

// Créez une fonction estPalindrome(chaine) qui vérifie si une chaîne est un palindrome (ex. "radar") et retourne true ou false.
function estPalindrome(chaine) {
    let rev = '';
    let result=false;
    for (let i = chaine.length - 1; i >= 0; i--){
        rev=rev+chaine[i];
    }
    if(chaine===rev){
        result= true;
    }
    return result;
}
console.log(estPalindrome('radar'));