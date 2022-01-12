var theta = input("theta");
var h = input("h");

//1 rad = 1 grau * PI/180.0
var theta_radianos = theta * Math.PI/180.0;

//seno(theta) = cateto oposto/hipotenusa
//cateto oposto = hipotenusa * seno(theta)
var co = h * Math.sin(theta_radianos);

//Saída
output(co);