/*
7.  Écrire les fonctions "map(f, [x1, x2, ..., xn])" qui étant donnée
    une fonction "f" et un tableau "[x1, x2, ..., xn]", retourne le
    tableau [f(x1), f(x2), ..., f(xn)].

    <  map( function(x){ return x + 1; }, [1,2,3,4,5,6] );
    >  2,3,4,5,6,7
*/


function map(f, tableau) {

  for(var i = 0;i < tableau.length;i++) {
    tableau[i] = f(tableau[i]);
  }
  return tableau;
}

var tab =  map( function(x){ return x + 1; }, [1,2,3,4,5,6] );

for(var i = 0;i < tab.length;i++) {
    console.log(tab[i] + ",");
}
