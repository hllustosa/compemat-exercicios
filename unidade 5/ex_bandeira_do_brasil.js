var C = input("C");
var L = input("L");

//Calculando o tamanho do módulo
//O comprimento do pano divido por 20
//Pois a bandeira deve ter 20 módulos
//de comprimento
var modulo = C / 20.0;

//Calculando o tamanho do pano para a
//circunferência. A circunferência deve
//ter 3,5 módulos, ou seja, 7 módulos
//de diâmetro.
var tamanho = modulo * 7.0;

//Fazendo a saída do tamanho do pano
output(tamanho);
