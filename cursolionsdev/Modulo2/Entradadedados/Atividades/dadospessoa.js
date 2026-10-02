import promptSync from 'prompt-sync';
const prompt = promptSync();

let nome = prompt ("Qual é seu nome?");
let cidade = prompt ("Onde voce mora?");

console.log ("Olá " + nome + ", de " + cidade + "!")