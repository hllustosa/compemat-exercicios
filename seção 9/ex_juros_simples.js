var C = input("C");
var t = input("t");

//Fórmula dos juros simples: J = C.i*t
//i=0.5% ou 0.005
var juros = C*0.005*t;
var montante = C + juros;

//Saída
output(montante);