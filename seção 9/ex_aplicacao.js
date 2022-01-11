var ib = input("ib");
var ab = input("ab");
var ip = input("ip");
var ap = input("ap");

//Cálculo do rendimento mensal da aplicação básica
var rendimento_basica = 10000 * ib/100;

//Descontando ab reais para obter o valor líquido
var rendimento_basica_liquido = rendimento_basica - ab;

//Cálculo do rendimento mensal da aplicação pessoal
var rendimento_pessoal = 10000 * ip/100;

//Descontando ap % do rendimento líquido
var rendimento_pessoal_liquido = rendimento_pessoal - rendimento_pessoal*ap/100;

//Verificando qual a melhor aplicação e realizando a saída
if(rendimento_basica_liquido > rendimento_pessoal_liquido) {
    output("basica");
    output(rendimento_basica_liquido);
} else {
    output("pessoal");
    output(rendimento_pessoal_liquido);
}


