var A_unidades = input("A_unidades");
var B_unidades = input("B_unidades");
var A_preco = input("A_preco");
var B_preco = input("B_preco");

//A área do apartamento é de 3,2 * 3,6 = 11,52 m2
//Cada porcelanato tem 0,8^2 = 0.64 m2
//Se dividirmos 11,52/0,64 = 18 peças
var pecas_necessarias = 18;

//Calculando o número máximo de caixas necessárias para cada tipo
var max_caixas_a = pecas_necessarias / A_unidades + 1;
var max_caixas_b = pecas_necessarias / B_unidades + 1;

//Inicializando variáveis.
var melhor_preco = 999999999;
var melhor_qtd_a = 0;
var melhor_qtd_b = 0;

//FORÇA BRUTA: Todas as combinações possíveis
//de números de caixas A e B;
for (var a = 0; a < max_caixas_a; a++) {
  for (var b = 0; b < max_caixas_b; b++) {
    //Verificando se com a configuração de caixas
    //temos o número de peças necessário
    var total_pecas = a * A_unidades + b * B_unidades;
    if (total_pecas >= pecas_necessarias) {
      //Calculando preço
      var preco = a * A_preco + b * B_preco;

      //Se o preço for melhor que menor preço até o momento
      if (preco < melhor_preco) {
        melhor_preco = preco;
        melhor_qtd_a = a;
        melhor_qtd_b = b;
      }
    }
  }
}

//Realizando a saída:
output(melhor_qtd_a);
output(melhor_qtd_b);
