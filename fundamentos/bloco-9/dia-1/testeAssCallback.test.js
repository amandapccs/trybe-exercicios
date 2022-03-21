// o Jest não sabe, por padrão, quando é necessário **esperar o término** da execução de uma função assíncrona.

// Para que o Jest espere a função assíncrona -> utilizar DONE -> uma callback chamada após os testes
const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });