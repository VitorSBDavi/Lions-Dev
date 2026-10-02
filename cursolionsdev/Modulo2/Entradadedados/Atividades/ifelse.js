//Margem de Lucro
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let custo = Number(prompt("Digite o custo de produção do lote: R$ "));
let venda = Number(prompt("Digite o valor de venda do lote: R$ "));

let lucro = venda - custo;

if (lucro < 500) {
    console.log("Atenção: Margem de lucro perigosamente baixa");
} else {
    console.log(`Margem de lucro saudável: R$ ${lucro.toFixed(2)}`);
}


//Orçamento de Projetos
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let horas = Number(prompt("Digite a quantidade de horas estimadas: "));
let ong = prompt("O cliente é uma ONG? (sim/nao): ").toLowerCase();

let valorhora = 45;
let valortotal = horas * valorhora;

if (valorTotal > 5000 && ong === "sim") {
    let desconto = valortotal * 0.10;
    let valorfinal = valortotal - desconto;

    console.log(`Valor final com desconto: R$ ${valorfinal.toFixed(2)}`);
} else {
    console.log(`Valor sem desconto: R$ ${valortotal.toFixed(2)}`);
}

//Rendimento de Fundos Imobiliarios
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cotas = Number(prompt("Digite a quantidade de cotas: "));
let dividendo = Number(prompt("Digite o dividendo pago por cota: R$ "));

let rendimento = cotas * dividendo;

if (rendimento >= 100) {
    console.log("Você já tem saldo suficiente para comprar uma nova cota e reinvestir!");
} else {
    console.log(`Rendimento recebido: R$ ${rendimento.toFixed(2)}. Acumule mais para reinvestir.`);
}

//Consumo de Automovel
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let distancia = Number(prompt("Digite a distância percorrida em km: "));
let litros = Number(prompt("Digite a quantidade de combustível consumido em litros: "));

if (litros > 0) {
    let consumo = distancia / litros;

    console.log(`Consumo médio: ${consumo.toFixed(2)} km/l`);

    if (consumo < 10) {
        console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.");
    } else {
        console.log("Consumo dentro do padrão operacional.");
    }
} else {
    console.log("Quantidade de combustível inválida.");
}


//Analise de Risco de Credito Bancario

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salario = Number(prompt("Digite seu salário líquido: R$ "));
let parcela = Number(prompt("Digite o valor da parcela do empréstimo: R$ "));
let restricao = prompt("O cliente possui restrição no nome? (sim/nao): ").toLowerCase();

let limite = salario * 0.30;

if (parcela <= limite && restricao === "nao") {
    console.log("Crédito Aprovado!");
} else {
    console.log("Crédito Negado: Parcela acima do limite ou restrição no CPF");
}


//Gestao de Ponto e Hora Extra

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valorhora = Number(prompt("Digite o valor da sua hora normal: R$ "));
let horasextras = Number(prompt("Digite a quantidade de horas extras trabalhadas: "));

let valorhoraextra = valorhora * 1.5;

let totalhorasextras = valorhoraextra * horasextras;

console.log(`O valor a receber de horas extras este mês é: R$ ${totalhorasextras.toFixed(2)}`);


//Alerta de Reposição de Estoque

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let estoqueAtual = Number(prompt("Digite a quantidade atual do produto: "));
let estoqueMinimo = Number(prompt("Digite a quantidade mínima de segurança: "));

if (estoqueAtual < estoqueMinimo) {
    let quantidadeComprar = estoqueMinimo - estoqueAtual;

    console.log(`Alerta: Estoque baixo! É necessário solicitar a compra de ${quantidadeComprar} unidades`);
} else {
    console.log("Estoque regularizado.");
}


//Calculo de Frete Logistico
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let distancia = Number(prompt("Digite a distância até o cliente em km: "));
let urgente = prompt("A entrega é considerada de risco ou urgente? (sim/nao): ").toLowerCase();

let taxafixa = 20;
let valorKm = 1.50;

let valorfrete = taxafixa + (distancia * valorKm);

if (distancia > 100 || urgente === "sim") {
    valorfrete = valorfrete + 15;
}

console.log(`O custo total do frete é: R$ ${valorFrete.toFixed(2)}`);


//Sistema de Comissao de Vendas
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let vendas = Number(prompt("Digite o valor total das vendas do mês: R$ "));

let comissao;

if (vendas >= 20000) {
    comissao = vendas * 0.05;
} else {
    comissao = vendas * 0.02;
}

console.log(`O valor da comissão é: R$ ${comissao.toFixed(2)}`);


//Multa por Atraso no Condominio

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valorOriginal = Number(prompt("Digite o valor original do condomínio: R$ "));
let diasAtraso = Number(prompt("Digite a quantidade de dias de atraso: "));
let feriado = prompt("O vencimento original caiu em um feriado ou final de semana? (sim/nao): ").toLowerCase();

let valorAtualizado = valorOriginal;

if (diasAtraso > 0 && feriado === "nao") {
    let multa = valorOriginal * 0.02;
    let juros = diasAtraso * 1;

    valorAtualizado = valorOriginal + multa + juros;
}

console.log(`O valor atualizado do boleto é: R$ ${valorAtualizado.toFixed(2)}`);
