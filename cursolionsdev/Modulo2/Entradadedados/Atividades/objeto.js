//Treino rápido

//Aquecimento
 //Objeto pessoa com nome e idade

const pessoa = {
    nome: "Vitor",
    idade: 26
};

console.log(pessoa);


//Somente o nome

console.log(pessoa.nome);


//Alterar a idade e imprime o valor alterado

pessoa.idade = 27;
console.log(pessoa.idade);


//Add cidade

pessoa.cidade = "Ponta Grossa";
console.log(pessoa);


//Imprime a frase usando template string

console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);


//Objeto produto com nome e preço

const produto = {
    nome: "Teclado",
    preco: 150
};

console.log(`Produto: ${produto.nome} custa R$ ${produto.preco}`);


//Objeto carro com motor e combustivel

const carro = {
    motor: {
        combustivel: "flex"
    }
};

console.log(carro.motor.combustivel);


//Objeto aluno com array de notas

const aluno = {
    notas: [8, 6, 10]
};

console.log(aluno.notas[0]);


//Time com 3 pts

const time = {
    nome: "Alpha",
    pontos: 0
};

time.pontos = time.pontos + 3;

console.log(time.pontos);


//Propriedade inexistente

console.log(pessoa.profissao);



//Complete o codigo

//Cartao de Visita

const contato = {
    nome: "Marina",
    empresa: "LionsDev",
    telefone: "42 99999-0000"
};

console.log(contato.nome, "trabalha na", contato.empresa);

//Atualizando o Perfil

const usuario = {
    nome: "João",
    nivel: 1
};

usuario.nivel = 2;
usuario.premium = true;

console.log(usuario);


//Objeto Aninhado
//(Carro, modelo, motor, combustivel, opcionais)

const carro = {
    modelo: "Uno",
    motor: {
        combustivel: "flex",
        potencia: 85
    },
    opcionais: ["ar", "trava", "vidro"]
};

//Combustivel do motor
console.log(carro.motor.combustivel);

//Segundo opcional
console.log(carro.opcionais[1]);


//Ache o bug//

//Propriedade errada

const produto = {
    nome: "Teclado",
    preco: 150
};

console.log("Preço:", produto.preco);

//Ponto vs colchetes

const pessoa = {
    nome: "Ana",
    cidade: "Ponta Grossa"
};

console.log(pessoa.nome);

console.log(pessoa.cidade);


//Prever a saida//

const jogador = {
    nome: "Kaio",
    pontos: 100,
    ativo: true
};

jogador.pontos = jogador.pontos + 50;
jogador.time = "Alpha";

console.log(jogador.nome);   // (a)
console.log(jogador.pontos); // (b)
console.log(jogador.time);   // (c)
console.log(jogador.ativo);  // (d)


//Escreva do zero//

//Boletim em Objeto

const aluno = {
    nome: "Pedro",
    nota1: 8,
    nota2: 6
};

let media = (aluno.nota1 + aluno.nota2) / 2;

console.log(`-> Aluno: ${aluno.nome} | Média: ${media}`);

//Produtos -> Desafio


const produtos = [
    {
        nome: "Teclado",
        preco: 150,
        estoque: 5
    },
    {
        nome: "Mouse",
        preco: 80,
        estoque: 10
    },
    {
        nome: "Monitor",
        preco: 500,
        estoque: 2
    },
    {
        nome: "Mousepad",
        preco: 50,
        estoque: 4
    }
];

let valorTotal = 0;

for (let i = 0; i < produtos.length; i++) {

    console.log(`${produtos[i].nome} — R$ ${produtos[i].preco} (${produtos[i].estoque} un.)`);

    let valorProduto = produtos[i].preco * produtos[i].estoque;

    valorTotal = valorTotal + valorProduto;

}

console.log(`Valor total em estoque: R$ ${valorTotal}`);
