import PromptSync from "prompt-sync";
const prompt = PromptSync();

let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;
let mediaPares = 0;
let mediaImpares = 0;

for (let numero = 0; numero <= 999; numero++) {
  if (numero % 2 === 0) {
    somaPares += numero;
    totalPares++;
  } else {
    somaImpares += numero;
    totalImpares++;
  }
}

mediaPares = somaPares / totalPares;
mediaImpares = somaImpares / totalImpares;

console.log("Soma dos números pares: " + somaPares);
console.log("Soma dos números ímpares: " + somaImpares);

console.log("Total de números pares: " + totalPares);
console.log("Total de números ímpares: " + totalImpares);

console.log("Média dos números pares: " + mediaPares);
console.log("Média dos números ímpares: " + mediaImpares);

if (somaPares > somaImpares) {
  console.log("A soma dos números pares foi maior.");
} else if (somaImpares > somaPares) {
  console.log("A soma dos números ímpares foi maior.");
} else {
  console.log("As somas são iguais.");
}
