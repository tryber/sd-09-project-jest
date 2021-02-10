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
  const apiUrl = jest.spyOn(api, "fetchURL");

  const object = {
    gender: 'male',
    name: { title: 'Ms', first: 'Antônio', last: 'Britto' },
    location: {
      street: { number: 1299, name: 'Rochestown Road' },
      city: 'Birr',
      state: 'Wicklow',
      country: 'Brazil',
      postcode: 16223,
      coordinates: { latitude: '26.2451', longitude: '45.2995' },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi'
      }
    },
    email: 'tunico@bol.com.br',
    login: {
      uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'XKOOGc2x',
      md5: '8cb7b4686f3869247b3ed189de780ea6',
      sha1: 'c24641f415cf36f4494ea4007fb3d77b47a6aad5',
      sha256: 'a7bdd079ead0adf21f30cee5b94e5581a9fa0d5fc8b3c1881dbc864dabc55a80'
    },
    dob: { date: '1965-10-01T06:35:49.694Z', age: 55 },
    registered: { date: '2009-02-11T05:48:39.772Z', age: 11 },
    phone: '021-953-7205',
    cell: '081-160-6277',
    id: { name: 'PPS', value: '0109675T' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/7.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg'
    },
    nat: 'IE'
  };

  test('verifica se o usuário é o tunico', async () => {
    apiUrl.mockResolvedValue(object);
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
