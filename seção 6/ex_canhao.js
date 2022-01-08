var D = input("D");
var H = input("H");
var D2 = D*D;

var a = (H/( D2/4.0 - D2/2.0));
var b = -a*D;

output("y = "+a+"x^2 + "+b+"x");