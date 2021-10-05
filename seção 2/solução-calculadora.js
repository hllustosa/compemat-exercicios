var n1 = input("n1");
var n2 = input("n2");
var operacao = input("operacao");

if(operacao == "+"){
  output(n1+n2);  
} else if (operacao == "-"){
  output(n1-n2);
} else if (operacao == "*"){
  output(n1*n2);
} else {
  output(n1/n2);
}