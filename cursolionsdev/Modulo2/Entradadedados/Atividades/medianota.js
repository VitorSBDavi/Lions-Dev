import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nota1 = parseFloat(prompt('notado do aluno 1 ?'))
let nota2 = parseFloat(prompt('notado do aluno 2 ?'))

let medianota = `${nota1}${nota2}`
let calcularmedia = (nota1 + nota2)/2


//console.log(medianota,calcularmedia);
console.log(calcularmedia);

