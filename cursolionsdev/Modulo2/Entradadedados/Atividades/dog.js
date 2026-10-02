import PromptSync from "prompt-sync";
const prompt = PromptSync ();

let nome = prompt ("Qual o nome do dogão? ");
let idade = prompt ("Qual a idade do dogão? ")
let peso = prompt ("Qual o peso do dogão? ")

let mensagem = `O ${nome} tem ${idade} anos e ${peso} kilos, ta big o bicho!`

console.log(mensagem);
