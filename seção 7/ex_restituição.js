var L = input("L");
var E = input("E");
var N = input("N");

//Posição em relação
//às pessoas de mesma idade
var posicao = N - L;

//Numero de pessoas ainda na fila
var restantes = E;

//Probabilidade acumulada
var probabilidade = 1;

for(var i = 1; i <= posicao; i++){

    if(i == posicao) {
        //Multiplicando pela probabilidade de João não ser o iésimo
        //escolhido 
        probabilidade = probabilidade * 1.0/restantes;
    } else {
        //Multiplicando pela probabilidade de João não ser o
        //iésimo escolhido 
        probabilidade = probabilidade * (restantes - 1)/(restantes);
    }

    //Decrementando número de pessoas na fila
    restantes = restantes - 1;
}

//saída
output(probabilidade);