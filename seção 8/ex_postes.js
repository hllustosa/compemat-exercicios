var m = input("m");
var d = input("d");

//fórmula do termo geral de uma pa
//an = a1 + (n - 1) * r
//resolvendo para n=
//an - a1 = (n - 1) * r
//(an - a1)/r = (n - 1)
//(an - a1)/r + 1 = n
var n = (d - 80)/m + 1;

//n = número de postes vezes o preço de 8000 por poste
var total = n * 8000;

//saída
output(total);