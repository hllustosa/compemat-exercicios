function fatorial(n) {
  var resultado = 1;
  if (n == 0 || n == 1) {
    return resultado;
  } else {
    for (var i = 2; i <= n; i++) {
      resultado = resultado * i;
    }
    return resultado;
  }
}

var Cx = input("Cx");
var Cy = input("Cy");

//Permutacao com repetição de:
//Será necessário ir 3 vezes para cima e 4 vezes para direita
//Portanto todos os caminhos possíveis (passando por C) podem ser pensandos
//como todas as permutações de caminhos formados por
//3 subidas e 4 idas à direita:
//Exemplos: DDDDUUU, DUDUDUD, etc...
var caminhos = fatorial(7) / (fatorial(4) * fatorial(3));

//Calculando o número de caminhos de A até C
var caminhos_de_a_ate_c =
  fatorial(Cx + Cy - 2) / (fatorial(Cx - 1) * fatorial(Cy - 1));

//Calculando o número de caminhos de C até B
var caminhos_de_c_ate_b =
  fatorial(5 - Cx + 4 - Cy) / (fatorial(5 - Cx) * fatorial(4 - Cy));

//Calculando caminhos que passam por C
var caminhos_que_passam_por_c = caminhos_de_a_ate_c * caminhos_de_c_ate_b;

//Caminhos possíveis: Todos os caminhos menos a combinação
var caminhos_possiveis = caminhos - caminhos_que_passam_por_c;

output(caminhos_possiveis);
