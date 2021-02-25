const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Primeiro commit

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    // return await answerPhone(true).then(() => {
    //   expect.stringContaining('Oi!');
    // });
    return expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test("ocupado", async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    // return await answerPhone(false).catch(error =>
    //   expect(error).stringContaining('Infelizmente não podemos atender...')
    // );
    return expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
