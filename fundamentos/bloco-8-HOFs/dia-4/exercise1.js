//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const reduceArray = arrays.reduce((acc, element) => acc.concat(element), []); //adiciona primeiro 0, depois 1, depois 2?
console.log(reduceArray)

const reduceSpread = arrays.reduce((acc, element) => [...acc, ...element]);
console.log(reduceSpread);

const reduce = arrays.reduce((acc, element) => acc.push(element.reduce((acc2, element2) => `${acc2} ${element2}`)), [])
console.log(reduce);