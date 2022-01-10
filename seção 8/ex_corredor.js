var m = input("m");
var d = input("d");

//fórmula do termo geral de uma pa
//an = a1 + (n - 1) * r
//resolvendo para n=
//an - a1 = (n - 1) * r
//(an - a1)/r = (n - 1)
//(an - a1)/r + 1 = n
var n = (d*1000 - 3000)/m + 1;

//saída
output(n);