var M = input("M");


// Queremos descobrir o valor inicial
// No primeiro mês tivemos perda de 30% ou seja
// (1) valor_mes_1 = valor_inicial - valor_inicial*0.3
// No segundo mês recuperador 20% do que perdemos no primeiro mÊs
// No primeiro mês perdemos valor_inicial*0.3, portanto
// (2) valor_mes_2 = valor_mes_1 + (valor_inicial*0.3)*0.2
// Vamos aplicar (1) em (2) e Lembrando que  M = valor_mes_2
// (3)  M = valor_inicial - valor_inicial*0.3 + (valor_inicial*0.3)*0.2
// Colocando valor_inicial em evidência
// (4) M = valor_inicial*(1 - 0.3 + 0.3*0.2) =>  M = valor_inicial*0.76
// Resolvendo (4) para valor_inicial
// (5) valor_inicial = M/0.76;
var valor_inicial = M/0.76;

//Saída
output(valor_inicial);
