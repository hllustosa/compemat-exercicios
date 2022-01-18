var N = input("N");
var pessoas_restantes = N - 1;

//Probabilidade inicial de um dos
//dois membros do casal ser sorteado
var probabilidade = 2.0 / N;

while (pessoas_restantes > 1) {
  //Combinando a probabilidade da outra pessoa no casal não ser sorteada
  probabilidade = (probabilidade * (pessoas_restantes - 1)) / pessoas_restantes;

  //decrementando o número de pessoas restantes
  pessoas_restantes = pessoas_restantes - 1;
}

output(probabilidade);
