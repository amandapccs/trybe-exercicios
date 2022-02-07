//EXERCÍCIO 
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

const a = 10;
const b = 5;

console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const numero1 = 1;
const numero2 = 2;

if (numero1 > numero2) {
    console.log('A constante numero1 é maior que numero2')
} else {
    console.log('A constante numero2 é maior que numero1')
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const n1 = 19;
const n2 = 21;
const n3 = 6;

if (n1 > n2 && n1 > n3) {
    console.log('A constante n1 é maior que n2 e n3')
} else if (n2 > n1 && n2 > n3) {
    console.log('A constante n2 é maior que n1 e n3')
} else {
    console.log('A constante n3 é maior que n1 e n2')
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const whatAmI = -9;

if (whatAmI > 0) {
    console.log('positive')
} else if (whatAmI < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const angle1 = 90;
const angle2 = 60;
const angle3 = -10;

const sumAngles = angle1 + angle2 + angle3;

const anglesArePositive = angle1 > 0 && angle2 > 0 && angle3 > 0;

// if (anglesArePositive === true) {
//     if (sumAngles === 180) {
//         console.log(true);
//     } else if (sumAngles !== 180) {
//         console.log(false);
//     }
// } else {
//     console.log('Error: invalid number')
// }

if (anglesArePositive === true && sumAngles === 180) {
    console.log(true);
} else if (anglesArePositive === true && sumAngles !== 180) {
    console.log(false)
} else if (anglesArePositive !== true) {
    console.log('Error: invalid number')
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let chessPiece = "QUEEN";

switch(chessPiece.toLowerCase()) {
    case "bishop":
        console.log('diagonals');
        break;
    case "queen":
        console.log('all sides');
        break;
    case "horse":
        console.log('walks in L');
        break;
    default:
        console.log('not a chess piece');
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let grade = 101;
// if (grade < 100 && grade >= 90) {
//     console.log('Grade A')
// } else if (grade < 100 && grade >= 80) {
//     console.log('Grade B')
// } else if (grade < 100 && grade >= 70) {
//     console.log('Grade C')
// } else if (grade < 100 && grade >= 60) {
//     console.log('Grade D')
// } else if (grade < 100 && grade >= 50) {
//     console.log('Grade E')
// } else  if (grade < 100 && grade < 50 && grade > 0) {
//     console.log('Grade F')
// } else {
//     console.log('Error, not a grade')
// }

if (grade < 0 || grade > 100) {
    console.log("Erro, nota incorreta!");
  } else if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else if (grade >= 50) {
    console.log("E");
  } else {
    console.log("F");
  }

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if
const number1 = 1;
const number2 = 1;
const number3 = 1;

if ((number1 % 2 == 0) ||  (number2 % 2 == 0) || (number3 % 2 == 0)) {
    console.log('At least 1 number is even')
} else {
    console.log('No even number')
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
if ((number1 % 2 !== 0) ||  (number2 % 2 !== 0) || (number3 % 2 !== 0)) {
    console.log('At least 1 number is odd')
} else {
    console.log('No odd number')
}


//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
const impostoSobreOCusto = 0.2;
const valorCusto = 25;
const valorVenda = 35;
const valorCustoTotal = valorCusto + (valorCusto * impostoSobreOCusto);
const lucro = valorVenda - valorCustoTotal;

console.log(lucro)

if (valorCusto >= 0 && valorVenda >= 0) {
    console.log('O lucro ao vender 1000 produtos será de: ' + lucro * 1000)
} else {
    console.log('Erro: insira número maior que 0 nas variáveis')
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3.000;
const aliquotaINSS1 = 0.08;
const aliquotaINSS2 = 0.09;
const aliquotaINSS3 = 0.11;
const aliquotaINSS4 = 570.88;
let salarioBase = 

const aliquotaIR = 0;
const aliquotaIR2 = 0.075;
const aliquotaIR3 = 1.5;
const aliquotaIR4 = 2.25;
const aliquotaIR5 = 2.75;

const parcela1 = 0;
const parcela2 = 142.80;
const parcela3 = 354.80;
const parcela4 = 636.13;
const parcela5 = 869.36;

if (salarioBruto >= 1556.94) {
    console.log('Salário base de: ' + salarioBruto - (salarioBruto * aliquotaINSS1) + '. ')
}