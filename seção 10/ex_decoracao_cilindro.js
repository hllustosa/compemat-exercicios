var n = input("n");

//circunferencia do cilindro
// c = 2 * pi * n/pi = 2 * n;
var circunferencia = 2*n;
var hipotenusa = 6 * circunferencia;

//a altura é dada pelo cateto oposto
//tan = cateto oposto/cateto adj => cateto oposto = tan * hipotenusa
var altura = hipotenusa * Math.tan(30.0 * Math.PI/180);

output(altura);