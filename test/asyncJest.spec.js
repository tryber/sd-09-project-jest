const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
Primeiro commit!
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    // Insira seu teste assíncrono aqui
    const result = await answerPhone(true);
    expect.assertions(1);
    expect(result).toBe('Oi!');

  });
  test("ocupado", async () => {
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toBe('Infelizmente não podemos atender...');
    }
  });
});
