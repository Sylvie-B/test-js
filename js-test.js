/* demande le chiffre secret */
let secret  = prompt("entrer le chiffre à deviner")

/* demande le nom du joueur */
let name = prompt("Quel est votre pseudo ?");

alert("Bonjour, " + name);

/* demande un chiffre entre 1 et 10 */
let number = prompt("Entre un chiffre de 1 à 10");
console.log(number)

/* compare les 2 chiffres */
if( number === secret){
    alert("Bravo, " + name + ", tu as gagné !");
}


else if(number > secret) {
    let numDeux = prompt("essai avec un chiffre plus petit");

    if (numDeux === secret){
        alert("Bravo, " + name + ", tu as gagné !");
    }

    else{
        alert("Désolé, " + name + ", tu as perdu :(")
    }
}

else {
    let numTrois = prompt("essai avec un chiffre plus grand");

    if (numTrois === secret){
        alert("Bravo, " + name + ", tu as gagné !");
    }
}

