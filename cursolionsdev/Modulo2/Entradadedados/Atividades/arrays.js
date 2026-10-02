//Primeiro e ultimo

const cidades = ["Curitiba", "Ponta Grossa", "Londrina", "Maringá"];

let primeira = cidades[0];
let ultima = cidades[cidades.length - 1];

console.log("Primeira:", primeira);
console.log("Última:", ultima);


//Fila do suporte

const fila = ["Ana", "Bruno"];

fila.push("Carla");
fila.unshift("Diego");

//Remove quem esta sendo atendido
fila.shift();

console.log(fila);


//Soma das vendas
const vendas = [120, 340, 85, 200, 90];

let total = 0;

for (let i = 0; i < vendas.length; i++) {
    total = total + vendas[i];
}

console.log("Faturamento:", total);


//Ache o bug //

//Indice fantasma

const nomes = ["Léo", "Mia", "Théo"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


//Busca errada

const frutas = ["maçã", "banana", "uva"];

if (frutas.indexOf("banana") !== -1) {
    console.log("Tem banana!");
} else {
    console.log("Não tem banana.");
}


//Prever a saida//

//Antes e depois

const lista = [10, 20, 30];

lista.push(40);
lista.shift();

console.log(lista);             // (a)
console.log(lista.length);      // (b)
console.log(lista[1]);          // (c)
console.log(lista.includes(10)); // (d)

//Escrevendo do zero
//Maior e Menor

const temperaturas = [22, 30, 18, 27, 15, 33, 21];

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Maior:", maior);
console.log("Menor:", menor);


//Desafio

import PromptSync from "prompt-sync";
const prompt = PromptSync();
const tarefas = [];

//Tarefas cadastradas?
let quantidade = Number(prompt("Quantas tarefas? "));

//Cadastra as tarefas
for (let i = 0; i < quantidade; i++) {
    let tarefa = prompt("Tarefa: ");
    tarefas.push(tarefa);
}

console.log(`-> Você tem ${tarefas.length} tarefas:`);

for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1} - ${tarefas[i]}`);
}


