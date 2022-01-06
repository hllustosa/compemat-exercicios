var X = input("X");
var Y = input("Y");
var Z = input("Z");
var W = input("W");
var T = input("T");

//Calculando nota da empresa X
var melhor_nota = X[0]*3 + X[1]*5 + X[2]*2;
var melhor_empresa = "X";

var nota_Y = Y[0]*3 + Y[1]*5 + Y[2]*2;
var nota_Z = Z[0]*3 + Z[1]*5 + Z[2]*2;
var nota_W = W[0]*3 + W[1]*5 + W[2]*2;
var nota_T = T[0]*3 + T[1]*5 + T[2]*2;

if(nota_Y > melhor_nota){
    melhor_nota = nota_Y;
    melhor_empresa = "Y";
}

if(nota_Z > melhor_nota){
    melhor_nota = nota_Z;
    melhor_empresa = "Z";
}

if(nota_W > melhor_nota){
    melhor_nota = nota_W;
    melhor_empresa = "W";
}

if(nota_T > melhor_nota){
    melhor_nota = nota_T;
    melhor_empresa = "T";
}

output(melhor_empresa);