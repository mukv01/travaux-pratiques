/*
3.  Écrire une fonction "longueur(mot)" qui calcule la longueur de son
    argument "mot". Par exemple:

    <  longueur("ala");
    >  3
*/

function longueur(mot) {
    return mot.length;
}


var l = longueur("les etudiants");

console.log(l);

l = longueur("Hello world");

console.log(l);
