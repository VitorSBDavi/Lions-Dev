import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Qual sua idade: "));

let idade = 20
if (idade >18) {
    console.log("Acesso permitido");
}