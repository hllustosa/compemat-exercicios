var R = input("R");

//Resolvendo p(n) = 980 - 1680/n para n com p(n) = R:
//R = 980 - 1680/n -> n*(R - 980) = -1680 -> n = -1680/(R - 980)
var n = Math.floor(-1680 / (R - 980));

//Saída
output(n);
