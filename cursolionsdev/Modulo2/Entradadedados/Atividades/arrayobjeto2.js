// 1- Carrinho de Compras E-commerce//

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const carrinho = {
    nomeCliente: prompt("Digite o nome do cliente: "),
    assinatura: prompt("Tipo de assinatura (Prime/Padrão): "),
    precos: []
};

let produto1 = Number(prompt("Digite o preço do primeiro produto: R$ "));
let produto2 = Number(prompt("Digite o preço do segundo produto: R$ "));
let produto3 = Number(prompt("Digite o preço do terceiro produto: R$ "));


carrinho.precos.push(produto1);
carrinho.precos.push(produto2);
carrinho.precos.push(produto3);

let total = carrinho.precos[0] +
            carrinho.precos[1] +
            carrinho.precos[2];
let valorFinal = total;

if (total > 200 || carrinho.assinatura === "Prime") {
    carrinho.freteGratis = true;
    console.log("Parabéns! Você ganhou Frete Grátis!");
} else {
    carrinho.freteGratis = false;
    valorFinal = total + 30;
}

console.log(carrinho);
console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);


// 2-Tracker de Atletas Profissionais

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const atleta = {
    nome: prompt("Digite o nome do atleta: "),
    pesoAtual: Number(prompt("Digite o peso atual: ")),
    meta: prompt("Digite a meta (Emagrecimento/Performance): "),
    distancias: [15, 22, 25]
};

let corridaHoje = Number(prompt("Digite a distância corrida hoje em km: "));


atleta.distancias.push(corridaHoje);

//media 3
let media = (
    atleta.distancias[1] +
    atleta.distancias[2] +
    atleta.distancias[3]
) / 3;

//Verifica a meta de emagrecimento (Mounjaro)
if (media > 20 && atleta.meta === "Emagrecimento") {

    atleta.pesoAtual = atleta.pesoAtual - 1;
    atleta.selo = "Meta Atingida";
}

//Performance
if (atleta.meta === "Performance" &&
    corridaHoje > atleta.distancias[2]) {
    atleta.selo = "Novo Recorde Pessoal";
}

console.log(atleta);



//3- Programa de Milhas Aereas

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const cliente = {
    nome: prompt("Digite o nome do cliente: "),
    historico: [
        {
            destino: "São Paulo",
            milhas: 2000
        },
        {
            destino: "Rio de Janeiro",
            milhas: 1500
        }
    ],
    Categoria: "Gold"
};

let destino = prompt("Digite o destino do terceiro voo: ");
let milhas = Number(prompt("Digite a quantidade de milhas acumuladas: "));

const novoVoo = {
    destino: destino,
    milhas: milhas
};

cliente.historico.push(novoVoo);

//Soma 3 milhas
let saldoMilhas =
    cliente.historico[0].milhas +
    cliente.historico[1].milhas +
    cliente.historico[2].milhas;

//Upgrade
if (saldoMilhas > 5000) {
    saldoMilhas = saldoMilhas - 5000;
    cliente.Categoria = "Platinum";

    console.log("Parabéns! Você recebeu o upgrade para Platinum!");

} else {

    cliente.Categoria = "Gold";
    let milhasFaltantes = 5000 - saldoMilhas;

    console.log(`Faltam ${milhasFaltantes} milhas para o upgrade.`);

}

cliente.saldoMilhas = saldoMilhas;

console.log(cliente);


//4- Sistema de Lanchonete Fast Food


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const pedido = {
    nomeCliente: prompt("Digite o nome do cliente: "),
    valorBase: 30,
    quantidade: Number(prompt("Digite a quantidade de lanches: ")),
    ingredientesExtras: []
};

let extra1 = prompt("Digite o primeiro ingrediente extra: ");
let valorExtra1 = Number(prompt("Digite o valor do primeiro extra: R$ "));

let extra2 = prompt("Digite o segundo ingrediente extra: ");
let valorExtra2 = Number(prompt("Digite o valor do segundo extra: R$ "));

pedido.ingredientesExtras.push(extra1);
pedido.ingredientesExtras.push(extra2);

let subtotal = (
    pedido.valorBase +
    valorExtra1 +
    valorExtra2
) * pedido.quantidade;

let valorTotal = subtotal;

if (pedido.ingredientesExtras.length === 2 &&
    pedido.quantidade > 2) {

    let desconto = subtotal * 0.20;
    valorTotal = subtotal - desconto;

}

console.log("Ingredientes extras:", pedido.ingredientesExtras);
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`)
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`)


//5- Sistema de Mentoria Academica


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const projeto = {
    coordenador: "Nicolas Cardoso Motta",
    limiteMaximoVagas: 3,
    areaDeEstudo: "Tecnologia",
    mentores: [
        {
            nome: "Ana",
            areaDeAtuacao: "Tecnologia"
        },
        {
            nome: "Bruno",
            areaDeAtuacao: "Tecnologia"
        }
    ]
};

let nome = prompt("Digite o nome do novo voluntário: ");
let areaDeAtuacao = prompt("Digite a área de atuação: ");

const novoMentor = {
    nome: nome,
    areaDeAtuacao: areaDeAtuacao
};

if (projeto.mentores.length < projeto.limiteMaximoVagas &&
    novoMentor.areaDeAtuacao === projeto.areaDeEstudo) {

    projeto.mentores.push(novoMentor);

    console.log("Mentor cadastrado com sucesso!");

} else {

    projeto.status = "Bloqueado para Inscrições";

}

console.log(projeto);


//6- Sistema de Segurança de Voo / Aeronave Domestica

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const turbina = {
    lado: "Motor Esquerdo",
    status: "Desligado",
    sensores: [25, 60, 50]
};

let temperatura = Number(prompt("Digite a temperatura atual em graus Celsius: "));
let pressao = Number(prompt("Digite a pressão do óleo em PSI: "));
let combustivel = Number(prompt("Digite o nível de combustível em porcentagem: "));

turbina.sensores[0] = temperatura;
turbina.sensores[1] = pressao;
turbina.sensores[2] = combustivel;

if (
    turbina.sensores[2] > 20 &&
    turbina.sensores[1] > 50 &&
    turbina.sensores[0] >= 20 &&
    turbina.sensores[0] <= 90
) {

    turbina.status = "Ligado";

} else {

    turbina.status = "Falha Crítica";
    turbina.bloqueioAtivado = true;
}

console.log(turbina)



//7- Controle de Imigração Governamental


import PromptSync from "prompt-sync";

const prompt = PromptSync();

const passageiro = {
    nome: prompt("Digite o nome do passageiro: "),
    nacionalidade: prompt("Digite a nacionalidade: "),
    estaATrabalho: prompt("Está a trabalho? (sim/nao): ") === "sim",
    documentos: ["Passaporte", "Visto"]
};

let terceiroDocumento = prompt("Digite o terceiro documento apresentado: ");

passageiro.documentos.push(terceiroDocumento);

if (passageiro.nacionalidade !== "Brasil") {

    if (
        passageiro.documentos[1] === "Visto" &&
        passageiro.documentos[2] !== ""
    ) {
        passageiro["Entrada Permitida"] = true;
    } else {
        passageiro["Entrada Permitida"] = false;
    }

} else {

    if (passageiro.documentos[0] === "Passaporte") {
        passageiro["Entrada Permitida"] = true;
    } else {
        passageiro["Entrada Permitida"] = false;
    }

}

console.log(passageiro);


//8- Gestãoo de Eventos para Festival de Musica

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const pacote = {
    nomeEmpresa: prompt("Digite o nome da empresa: "),
    orcamentoTotal: Number(prompt("Digite o orçamento total: R$ ")),
    openBarFechado: false,
    consumoExtras: []
};

let bebida1 = prompt("Digite o nome da primeira bebida importada: ");
let bebida2 = prompt("Digite o nome da segunda bebida importada: ");
let valorBebidas = Number(prompt("Digite o valor total das duas bebidas: R$ "));


pacote.consumoExtras.push(bebida1);
pacote.consumoExtras.push(bebida2);
pacote.orcamentoTotal = pacote.orcamentoTotal - valorBebidas;

if (pacote.orcamentoTotal < 0) {
    pacote.openBarFechado = true;
    pacote["Multa Excedente"] = 500;
}

console.log(pacote);

//9- Diario de Leitura em Aplicativos de Educação Literaria}}

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const aluno = {
    nome: prompt("Digite o nome do aluno: "),
    pontosDeLeitura: 10,
    historicoDias: [
        {
            data: "20/09/2026",
            paginasLidas: 25
        },
        {
            data: "21/09/2026",
            paginasLidas: 30
        }
    ]
};

let dataAtual = prompt("Digite a data de hoje: ");
let paginasLidas = Number(prompt("Digite a quantidade de páginas lidas hoje: "));

const novaLeitura = {
    data: dataAtual,
    paginasLidas: paginasLidas
};

aluno.historicoDias.push(novaLeitura);


let ultimoRegistro = aluno.historicoDias[aluno.historicoDias.length - 1];

if (
    ultimoRegistro.paginasLidas > 50 &&
    aluno.pontosDeLeitura > 0
) {
    aluno.pontosDeLeitura = aluno.pontosDeLeitura * 2;
    ultimoRegistro.data = ultimoRegistro.data + " - Super Leitor!";
} else if (ultimoRegistro.paginasLidas < 10) {
    aluno.pontosDeLeitura = aluno.pontosDeLeitura / 2;
}

console.log(aluno);



//10 - Computadores em Cluster / Nuvem Virtual

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const servidor = {
    nome: "Servidor Principal",
    capacidadeMaximaGigabytes: 500,
    sitesHospedados: [
        {
            dominio: "lionsdev.com.br",
            tamanhoOcupadoGB: 200
        }
    ]
};

let dominio = prompt("Digite o domínio do novo site: ");
let tamanhoGB = Number(prompt("Digite o tamanho do novo site em GB: "));
let espacoTotal = servidor.sitesHospedados[0].tamanhoOcupadoGB + tamanhoGB;


if (espacoTotal <= servidor.capacidadeMaximaGigabytes) {

    const novoSite = {
        dominio: dominio,
        tamanhoOcupadoGB: tamanhoGB
    };

    servidor.sitesHospedados.push(novoSite);
    console.log("Upload Concluído! Sistema Operacional");

} else {
    servidor.alertaSobrecarga = true;
    console.log("Falha: Falta de Espaço Físico. Cancele o deploy");
}

console.log(servidor);


