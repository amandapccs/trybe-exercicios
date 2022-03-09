function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let newString = ''
  for(let index in string) {
    if(string[index] == 'a') {
      newString+= 1;
    } else if (string[index] == 'e') {
      newString += 2;
    } else if (string[index] == 'i') {
      newString+= 3;
    } else if (string[index] == 'o') {
      newString+= 4;
    } else if (string[index] == 'u') {
      newString+= 5;
    } else {
      newString+= string[index];
    }

  }
  return newString;
}

function decode(string) {
  let newString = ''
  for(let index in string) {
    if(string[index] == '1') {
      newString+= 'a';
    } else if (string[index] == '2') {
      newString += 'e';
    } else if (string[index] == '3') {
      newString+= 'i';
    } else if (string[index] == '4') {
      newString+= 'o';
    } else if (string[index] == '5') {
      newString+= 'u';
    } else {
      newString+= string[index];
    }

  }
  return newString;
}

const techList = (nomeTecnologia, name) => {
  if(nomeTecnologia.length === 0) {
    return 'Vazio!';
  }
  let array = [];
  const sortTech = nomeTecnologia.sort()
  for(let index in sortTech) {
    let object = {
      tech: sortTech[index],
      name: name,
    }
    array.push(object);
  }
  return array;
}
console.log(techList([], 'Lucas'));


const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);
    console.log(parsedCharacter);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  let employee = '';

  for (let index = 0; index < professionalBoard.length; index += 1) {
    const currentEmployee = professionalBoard[index];
    if (currentEmployee.id === id) {
      employee = currentEmployee;
    }
  }

  if(!employee) {
    throw new Error('ID não identificado');
  }
  if(!employee[detail]) {
    throw new Error('Informação indisponível')
  } 

  return employee[detail];

}


module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee };