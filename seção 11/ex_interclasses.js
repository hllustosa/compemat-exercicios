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

function Arranjos(n, k) {
  return fatorial(n) / fatorial(n - k);
}

var n = input("n");
var podios_possiveis = Arranjos(n, 3);
output(podios_possiveis);
