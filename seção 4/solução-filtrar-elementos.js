var l = input("l");
var n = input("n");
var saida = [];

for(var i = 0; i < l.length; i++) {
  if(l[i] >= n){
    saida.push(l[i]);
  }
}

output(saida);