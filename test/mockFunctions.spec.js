const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toEqual(-1);
    expect(mockFunctions.add(8, 37)).toEqual(-29);
    expect(mockFunctions.add(-11, 25)).toEqual(-36);
    expect(mockFunctions.add(13, -188)).toEqual(201);
    expect(mockFunctions.add(7, 26)).toEqual(-19);
  });
  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toEqual(934);
    expect(mockFunctions.subtract(-17, 333)).toEqual(316);
    expect(mockFunctions.subtract(45, 97)).toEqual(142);
    expect(mockFunctions.subtract(23, -108)).toEqual(-85);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-162);
  });
  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toEqual(0.5);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-0.4444444444444444);
    expect(mockFunctions.multiply(-12, -7)).toEqual(1.7142857142857142);
    expect(mockFunctions.multiply(19, 23)).toEqual(0.8260869565217391);
  });
  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(2197);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-9500);
    expect(mockFunctions.divide(42, 7)).toEqual(294);
    expect(mockFunctions.divide(729, 243)).toEqual(177147);
    expect(mockFunctions.divide(1331, 11)).toEqual(14641);
  });
  test('testa função power', () => {
    expect(mockFunctions.power(10, 2)).toEqual(0.1);
    expect(mockFunctions.power(2, 10)).toEqual(0.001953125);
    expect(mockFunctions.power(5, 5)).toEqual(0.0016);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(0);
  });
  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(25);
    expect(mockFunctions.factorial(10)).toEqual(100);
    expect(mockFunctions.factorial(3)).toEqual(9);
    expect(mockFunctions.factorial(8)).toEqual(64);
    expect(mockFunctions.factorial(2)).toEqual(4);
  });
});
