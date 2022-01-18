var a = input("a");
var b = input("b");
var c = input("c");

//Calculo do determinante
var determinante = b * b - 4 * a * c;

//Se o determinante é positivo
if (determinante > 0) {
  var x1 = (-b + Math.sqrt(determinante)) / (2 * a);
  var x2 = (-b - Math.sqrt(determinante)) / (2 * a);
  output(x1);
  output(x2);

  //Se o determinante for igual a 0
} else if (determinante == 0) {
  var x1 = -b / (2 * a);
  output(x1);

  //Se o determinante é negativo
} else {
  output("sem raizes");
}
