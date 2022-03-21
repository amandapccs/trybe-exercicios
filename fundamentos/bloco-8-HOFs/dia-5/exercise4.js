//4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
//Dica: use object destructuring .
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = ({name, bornIn, nationality}) => {
      people.forEach((person) => {
          if (person.bornIn < 2001 && person.nationality === 'Australian') console.log(person.name)
  })
  }
  filterPeople(people);

  //com filter
  const filterPeoplee = (arr) => arr.filter(({ nationality, bornIn }) =>
      nationality === 'Australian'
      && bornIn > 1900 && bornIn <= 2000,
    );

    console.log(filterPeoplee(people))