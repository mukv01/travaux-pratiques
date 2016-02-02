/*
6.  Écrire une fonction "compose(f,g)" qui prend comme arguments deux
    fonctions à un argument, "f" et "g", et qui retourne leur
    composition "f . g". Exemple:

    <  (compose(Math.sqrt,Math.sqrt))(16);
    >  2
  */

function compose(f,g) {
  return function(x) {
      return f(g(x));
  };
}


var a = (compose(Math.sqrt,Math.sqrt))(81);
console.log(a);
