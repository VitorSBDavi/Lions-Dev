//Calcular o bonus RH

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function calcularBonus(cargo, salario) {

    let bonus = 0;

    switch (cargo) {
        case "Estagiario":
            bonus = salario * 0.10;
            break;

        case "Junior":
            bonus = salario * 0.15;
            break;

        case "Pleno":
            bonus = salario * 0.20;
            break;
        default:
            bonus = 0;
            break;
    }

    return bonus;
}

let cargo = prompt("Digite o nivel do cargo (Estagiario/Junior/Pleno): ");
let salario = Number(prompt("Digite o salário atual: R$ "));
let resultado = calcularBonus(cargo, salario);

console.log(`Valor do bônus: R$ ${resultado.toFixed(2)}`);


//Acesso Rápido
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const validarAcesso = (nome, codigo) => {
  return nome.length > 5 && codigo > 1000;
};

const nome = prompt("Digite o nome do usuário: ").trim();
const codigo = Number(prompt("Digite o código do crachá: "));
const acessoPermitido = validarAcesso(nome, codigo);


if (acessoPermitido) {
  console.log("Acesso Concedido");
} else {
  console.log("Acesso Negado");
}



//Acesso Rapido

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const validarAcesso = (nome, codigo) => {
  return nome.length >= 4 && codigo > 1000;
};

const nome = prompt("Digite o nome do usuário: ").trim();
const codigo = Number(prompt("Digite o código do crachá: "));
const acessoPermitido = validarAcesso(nome, codigo);


if (acessoPermitido) {
  console.log("Acesso Concedido");
} else {
  console.log("Acesso Negado");
}


//loja eletronico 

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function selecionarProduto(pedido, codigo) {

    switch (codigo) {

        case 1:
            pedido.produto = "Fone";
            pedido.preco = 100;
            break;

        case 2:
            pedido.produto = "Teclado";
            pedido.preco = 150;
            break;

        case 3:
            pedido.produto = "Mouse";
            pedido.preco = 80;
            break;

        default:
            pedido.produto = "Desconhecido";
            pedido.preco = 0;
            break;
    }

    return pedido;
}

const pedido = {
    nomeCliente: prompt("Digite o nome do cliente: ")
};

console.log("===== LOJA DE ELETRÔNICOS =====");
console.log("1 - Fone");
console.log("2 - Teclado");
console.log("3 - Mouse");

let codigo = Number(prompt("Digite o código do produto: "));

selecionarProduto(pedido, codigo);
console.log(pedido);


//Monitoramento climatico 

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const avaliarTemperaturas = (temperaturas) => {

    let media = (
        temperaturas[0] +
        temperaturas[1] +
        temperaturas[2]
    ) / 3;

    if (media > 30) {

        return "Alerta de Aquecimento";
    } else {
        return "Clima Estável";

    }

};

const temperaturas = [];

let temperatura1 = Number(prompt("Digite a primeira temperatura: "));
let temperatura2 = Number(prompt("Digite a segunda temperatura: "));
let temperatura3 = Number(prompt("Digite a terceira temperatura: "));

temperaturas.push(temperatura1);
temperaturas.push(temperatura2);
temperaturas.push(temperatura3);

let resultado = avaliarTemperaturas(temperaturas);

console.log(resultado);


//Encomenda logistica


import PromptSync from "prompt-sync";
const prompt = PromptSync();

function atualizarStatus(codigo) {

    switch (codigo) {

        case "P":
            return "Pendente de Envio";
        case "E":
            return "Em Rota de Entrega";
        case "C":
            return "Cancelado";
        default:
            return "Status Inválido";
    }

}

const encomenda = {
    id: 1001
};

let codigo = prompt("Digite o status atual (P/E/C): ").toUpperCase();


encomenda.status = atualizarStatus(codigo);

console.log(encomenda);


//Conversor universal de moedas


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const classificarJogador = (pontuacoes) => {

    let total = pontuacoes[0] +
                pontuacoes[1] +
                pontuacoes[2];

    let ultimaPartida = pontuacoes[pontuacoes.length - 1];

    if (total > 200 || ultimaPartida > 90) {

        return "Veterano";
    } else {
        return "Iniciante";
    }

};


const pontuacoes = [];

let partida1 = Number(prompt("Digite os pontos da primeira partida: "));
let partida2 = Number(prompt("Digite os pontos da segunda partida: "));
let partida3 = Number(prompt("Digite os pontos da terceira partida: "));

pontuacoes.push(partida1);
pontuacoes.push(partida2);
pontuacoes.push(partida3);

let classificacao = classificarJogador(pontuacoes);

console.log(`Classificação: ${classificacao}`);


//Gestão de servidor 


import PromptSync from "prompt-sync";
const prompt = PromptSync();

function realizarUpload(servidor, tamanhoArquivo) {
    let espacoNecessario = servidor.espacoOcupado + tamanhoArquivo;
    if (espacoNecessario <= servidor.espacoTotal) {

        servidor.espacoOcupado = espacoNecessario;
        return true;
    } else {
        return false;
    }

}

const servidor = {
    nome: "Servidor Principal",
    espacoTotal: 500,
    espacoOcupado: 200
};

let tamanhoArquivo = Number(prompt("Digite o tamanho do arquivo em GB: "));
let resultado = realizarUpload(servidor, tamanhoArquivo);

if (resultado === true) {
    console.log("Upload aceito com sucesso!");
} else {
    console.log("Upload rejeitado! Espaço insuficiente.");

}

console.log(servidor);



//Roteamento chamados TI

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function rotearChamado(criticidade) {

    switch (criticidade) {

        case 1:
            return "Atendimento Básico";

        case 2:
            return "Equipe Especializada";

        case 3:
            return "Gestão de Crise";

        default:
            return "Criticidade Inválida";
    }

}

const filaAtendimento = [];

let criticidade = Number(prompt("Digite a criticidade do chamado (1, 2 ou 3): "));
let setor = rotearChamado(criticidade);


filaAtendimento.push(setor);

console.log(filaAtendimento);



//Painel de Controle 

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function registrarVenda(saldo, valor) {

    return saldo + valor;

}

function registrarDespesa(saldo, valor) {

    return saldo - valor;

}

const caixa = {
    operador: prompt("Digite o nome do operador: "),
    saldo: 100,
    historicoTransacoes: []
};

let opcao = "";

while (opcao !== "S") {

    console.log("\n===== PAINEL DE CONTROLE =====");
    console.log("V - Registrar Venda");
    console.log("D - Registrar Despesa");
    console.log("S - Sair");

    opcao = prompt("Escolha uma opção: ").toUpperCase();

    switch (opcao) {

        case "V": {

            let valor = Number(prompt("Digite o valor da venda: R$ "));

            caixa.saldo = registrarVenda(caixa.saldo, valor);

            caixa.historicoTransacoes.push("Entrada");

            console.log("Venda registrada com sucesso!");

            console.log(`Saldo atual: R$ ${caixa.saldo.toFixed(2)}`);

            break;
        }

        case "D": {

            let valor = Number(prompt("Digite o valor da despesa: R$ "));

  
            caixa.saldo = registrarDespesa(caixa.saldo, valor);

            caixa.historicoTransacoes.push("Saída");

            console.log("Despesa registrada com sucesso!");

            console.log(`Saldo atual: R$ ${caixa.saldo.toFixed(2)}`);

            break;
        }

        case "S": {

            console.log("Encerrando o sistema...");

            break;
        }

        default: {

            console.log("Opção inválida! Tente novamente.");

            break;
        }

    }

}

console.log("\n===== FECHAMENTO DO CAIXA =====");

console.log(caixa);


