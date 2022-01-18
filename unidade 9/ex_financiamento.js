var p1 = input("p1");
var p2 = input("p2");

//calculando o valor presente de p1
//VP = VF/(1 + t)^t
var vp1 = p1 / Math.pow(1.01, 1);

//calculando o valor presente de p2
var vp2 = p2 / Math.pow(1.01, 2);

//somando os dois valores presentes
var total = vp1 + vp2;

//Saída
output(total);
