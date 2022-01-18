var alpha = input("alpha");

//O triângulo descrito no problema é isóseceles
//portanto a distância entre B e P é igual a distância
//entre A e B: 2000.

//O outro triângulo formado por B, P, P' (o ponto em que 
//barco estará mais próximo de P) é um triangulo retângulo
//cuja hipotenusa é BP. Portanto:
var distancia = Math.sin(2*alpha*Math.PI/180.0) * 2000;

output(distancia);