var a = input('a');
var b = input('b');
var c = input('c');


if(a == b && b == c){
  output("equilatero");
} else if (a == b || b == c || a == c) {
  output("isosceles");
} else {
  output("escaleno");
}