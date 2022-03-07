const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1
  const addNightTurn = (object, key, value) => {
      const newKey = key;
      object[newKey] = value;
  }

  addNightTurn(lesson2, 'turno', 'noite');
  console.table(lesson2)

//2
  const showKeys = (object) => Object.keys(object);
  showKeys(lesson1);
  console.log(showKeys(lesson1))

//3
  const getObjectLength = (object) => {
      const myObject = Object.keys(object);
      return myObject.length;
  }
  console.log(getObjectLength(lesson1));

//4
const showValues = (object) => Object.values(object);
console.log(showValues(lesson1));

//5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)

//6
const sumStudents = () => {
    return parseInt(allLessons.lesson1.numeroEstudantes) + parseInt(allLessons.lesson2.numeroEstudantes) + parseInt(allLessons.lesson3.numeroEstudantes)
}

console.log(sumStudents())

//7
const getValueByNumber = (obj, index) => {
    const values = Object.values(obj);
    return values[index];
}

console.log(getValueByNumber(allLessons.lesson1, 0));

//8
const verifyKeyValue = (object, key, value) => {
    const keyArray = Object.keys(object);
    const valueArray = Object.values(object);
    if(keyArray.includes(key) && valueArray.includes(value)) {
        return true;
    } else {
        return false;
    }
}

console.log(verifyKeyValue(lesson2, 'materia', 'Matemática'));