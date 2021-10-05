var texto = input("texto");
var invertido = "";

for(var i = texto.length-1; i >=0 ; i--){
  invertido = invertido + texto[i]
}

if(texto == invertido){
  output("palindromo");  
} else {
  output("texto normal");  
}
