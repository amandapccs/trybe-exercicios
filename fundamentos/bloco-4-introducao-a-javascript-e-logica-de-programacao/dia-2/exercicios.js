// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let eachNumber of numbers) {
//     console.log(eachNumber)
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let total = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     total += numbers[index]
// }
// console.log(total)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//     sum += numbers[i];
// }
// let media = sum / numbers.length;
// console.log(media)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// if (media > 20) {
//     console.log('Valor maior que 20: ' + media)
// } else {
//     console.log('Valor menor que 20: ' + media)
// }

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let biggestNumber = numbers[0];
// for (let i = 0; i < numbers.length; i+= 1) {
//    if (numbers[i] > biggestNumber) {
//        biggestNumber = numbers[i];
//    }
// }
// console.log(biggestNumber)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumbers = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers = numbers[i];
//         console.log(oddNumbers)
//     }
// }

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let lowestNumber = numbers[0];
// for (let i = 0; i < numbers.length; i+= 1) {
//     if (numbers[i] < lowestNumber) {
//         lowestNumber = numbers[i];
//     }
// }
// console.log(lowestNumber)

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let sum = 0;
let numeros = [];

for(index = 1; index < 26; index+= 1) {
    sum = index;
    numeros.push(sum);
}
console.log(numeros);

//Michele:
// for(index = 0; index < 25; index+= 1) {
//     sum = index + 1;
//     numeros.push(sum);

// }
// console.log(numeros)

//Alternativa:
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

////////////////////////

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let division of numbers) {
    division /= 2
    console.log(division)
}