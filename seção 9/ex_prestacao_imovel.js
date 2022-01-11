var n = input("n");

//Saldo devedor é o total devido menos o pago até o momento
var saldo_devedor = 180000 - 500*(n-1);

//Juros atual (1% sobre o saldo devedor)
var juros = saldo_devedor * 0.01 

//Prestação é composta pelos 500 + juros
var prestacao = 500 + juros;

//Saída
output(prestacao);