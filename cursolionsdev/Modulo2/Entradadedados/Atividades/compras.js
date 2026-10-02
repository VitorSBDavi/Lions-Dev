import PromptSync from "prompt-sync";
const prompt = PromptSync();

let compras = ["Arroz", "Feijão", "Macarrão", "Carne", "Pao", "Kisuko"];

for (let i = 0; i < compras.length; i++) {
    console.log(`Item: ${compras[i]}`);
}
