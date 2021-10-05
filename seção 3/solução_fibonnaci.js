var n = input("n");

if(n == 1) {
  output(0);
} else if (n == 2) {
  output(0);
  output(1);
} else {
  
  var penultimo = 0;
  var ultimo = 1
  var count = 0;
  
  while(count < n) {
    output(penultimo);
    var copia_penultimo = penultimo;
    penultimo = ultimo;
    ultimo = ultimo + copia_penultimo;
    count = count + 1;
  }
  
}