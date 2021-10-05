var n = input("n");
var count = 0;
var soma = 0;

while(count <= n) {
  soma = soma + count;
  count = count + 2;
}

output(soma);