var somente_estuda = input("somente_estuda");
var trabalha_estuda = input("trabalha_estuda");
var somente_trabalha = input("somente_trabalha");
var nao_trabalha_nao_estuda = input("nao_trabalha_nao_estuda");

//Número total de jovens pesquisados
var total_pesquisa = 363000;

//Calculo dos total de jovens que trabalham
var total = (total_pesquisa * (trabalha_estuda + somente_trabalha)) / 100.0;

//Realizando a saída
output(total);
