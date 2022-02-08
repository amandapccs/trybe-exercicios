let repeat = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index]; //cria variavel para numeros[index]
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) { //se numeros[index] === numeros[index2] -> contNumero+=1
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index; //retorna o index do número com maior repetição
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido]; //numeros[2]
  }
  console.log(maisRepetido(repeat));