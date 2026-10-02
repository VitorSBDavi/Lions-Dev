//Treino Rapido

//Array com 3 frutas

const frutas = ["maçã", "banana", "laranja"];

console.log(frutas);


//Imprimir a segunda fruta

console.log(frutas[1]);

console.log(frutas.length);


//Add manga no fim

frutas.push("manga");

console.log(frutas);


//Add uva no inicio

frutas.unshift("uva");

console.log(frutas);


//Remove o ultimo 

frutas.pop();

console.log(frutas);

console.log("Primeiro:", frutas[0]);
console.log("Último:", frutas[frutas.length - 1]);


const numeros = [4, 8, 15];

let soma = numeros[0] + numeros[1] + numeros[2];

console.log("Soma:", soma);


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


console.log(frutas.includes("banana"));
