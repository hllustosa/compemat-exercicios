var texto = input("texto");
var c = input("c");
var r = input("r");

var novo_texto = "";

for(var i = 0; i < texto.length ; i++){
  if(texto[i] == c){
    novo_texto = novo_texto + r;
  } else {
    novo_texto = novo_texto + texto[i];
  }
  
}

output(novo_texto);