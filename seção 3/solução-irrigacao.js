var temperatura = input("temperatura");
var umidade = input("umidade");

if( temperatura == "baixa" && umidade == "alta"){
  output("curto");
} else if( temperatura == "alta" && umidade == "alta"){
  output("medio");
} else if ( temperatura == "baixa" && umidade == "baixa"){
  output("medio");
} else {
  output("longo");
}