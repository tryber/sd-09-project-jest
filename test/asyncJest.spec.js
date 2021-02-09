const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  
  test("atende", () => {
    const atual = answerPhone(true);
    const expected = 'Oi!';
    expect(atual).resolves.toEqual(expected);
    expect.assertions(1);
    
    // Insira seu teste assíncrono aqui
  });
  test("ocupado", () => {
    const atual = answerPhone(false);
    const expected = 'Infelizmente não podemos atender...';
    expect(atual).rejects.toEqual(expected);
    expect.assertions(1);
  });
});
