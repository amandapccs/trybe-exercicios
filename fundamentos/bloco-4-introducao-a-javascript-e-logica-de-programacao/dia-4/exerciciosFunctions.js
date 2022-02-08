//1- Criar função que retorne true se palavra for um palindromo
function verificaPalindrome(word) {
    let palindrome = '';
    for(let index = word.length - 1; index >= 0; index-= 1) {
        palindrome += word[index]
    }
    if (word === palindrome) {
        return true;
    }
    return false
}


console.log(verificaPalindrome('arara'))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numbers = [2, 3, 6, 7, 10, 1];
function returnHighestIndex(array){
    let highestIndex = 0;
    for(let index in array) {
        if(array[index] > array[0]) {
        highestIndex = index;
        }
    }
    return highestIndex;
}
console.log(returnHighestIndex(numbers))

//3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
numeros = [2, 4, 6, 7, 10, 0, -3];
function returnLowestIndex(array){
    let lowestIndex = 0;
    for(let index in array) {
        if(array[index] < array[0]) {
        lowestIndex = index;
        }
    }
    return lowestIndex;
}
console.log(returnLowestIndex(numeros))

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function findBiggestName(arrayOfNames) {
    let biggestName = '';
    for(let index in arrayOfNames) {
        if (arrayOfNames[index].length > biggestName.length)
        biggestName = arrayOfNames[index]
    }
    return biggestName;
}
console.log(findBiggestName(names));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function findHighestOccurrence(array) {
    let quantidades = [];
    let contador = 0;
    for (let index = 0; index < array.length; index++) {
         for (let index2 = 0; index2 < array.length; index2++) {
            if(array[index] === array[index2]) {
                contador+= 1;
            }
            
        }
        quantidades.push(contador)
    }
    console.log(quantidades)
}
console.log(findHighestOccurrence(repeat));


let repeat = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index]; //cria variavel para numeros[index]
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) { //se numeros[index] === numeros[index2] -> contNumero+=1
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  console.log(maisRepetido(repeat));


//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let n = 5;
let sum = 0;

function returnSumOfNumber(number) {
    for(i = 0; i <= number; i+= 1) {
        sum+= i;
    }
    return sum;
}
console.log(returnSumOfNumber(n));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verifyStringEnd(stringWord, stringEnd) {
    stringWord = stringWord.split('');
    stringEnd = stringEnd.split('');
    let isEqual = true;
    for(let index = 0; index < stringWord.length; index += 1) {
        if(stringWord[stringWord.length - stringEnd.length + index] != stringEnd[index]) {
            isEqual = false;
        }
    }
    return isEqual;
}

console.log(verifyStringEnd('trybe', 'be'));