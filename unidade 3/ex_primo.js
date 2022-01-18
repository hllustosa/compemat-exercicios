var n = input("n");
var divisor = 2;
var metade = n / 2.0;
var primo = true;

while (divisor <= metade) {
  if (n % divisor == 0) {
    primo = false;
    break;
  }
  divisor = divisor + 1;
}

if (primo) {
  output("primo");
} else {
  output("composto");
}
