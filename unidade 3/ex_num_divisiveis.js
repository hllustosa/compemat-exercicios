var n = input("n");
var divisiveis = 0;
var count = n;

while (count <= 100) {
  divisiveis = divisiveis + 1;
  count = count + n;
}

output(divisiveis);
