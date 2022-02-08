//Criar algoritmo que retorne fatorial de 10.
//exemplo: 4! = 4 x 3 x 2 x 1 = 24
/*
- Usar estrutura de repetição for
- Colocar inicial a 1, verificação em <= 10, condição de loop ++
- Criar variável para armazenar a multiplicação de cada número (mult = 1)
- Dentro do for loop, colocar mult *= index -> cada vez que index for multiplicado ele será armazenado em multi*/

// multi = 1;
// for (let index = 1; index <= 10; index++) {
//     multi *= index;
    
// }
// console.log(multi);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//Criar for loop ao contrário, iniciando index por index = word.length -1
//Depois a verificação será se index chegou ao primeiro caracter: >= 0;
//Atualização de -- para voltar
//Criar variável para armazenar valor invertido

// let word = 'tryber';
// let invertido = "";
// for (let index = word.length -1; index >= 0; index--) {
//     invertido += word[index];

// }
// console.log(invertido)

//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
//Criar for loop para olhar dentro da array, em cada um dos elementos
//Agora criar if dentro do for -> Se array[index] > array[0] -> console.log('BiggestWord = array[index])
//Se array[index] < array[0] -> console.log('SmallestWord = array[index])
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let LongestWord = array[0];
// let SmallestWord = array[0];
// for (let index = 0; index < array.length; index+= 1) {
//     if (array[index].length > LongestWord.length) {
//         LongestWord = array[index];
//     } 
//     if (array[index].length < SmallestWord.length) {
//         SmallestWord = array[index];
//     } 
// }
// console.log(LongestWord)
// console.log(SmallestWord)

//- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
//Fazer for loop que tenha inicio em 0 e verificação em 50, que incremente de 1 em 1
//Colocar apenas números primos dentro da array prime -> se numero % 1 e ele mesmo -> arrPrime.push(i)
let numbers = [];

for (let index = 0; index <= 50; index++) {
    numbers.push(index)
    for (let index2 = 2; index2 < numbers.length; index2++) {
        if (numbers[index] % index2 === 0)
        
        
    }
    
}
console.log(numbers)

