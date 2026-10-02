import PromptSync from "prompt-sync";
const prompt = PromptSync();

let resposta = prompt ("Voce gosta de café? (sim/não)");

let gostaDeCafe; if (resposta === "sim") {gostaDeCafe = true;}
else {gostaDeCafe = false;}
if (gostaDeCafe) {console.log("Que bom! Também gosto de café!");} 
else {console.log("Tudo bem, cada um tem seu gosto!")}; 