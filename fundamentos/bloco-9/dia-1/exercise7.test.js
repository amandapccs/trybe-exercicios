const { test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };


test('Testa função uppercase', (done) => {
  uppercase('amanda', (result) => {
    expect(result).toBe('AMANDA');
    done();
  });
});

test('Testa função uppercase com try/catch', (done) => {
  uppercase('amanda', (result) => {
    try {
      expect(result).toBe('AMANDA');
      done();
    } catch (error) {
      done(error);
    }
  });
});
