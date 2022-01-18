var texto = input("texto");
var c = input("c");
var count = 0;

for (var i = 0; i < texto.length; i++) {
  if (texto[i] == c) {
    count = count + 1;
  }
}

output(count);
