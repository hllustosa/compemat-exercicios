var l = input("l");
var maior = l[0];

for(var i = 1; i < l.length; i++) {
  if(maior < l[i]){
    maior = l[i];
  }
}

output(maior);