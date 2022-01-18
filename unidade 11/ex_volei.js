/* Explicação da questão

Tomando por exemplo a questão do enem em que n=8.

Iremos calcular todas as duplas possíveis, incluíndo as que tem canhotos.
Primeiros calculando o número de duplas possíveis como todas as 
combinações de 2 jogadores em um total de 8:
Calculando: C_8,2 = 28

Depois que escolhemos a primeira dupla, irão nos restar 6 jogadores. 
Calculamos quantas duplas podemos formar com os 6 restantes.

Calculando: C_6,2 = 15

Fazemos isso sucessivamente para obtermos o número de duplas com 
os 4 restantes: C_4,2 = 6, e com 2 restantes:C_2,2 = 1

Aplicando o príncipio multiplicativo para obter o arranjo total considerando 
o número de duplas que podemos formar em cada caso:
T = 28 x 15 x 6 x 1  = 2520

Porém, quand aplicamos o príncipio múltiplicativo, nós iremos contar 4! vezes 
cada combinação de duplas. Por este motivo nos precisamos dividir o total
possível de arranjos pelo número de arranjos repetivos:
2520 / 24 = 105

Agora, precisamos contar o número de duplas proibidas, isto é, as que têm 2 canhotos. 
Vamos imaginar que formamos a primeira dupla justamente com os dois canhotos,
e vamos escolher as duplas restantes:
Escolha da segunda dupla: C_6,2 = 15
Escolha da terceira dupla: C_4,2 = 6
Escolha da quarta dupla: C_2,2 = 1
Pelo princípio multiplicativo: 15 x 6 x 1 = 90

Porém, ao escolhermos essas três duplas, consideramos uma ordem que não existe. Logo, vamos dividir esse resultado por 3! = 6 (ordenação dessas três duplas formadas).
90 / 6 = 15

Para finalizar, só falta subtrair todas as possibilidades daquelas que são proibidas.
105 - 15 = 90
*/

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

function Combinacoes(n, k) {
  return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

var n = input("n");

//Calculando número de duplas
var duplas = n / 2;
var total_duplas = 1;

//Laço de repetição com decremento em 2
for (var i = n; i >= 2; i = i - 2) {
  total_duplas = total_duplas * Combinacoes(i, 2);
}

var total_duplas_com_canhotos = total_duplas / Combinacoes(n, 2);
var total_duplas_sem_repeticao = total_duplas / fatorial(duplas);
var total_duplas_de_canhotos_sem_repeticao =
  total_duplas_com_canhotos / fatorial(duplas - 1);
var total_duplas_validas =
  total_duplas_sem_repeticao - total_duplas_de_canhotos_sem_repeticao;

//Saída
output(total_duplas_validas);
