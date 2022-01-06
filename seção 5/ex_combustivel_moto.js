var L = input("L");
var C = input("C");

//Calculando quanta gasolina
var qtd_gasolina_ida = C - L*4.2;

//Quanto de gasolina é necessária entre a primeira e segunda paradas
var qtd_gasolina_gasta_ate_volta = L*3.6;

//Mínimo necessário: A diferença entre o necessário para chegar na
//parada de volta, menos o que sobrou no tanque na ida
var necessario = qtd_gasolina_gasta_ate_volta - qtd_gasolina_ida;

output(necessario);