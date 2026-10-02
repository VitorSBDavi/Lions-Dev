//Lista de Presença

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const listaAlunos = ["João", "Maria"];

let novoAluno = prompt("Digite o nome do terceiro aluno: ");

listaAlunos.push(novoAluno);

if (listaAlunos.length === 3) {
    console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`);
}


//Baixa no Estoque

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const estoqueTamanhos = [10, 15, 8];
let quantidadeVendida = Number(prompt("Quantas camisetas tamanho P foram vendidas hoje? "));

estoqueTamanhos[0] = estoqueTamanhos[0] - quantidadeVendida;

if (estoqueTamanhos[0] < 5) {
    console.log("Alerta: Estoque de luvas tamanho P está crítico!");
} else {
    console.log(`Estoque atualizado. Quantidade restante do tamanho P: ${estoqueTamanhos[0]}`);
}


//Ficha Medica Veterinaria

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt("Digite o nome do cachorro: ");
let raca = prompt("Digite a raça do cachorro: ");
let idade = Number(prompt("Digite a idade do cachorro: "));


const paciente = {};


paciente.nome = nome;
paciente.raca = raca;
paciente.idade = idade;


if (paciente.idade >= 8) {
    console.log(`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina.`);
} else {
    console.log("Paciente na faixa de idade regular.");
}


console.log(paciente);


//Orçamento de Projetos

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const filaProjetos = [];

let cliente = prompt("Digite o nome da empresa cliente: ");
let valorEstimado = Number(prompt("Digite o valor estimado do projeto: R$ "));

const projeto = {
    cliente: cliente,
    valorEstimado: valorEstimado
};

filaProjetos.push(projeto);

let urgente = prompt("O projeto possui prazo de entrega urgente? (sim/nao): ");
if (urgente === "sim" && filaProjetos[0].valorEstimado > 3000) {

    let taxaExtra = filaProjetos[0].valorEstimado * 0.15;

    filaProjetos[0].valorEstimado = filaProjetos[0].valorEstimado + taxaExtra;

}

console.log(filaProjetos);



//Estaçao de Monitoramento

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const estacao = {
    id: "Sensor-01",
    local: "Laboratório",
    temperaturas: []
};

let temperatura1 = Number(prompt("Digite a primeira temperatura: "));
estacao.temperaturas.push(temperatura1);
let temperatura2 = Number(prompt("Digite a segunda temperatura: "));
estacao.temperaturas.push(temperatura2);
let temperatura3 = Number(prompt("Digite a terceira temperatura: "));
estacao.temperaturas.push(temperatura3);

let media = (
    estacao.temperaturas[0] +
    estacao.temperaturas[1] +
    estacao.temperaturas[2]
) / 3;

if (media > 35) {

    estacao.alerta = true;
    console.log(`PERIGO: Média de temperatura extrema (${media} graus) detectada no ${estacao.local}!`);
} else {

    estacao.alerta = false;
    console.log("Temperaturas dentro da normalidade.");
}

console.log(estacao);


