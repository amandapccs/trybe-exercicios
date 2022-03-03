// Exercicio 1
// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} - ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   // console.log(`${ifScope} o que estou fazendo aqui? :O`);
// }

// testingScope(true);

// Exercício 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const crescent = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens
// }

// console.log(`Os números ${crescent()} se encontram ordenados de forma crescente!`);

// //feito com .sort()
// const sortOddsAndEvens = array => array.sort((a, b) => a - b);
// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente !`);

//Parte II Exercícios
// const factorial = n => {
//   let product = 1;
//   if(n === 0 || n === 1) {
//     return product;
//   } else {
//     for(let i = n; i >= 1; i -= 1) {
//       product = product * i;
//     }
//     return product;
//   }
// }

// console.log(factorial(0));

//Exercício 2
// const longestWord = (string) => {
//   const splitString = string.split(' ');
//   let longestIs = '';
//   for (let i = 0; i < splitString.length; i += 1) {
//     if (splitString[i].length > splitString[0].length) {
//       longestIs = splitString[i];
//     }
//   }
//   return longestIs;
// }

// console.log(longestWord('Meu nome é Amanda'))

 // Step 2. Use the reduce method
// let longestWord = strSplit.reduce(function(longest, currentWord) {
//   if(currentWord.length > longest.length)
//     return currentWord;
//   else
//     return longest;
// });

// Exercício 3
// const btn = document.getElementById('btn');
// const p = document.querySelector('#p');
// let counter = 1;

// const clickCount = () => {
//   return p.innerHTML = counter++;
// }

// btn.addEventListener('click', clickCount);
// console.log(btn);

// Exercício 4
// const greeting = (string) => `Tryber ${string} aqui!`
// const amandaTryber = greeting('Amanda');
// console.log(amandaTryber);

const tryberX = (string) => {
  let heyTryber = `Tryber x aqui!`
  let heyTryberArr = heyTryber.split(' ')
  for (let i = 0; i < heyTryberArr.length; i += 1) {
    if (heyTryberArr[i] === 'x') {
      heyTryberArr[i] = string;
      // return heyTryberArr.join(' ');
    }
  }
  return heyTryberArr.join(' ');
}

const heyTryber = tryberX('Amanda');
const mainSkills = ['JavaScript', 'HTML', 'CSS', 'Git', 'Flexbox'];

const greetingAndSkills = (string) => `${string} Minhas cinco principais habilidades são: ${mainSkills.join(', ')}; #goTrybe`

console.log(greetingAndSkills(heyTryber));