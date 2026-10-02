import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = parseInt(prompt("Digite um número: "));

if (numero === 0) {console.log("O número é 0.");}

else if (numero % 2 === 0) {console.log("O número é ímpar.");}

else {console.log("O número é par.");}