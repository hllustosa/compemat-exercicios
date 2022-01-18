var FI = input("FI");
var FC = input("FC");

//Calculando a probabilidade de
//uma declaração ser fraudulente p(F)
//lembrando que 20% foram consideradas inconsistentes
//portanto 80% foram consideradas consistentes
var prob_fraudulenta = FI * 0.2 + FC * 0.8;

//Calculando a probabilidade condicional de que
//dado que a declaração é fraudulenta, qual a probabilidade dela
//ser classificada como incosistente:
//p(I | F) = p(I ∩ F)/p(F)
//Sendo p(I ∩ F) como a probabilidade dela ser ao mesmo tempo
//fraudulenta e incosistente, ou seja FI*0.2.
var probabilidade = (FI * 0.2) / prob_fraudulenta;

//saída
output(probabilidade);
