var ana = input("ana");
var ana_numero = input("ana_numero");
var maria_numero = input("maria_numero");
var total = ana_numero + maria_numero;

if(ana == "par"){
  
  if(total % 2 == 0){
    output("Ana Ganhou");
  } else {
    output("Maria Ganhou");
  }
  
} else {
  
  if(total % 2 == 1){
    output("Ana Ganhou");
  } else {
    output("Maria Ganhou");
  }
}