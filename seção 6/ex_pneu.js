var i70 = input("i70");
var i74 = input("i74");

//Resolvendo as equações
// (1): i70 = 70*a + c;
// (2): i74 = 74*a + c;
// de (2) chegamos a (3):
// (3): i74 - 74*a = c
// aplicando (3) em (1), temos:
// (4) i70 = 70*a + i74 - 74*a
// resolvendo (4) para a:
// (5) i70 = a(70-74) + i74 = -4a + i74
// (6) (i70 - i74)/-4 = a
var a = (i70 - i74) / -4;

//Resolvendo as equações
// (1): i70 = 70*a + c;
// Resolvendo (1) para c:
// (2): i70 = 70*a + c;
var c = i70 - 70 * a;

//Fazendo a saída;
output("f(i) = " + a + "i + " + c);
