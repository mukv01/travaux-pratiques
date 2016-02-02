/*
8.  Écrire une fonction "fmap([f1,f2,...,fk],x)" qui prend comme arguments un
    tableau de fonctions et un nombre "x", et qui retourne
    le tableau [f1(x), f2(x), ..., fk(x)].

    <  fmap( [Math.sqrt,  function(x){ return x + 1; }], 4 );
    >  2,5
*/

function fmap(fTableau, x) {
  for(var i = 0;i < fTableau.length;i++) {
    fTableau[i] = fTableau[i](x);
  }
  return fTableau;
}

var tab =  fmap([Math.sqrt,  function(x){ return x + 1; }], 4 );

for(var i = 0;i < tab.length;i++) {
    console.log(tab[i] + ",");
}
