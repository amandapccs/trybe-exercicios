//Algoritmos
//Série de comandos encadeados de forma lógica que busca resolver algum problema.

/*
1 - Ir para o quarto;
2 - Abrir guarda-roupas;
3 - Selecionar roupas[blusa listrada colorida, shorts azuis, calçado papete, qualquer sutiã e calcinha];
7 - Fechar guarda-roupas;
8 - Deixar roupas em cima da cama;
9 - Ir para banheiro;
10 - Tirar roupas;
11 - Colocar roupas no cesto de roupas sujas;
12 - Entrar no box do banheiro;
13 - Fechar box do banheiro;
14 - Tomar banho;
15 - Sair do box do banheiro;
16 - Pegar toalha;
17 - Se secar usando toalha;
18 - Abrir gaveta do gabinete do banheiro e pegar desodorante;
19 - Passar desodorante nas axilas;
20 - Guardar desodorante na gaveta do gabinete do banheiro e fechar gaveta;
21 - Ir para quarto;
22 - Vestir roupas;
23 - Ir para banheiro;
24 - Abrir porta do gabinete do banheiro e pegar escova de dentes e pasta de dente;
25 - Escovar os dentes;
26 - Guardar escova e pasta no gabinete e fechá-lo;
27 - Sair de casa;*/

// let fruits = [3, 4, 10, 1, 12];
// let soma = 0;
// for (let index = 0; index < fruits.length; index+= 1) {
//     soma += fruits[index];
// }
// if (soma > 15) {
//     console.log('Maior que 15: ', soma)
// } else {
//     console.log('Menor que 16');
// }

//Criando algoritmos
//1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
//- Adicionar array ao vscode;
//- Fazer for loop
//- Criar variavél para armazenar array[index]
// - Dar console.log() nessa variável
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index++) {
//     const hello = numbers[index];
//     console.log(hello)
    
// }


//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*
- Adicionar array ao vscode;
- Fazer for loop
- Criar variavél fora do for para guardar soma com valor 0;
- Dentro do bloco do for, depois da sua estrutura principal: referenciar variavel e fazer com que ela some ela mesma + numbers[index];
- console.log na variável
*/ 
// let sum = 0;
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
    
// }
// console.log(sum)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*
- Pegar array
- Fazer for loop
- Criar variavél fora do for para guardar soma com valor 0;
- Dentro do bloco do for, depois da sua estrutura principal: referenciar variavel e fazer com que ela some ela mesma + numbers[index];
- Fazer variavel que armazene divisão de summa por numeros.length -> log*/

// let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let summa = 0;
// for (let index = 0; index < numeros.length; index++) {
//     summa += numeros[index];
    
// }
// let media = summa / numeros.length;
// console.log(media)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// - Utilizar código do exercício anterior
// - Usar estrutura condicional if
// - Se media > 20, console.log o que foi pedido; se <, outro log
// if (media > 20) {
//     console.log('Numero > 20');
// } else {
//     console.log('Numero < 20');
// }

const n = 9;
let resultado = 100;
for (let i = 0; i <= n; i+= 1) {
    resultado -= i;
    
}
console.log(resultado)


const game = ["Pedra", "Papel", "Tesoura"];

const random = Math.floor(Math.random() * game.length);
console.log(game[random])