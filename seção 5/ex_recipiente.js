var V = input("V");

//Faltam 7 cm do paralelepípedo que devem ser preenchidos
//O volume da seção do paralelepípedo composta por esses 7 cm
//é de: 4 x 3 x 7 = 84 cm^3
var volume_a_preencher = 84;

//O número de bolas é determinado pela razão entre
//o volume a ser preenchido e o volume de uma única bola.
//Estamos usando a função teto (ceil) pois é possível
//que V não seja um divisor de volume_a_preencher
var num_bolas = Math.ceil(volume_a_preencher / V);

output(num_bolas);
