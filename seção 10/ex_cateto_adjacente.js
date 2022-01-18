var theta = input("theta");
var h = input("h");

//1 rad = 1 grau * PI/180.0
var theta_radianos = (theta * Math.PI) / 180.0;

//cos(theta) = cateto adjacente/hipotenusa
//cateto adjacente = hipotenusa * seno(theta)
var ca = h * Math.cos(theta_radianos);

//Saída
output(ca);
