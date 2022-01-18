//Definindo função para cálculo de lucro
//f(x) = -x^2 + 14x - 45
function Lucro(x) {
  return -x * x + 14 * x - 45;
}

var barraI = input("barraI");
var barraII = input("barraII");
var barraIII = input("barraIII");
var barraIV = input("barraIV");
var barraV = input("barraV");

//Calculando lucros
var barraMaisLucrativa = "barraI";
var maiorLucro = Lucro(barraI);
var lucroBarraII = Lucro(barraII);
var lucroBarraIII = Lucro(barraIII);
var lucroBarraIV = Lucro(barraIV);
var lucroBarraV = Lucro(barraV);

if (maiorLucro < lucroBarraII) {
  maiorLucro = lucroBarraII;
  barraMaisLucrativa = "barraII";
}

if (maiorLucro < lucroBarraIII) {
  maiorLucro = lucroBarraIII;
  barraMaisLucrativa = "barraIII";
}

if (maiorLucro < lucroBarraIV) {
  maiorLucro = lucroBarraIV;
  barraMaisLucrativa = "barraIV";
}

if (maiorLucro < lucroBarraV) {
  barraMaisLucrativa = "barraV";
}

output(barraMaisLucrativa);
