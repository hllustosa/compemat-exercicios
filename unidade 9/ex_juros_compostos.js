var C = input("C");
var t = input("t");

//Fórmula dos juros compostos: M = C.(1+i)^t
//i=0.5% ou 0.005
var montante = C * Math.pow(1.005, t);

//Saída
output(montante);
