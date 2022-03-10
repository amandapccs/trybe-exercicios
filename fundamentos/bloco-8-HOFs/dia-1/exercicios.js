// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const createPerson = (fullName) => {
    // const lowerCaseName = fullName.toLowerCase();
    // const splitName = lowerCaseName.split(" ");
    // const createEmail = `${splitName.join('_')}@trybe.com`
    const email = fullName.toLowerCase().split(' ').join('_'); //ao invés de criar outras 3 variáveis
    const object = {
        fullName,
        email: email,
    }
    return object;
}

// console.log(createPerson('Amanda Soares'));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(createPerson))

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberGenerator = (bet, functionCheck) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return functionCheck(bet, number);
}

const checkBet = (n1, n2) => {
    if(n1 == n2) {
        return `Parabéns você ganhou`
    }
    if(n1 != n2) {
        return `Tente novamente`
    }
} 

console.log(numberGenerator(5, checkBet))

//Gabarito chique:
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentGrade = (answers, stuAns, callback) => {
    let countGrade = 0;
    for (let i = 0; i < answers.length; i += 1) {
       const compare = callback(answers[i], stuAns[i]); //primeiro loop: gera resposta -> manda pra count //segundo loop: ==
       countGrade += compare;
    }
    return `Seu resultado é: ${countGrade}`
}

const compareTest = (answerKey, studentKey) => {
    if(answerKey === studentKey) {
        return 1;
    }
    if(studentKey === 'N.A') {
        return 0;
    }
    return -0.5;
}

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compareTest));