var s = input("s");

//Contagem começa em 0 porntanto s é o termo s + 1 da pg
var n = s + 1;

//enésimo termo de uma pg:
//an = a1 . q^(n - 1)
var an = 1 * Math.pow(2, n - 1);

//saída
output(an);
