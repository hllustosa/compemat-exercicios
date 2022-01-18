var onibus = input("onibus");
var bicicleta = input("bicicleta");
var dia = input("dia");

//Criando lista vazia para armazenar a resposta
var resposta = [];

//Iterando pelas listas. Todas possuem 6 elementos
//De 0 até 5
for (var i = 0; i < 6; i++) {
  var velocidade_media_onibus = onibus[i];
  var velocidade_media_bicicleta = bicicleta[i];

  //calculando tempos:
  var tempo_onibus = 2.0 / velocidade_media_onibus;
  var tempo_bicicleta = 3.0 / velocidade_media_bicicleta;

  //se o tempo necessário para chegar de bicicleta for menor,
  //então adicionar o dia na resposta
  if (tempo_bicicleta < tempo_onibus) {
    resposta.push(dia[i]);
  }
}

//Realizando a saída da resposta
output(resposta);
