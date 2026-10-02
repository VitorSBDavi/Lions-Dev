import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = Number(prompt("Qual tabuada você deseja saber?"));
for (let i = 1; i <= 100; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
