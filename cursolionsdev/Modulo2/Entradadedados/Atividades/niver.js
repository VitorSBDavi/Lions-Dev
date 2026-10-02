import PromptSync from "prompt-sync";
const prompt = PromptSync();

let anoatual = 2026; 

let nome = prompt ("Qual o seu nome?");

let idade = parseInt (prompt ("Qual a sua idade?"));

let anonascimento = anoatual - idade;

console.log(`nome: ${nome} nasceu em: ${anonascimento}`);

if (anonascimento === anoatual) {
    console.log("Ainda não fez aniversario hehe");
} else {
    console.log("Ja fez aniversario o bicho véi!!!");
}