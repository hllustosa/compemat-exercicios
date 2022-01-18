var c = input("c");
var l = input("l");

//Calculando área do terreno
var area_terreno = c * l;

//Calculando tan(30)
var rad_30 = (30.0 * Math.PI) / 180.0;
var tan_30 = Math.tan(rad_30);

//Calculando área da parte de João
var cateto_oposto = l * tan_30;
var area_joao = (cateto_oposto * l) / 2.0;

//Saída
var prc_area_joao = area_joao / area_terreno;

output(prc_area_joao);
