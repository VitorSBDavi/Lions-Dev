const notas = [10, 1, 3, 4, 7];
let soma = 0 

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

console.log("A soma das notas é:", soma);

const media = soma / notas.length;
console.log("Portanto a média das notas é:", media);

if (media >=7){
    console.log ("Aprovado!!!");
} else if (media >=5){
    console.log ("Recuperação!!!");
} else {
    console.log ("Reprovado");
}