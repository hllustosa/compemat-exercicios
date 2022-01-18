var r_p = input("r_p");
var r_cdb = input("r_cdb");

//Cálculo do rendimento mensal poupança
var juros_poupanca = (500 * r_p) / 100;
var rendimento_poupanca = 500 + juros_poupanca;

//Cálculo do rendimento mensal do CDB
var juros_cdb = (500 * r_cdb) / 100;
//Calculo do IR de 4%
var imposto_de_renda_cdb = juros_cdb * 0.04;
var rendimento_cdb = 500 + juros_cdb - imposto_de_renda_cdb;

//Verificando qual a melhor aplicação e realizando a saída
if (rendimento_poupanca > rendimento_cdb) {
  output("poupanca");
  output(rendimento_poupanca);
} else {
  output("cdb");
  output(rendimento_cdb);
}
