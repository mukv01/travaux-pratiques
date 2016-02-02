/*
4.  Écrire une fonction "effacer(lettre, mot)" qui retourne le mot "mot"
    sans la lettre "lettre". Par exemple:

    <  effacer("a", "toto")
    >  "toto"

    <  effacer("o", "toto")
    >  "tt"
*/

function effacer(lettre,mot) {
  var result = "";
  for(var i = 0;i < mot.length;i++ ){
    var x = mot[i];
    if(lettre !== x){
      result = result + x;
    }
  }
  return result;
}

var a = effacer("t","lettre");
console.log(a);
