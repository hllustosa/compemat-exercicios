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

var n = input("n");
var fat = fatorial(n);
output(fat);
