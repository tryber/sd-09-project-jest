const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  const requestValue = {
    gender: 'male',
    name: { title: 'Mr', first: 'Antônio', last: 'Britto' },
    location: {
      street: { number: 9974, name: 'North Street' },
      city: 'Navan',
      state: 'Laois',
      country: 'Brazil',
      postcode: 84165,
      coordinates: { latitude: '20.2608', longitude: '-39.2911' },
      timezone: {
        offset: '+11:00',
        description: 'Magadan, Solomon Islands, New Caledonia'
      }
    },
    email: 'tunico@bol.com.br',
    login: {
      uuid: '99ff8a7d-cd43-4e1c-a825-e53fd9a04333',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'X2ro6gVP',
      md5: '1f6bd396c76c0b7fa4592316d326603f',
      sha1: '9de4561cb6320a2e6ad4b946cb7c1e0e1b69eeec',
      sha256: 'fbd1f591d9883c061e0491a2ada096f30b68a1ab3c56046f2c00b72d28d77c95'
    },
    dob: { date: '1964-04-22T22:09:11.764Z', age: 57 },
    registered: { date: '2006-01-31T09:57:09.713Z', age: 15 },
    phone: '061-560-3222',
    cell: '081-986-9405',
    id: { name: 'PPS', value: '8021882T' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/96.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/96.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/96.jpg'
    },
    nat: 'IE'
  }

  api.fetchURL = jest.fn().mockResolvedValue(requestValue);

  test('verifica se o usuário é o tunico', async () => {
    return api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    });
  });
});
