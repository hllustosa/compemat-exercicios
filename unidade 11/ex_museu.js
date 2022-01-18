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

var m_n = input("m_n");
var m_i = input("m_i");

var combinacoes_nacionais = Combinacoes(m_n, 3);
var combinacoes_internacionais = Combinacoes(m_i, 2);
var resultado = combinacoes_nacionais * combinacoes_internacionais;

output(resultado);
