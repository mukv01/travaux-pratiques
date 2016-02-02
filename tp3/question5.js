/*
5.  Écrire une fonction "second(tab)" qui trouve le deuxième plus
    petit élément dans le tableau (Array) "tab".

    <  second([3, 4, 2, 1, 4]);
    >  2
*/

function second(tab) {
  var petit1 = 10000000;
  var petit2  = petit1;

  for(var i = 0;i < tab.length;i++) {
    var num = tab[i];
    if(tab[i] < petit1) {
      petit2 = petit1;
      petit1= tab[i];
    }
  }
  return petit2;
}

var a = second([3, 4, 6, 0, 1, 4]);
console.log(a);
