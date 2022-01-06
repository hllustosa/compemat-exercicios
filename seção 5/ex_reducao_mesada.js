var internet = input("internet");
var mensalidade = input("mensalidade");
var mesada = input("mesada");

//Calculando o valor total de acréscimo às despesas
var acrescimo = internet*0.2 + mensalidade*0.1;

//calculando a porcentagem de redução
var porcentagem = 100*acrescimo/mesada;

//saída
output(porcentagem);
