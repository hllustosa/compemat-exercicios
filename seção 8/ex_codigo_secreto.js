var n = input("n");

//É preciso subtrair 1 pois não há espera na primeira tentativa
n = n - 1;

//soma dos finitos termos de uma PG
//sn = a1*(1 - q^n )/(1 - q)
var tempo_total_espera = (60 * (1 - Math.pow(2, n))) / -1.0;

//Calculando tempo total de 30s por digitação
//precisamos do no original pois ocorre digitação mesmo na primeira
var tempo_total_digitacao = 30 * (n + 1);

//Tempo total até acesso
var tempo_total = tempo_total_espera + tempo_total_digitacao;

//Saída
output(tempo_total);
