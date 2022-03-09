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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.table(allLessons);
// Bonus
const mathStudents = (object) => {
  const lessons = Object.keys(object);
  let sum = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    if (object[lessons[i]].materia === 'Matemática') {
      sum += object[lessons[i]].numeroEstudantes; //bracket notation foi necessária, pois lessons[i].materia não funciona

    }
  }
  return sum;
}

console.log(mathStudents(allLessons))

console.log(allLessons['lesson1']['materia']);
console.log(allLessons.lesson1.materia);

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

console.log('-----')
console.log(Object.values(allLessons))