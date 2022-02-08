'use strict'

// * Exercício 1
// !Crie um algoritmo que retorne o fatorial de 10.

// let fat = 1;

// for (let i = 10; i >= 2; i--) {
//     fat *= Number(i)
// };
// console.log(fat);


// * Exercício 2
// !Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.

// let word = 'tryber';
// let inverted = [];

// for (let i = word.length; i >= 1; i--) {
    //     inverted.push(word[i-1]);
    // }
    
    // console.log(inverted.join(''));
    
    
// * Exercício 3
// !Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let arrayLength = array.length
// let biggestWord = '';
// let smallestWord = array[array.length - 1];

// for (let i = arrayLength; i >= 2; i--) {
//     array[i-1].length > array[i-2].length && array[i-1].length > biggestWord.length ? biggestWord = array[i-1] : biggestWord;
//     array[i-2].length > array[i-1].length && array[i-2].length > biggestWord.length ? biggestWord = array[i-2] : biggestWord;
// }

// for (let i = arrayLength; i >= 2; i--) {
//     smallestWord.length < array[i-2].length ? smallestWord : smallestWord = array[i-2];
// }


// console.log(biggestWord);
// console.log(smallestWord);

// * Exercício 4
// !Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// ? Sabemos que 2 e 3 são primos. Sabemos também que do 4 ao 24, conseguimos obter os números primos fazendo uma checagem de resto por 2 e por 3 != 0, que nos retorna os numeros primos 5, 7, 11, 13, 17, 19 e 23.

// ? Podemos pensar então um algoritmo que começa uma checagem a partir do 24.

let maiorNumero = 5098;
let valorReferencia = 24;
let numerosPrimos = [2, 3, 5, 7, 11, 13, 17 ,19, 23];

let checagem = [];

// ? Começaremos testando a variável valorReferencia, que passará por um for loop checando o resto das divisões pelos elementos do array numerosPrimos


for (let i = numerosPrimos.length; i >=1 ; i--) {
    checagem.push(valorReferencia % numerosPrimos[i -1]);
};
console.log(checagem);

// ? Pela regra de numeros primos, se tivermos algum zero dentro do novo array, logo a variavel valorReferencia não será primo e somamos + 1 ao valorReferencia. Se não, adicionaremos o valorReferencia ao array numerosPrimos e adicionaremos + 1 ao valorReferencia

// checagem.includes(0) ? valorReferencia++: numerosPrimos.push(valorReferencia) &&  valorReferencia++;
// console.log(valorReferencia);

// for (let x = maiorNumeroPrimo; x <= maiorNumero; x++) {

//     checagem= [];
// };

// ? Faremos isso por todos números ate chegar no valor da variável maiorNumero, e para sabermos qual maior numero primro, pegaremos o ultimo elemento do array numerosPrimos. Aqui abaixo uma versão mais simplificada do algoritmo.

// for (valorReferencia; valorReferencia <= maiorNumero; valorReferencia++) {
//     for (let i = numerosPrimos.length; i >= 1; i--) {
//     checagem.push(valorReferencia % numerosPrimos[i -1]);
//     }
//     if (!checagem.includes(0)) numerosPrimos.push(valorReferencia);
//     checagem = [];
// }
// console.log(numerosPrimos[numerosPrimos.length - 1]);

// TODO Bonus

// * Exercício Bonus 1
// !Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


// var ast = '*';
// let n = 5;

// console.log(ast.repeat(n));

// for (let i = n; i >= 1; i--) {
//     console.log(ast.repeat(n));
// }


// * Exercício Bonus 2
// !Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// var ast = '*';
// let n = 5;

// console.log(ast.repeat(n));

// for (let i = n; i >= 1; i--) {
//     console.log(ast.repeat(n -(i-1)));
// }
    
// * Exercício Bonus 3
// !Agora inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// var ast = '*';
// var spc = ' ';
// let n = 5;

// console.log(ast.repeat(n));

// for (let i = n; i >= 1; i--) {
//     console.log(spc.repeat((i - 1))+ast.repeat(n -(i-1)));
// }

// console.log(spc.repeat(4));

// * Exercício Bonus 4
// !Depois, faça uma pirâmide com n asteriscos de base:

// var ast = '*';
// var spc = ' ';
// let n = 5;

// console.log(ast.repeat(n));

// for (let i = 1; i <= n; i++) {
//     i % 2 != 0 ? console.log(spc.repeat((n-i)/2)+ast.repeat(i)+spc.repeat((n-i)/2)): n;
// }

// console.log(spc.repeat(4));

// * Exercício Bonus 5
// !Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// var ast = '*';
// var spc = ' ';
// let n = 29;

// console.log(ast.repeat(n));

// for (let i = 1; i <= n; i++) {
    //     i % 2 != 0 && i === n || i === 1? 
    //     // i === n && i === 1 ? 
    //     console.log(spc.repeat((n-i)/2)+ast.repeat(i)+spc.repeat((n-i)/2))
    //     // :
    //     // console.log(ast+spc.repeat(n-i)+ast)
    //     : i % 2 != 0 && i !== n && i !== 1 ?
    //     console.log(spc.repeat((n-i)/2)+ast+spc.repeat(i-2)+ast+spc.repeat((n-i)/2))
//     :
//     n;
// }

// console.log(spc.repeat(4));


// * Exercício Bonus 6
// !Faça um programa que diz se um número definido numa variável é primo ou não.
// !Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// !Dicas : você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

// ? Visto que meu algorítmo do problema 4 da sessão passada já delimita o maior numero dado um intervalo de 24 ate a variável valorFornecido, basta checar se o ultimo numero do array numerosPrimos é igual ao valorFornecido, lembrando sempre de restabelecer o valor do array numerosPrimos para o valor inicial, pensando em possíveis testes com outros valores fornecidos.

let valorFornecido = 5098;
let valorReferencia = 24;
let numerosPrimos = [2, 3, 5, 7, 11, 13, 17 ,19, 23];

let checagem = [];

// ? Essa primeira linha de código checa se a variável valorFornecido é menor que que a variavel valorReferencia e se valorFornecido está contido no array numerosPrimos. Se as duas condições não forem satisfeitas, passaremos para o proximo passo, após o else, que repete o processo já explicitado no exercicio 4 da sessão anterior. Por fim, crio outro condicional if para checar se o valorFornecido está na última posição do numeros primos, o que faz com que ele seja primo.

if (numerosPrimos.includes(valorFornecido) && valorFornecido<valorReferencia) {
console.log(`${valorFornecido} é primo`);
}
else {

    
    for (valorReferencia; valorReferencia <= valorFornecido; valorReferencia++) {
        for (let i = numerosPrimos.length; i >= 1; i--) {
            checagem.push(valorReferencia % numerosPrimos[i -1]);
        }
        if (!checagem.includes(0)) numerosPrimos.push(valorReferencia);
        checagem = [];
    }
    
    if (numerosPrimos[numerosPrimos.length - 1] === valorFornecido) console.log(`${valorFornecido} é primo`);
    else console.log(`${valorFornecido} não é primo`);
}