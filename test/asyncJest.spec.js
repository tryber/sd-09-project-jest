const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    const result  =  await answerPhone(true).then(resolve => resolve);
    expect(result).toEqual('Oi!');
  });
  test("ocupado", () => {
    const result  =  await answerPhone(false).catch(err => err);
    expect(result).toEqual('Infelizmente não podemos atender...');
  });
});
