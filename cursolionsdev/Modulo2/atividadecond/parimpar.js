import PromptSync from "prompt-sync";
const prompt = PromptSync();

const numero = parseInt(prompt("Digite um número: "), 10);

if (Number.isNaN(numero)) {
  console.log("Digite um número válido.");
} else if (numero === 0) {
  console.log("O número é 0!");
} else if (numero % 2 === 0) {
  console.log("O número é PAR!!!");
} else {
  console.log("O número é IMPAR!");
}
