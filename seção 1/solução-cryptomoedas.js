//Fazendo a entrada das variáveis cotacao e valor
var cotacao = input('cotacao');
var valor = input('valor');

//Calculando o produto das variáveis
var valor_convertido = cotacao * valor;

//Formatando string adicionando o prefixo R$
var resultado = "R$ "+valor_convertido;

//Fazendo a saída do resultado
output(resultado);