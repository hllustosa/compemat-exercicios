var H = input("H");
var T = input("T");
var N = input("N");

var total = H + T + N;
var probabilidade = H / total + (0.5 * H) / total;

output(probabilidade);
