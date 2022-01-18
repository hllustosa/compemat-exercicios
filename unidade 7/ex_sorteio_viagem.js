var N30 = input("N30");
var N31 = input("N31");
var N32 = input("N32");
var N33 = input("N33");
var N34 = input("N34");
var N35 = input("N35");

var total = N30 + N31 + N32 + N33 + N34 + N35;

//Probabilidade de eventos dependentes
var probabilidade = ((N34 / total) * (N34 - 1)) / (total - 1);

//saída
output(probabilidade);
