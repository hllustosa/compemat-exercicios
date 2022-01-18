var doenca = input("doenca");
var habitos = input("habitos");
var sobrepeso = input("sobrepeso");

if (!doenca && !habitos && !sobrepeso) {
  output("muito baixo");
} else if (doenca && habitos && sobrepeso) {
  output("muito alto");
} else if (!doenca && habitos && !sobrepeso) {
  output("baixo");
} else if (!doenca && !habitos && sobrepeso) {
  output("baixo");
} else if (!doenca && habitos && sobrepeso) {
  output("medio");
} else if (doenca && !habitos && !sobrepeso) {
  output("medio");
} else if (doenca && habitos && !sobrepeso) {
  output("alto");
} else if (doenca && !habitos && sobrepeso) {
  output("alto");
}
