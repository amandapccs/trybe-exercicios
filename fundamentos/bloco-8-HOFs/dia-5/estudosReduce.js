//1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
function flatten() {
    return arrays.reduce((acc, curr) => {
        for (element of curr) {
            acc.push(element);
        }
        return acc;
    }, [])
}
console.log(flatten());

//ou
const flatten2 = () => {
    return arrays.reduce((acc, curr) => {
        return acc.concat(curr);
    }, [])
}
console.log(flatten2());

////////////////////////////////
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function reduceNames() {
  return books.reduce((acc, { author: { name } }, index) => {
    if (index === books.length -1) return `${acc} ${name}.`
    return `${acc} ${name},`
  }, "").trim()
}
console.log(reduceNames());

//3
function averageAge() {
  return books.reduce((acc, { author: { birthYear }, releaseYear }) => {
    const sum = acc + (releaseYear - birthYear);
    return sum
  }, 0) / books.length
}
console.log(averageAge());

//4
function longestNamedBook() {
  return books.reduce((acc, { name }) => name.length > acc.name.length ? name : acc)
}
console.log(longestNamedBook())

//5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, currentName) =>
    acc + currentName.split('')
    .reduce((acc2, letter) => {
      if (letter === 'a' || letter === 'A') return acc2 + 1;
      return acc2;
    }, 0), 0)
}

console.log(containsA())

//6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => {
    const stuObj = {
      name: student,
      average: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length
    }
    return stuObj
  })
}

console.log(studentAverage());