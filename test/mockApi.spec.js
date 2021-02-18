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
  const apiURL = jest.spyOn(api, 'fetchURL');

  const user = {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Antônio",
      "last": "Britto"
    },
    "location": {
      "street": {
        "number": 2953,
        "name": "Stovnerlia"
      },
      "city": "Hommelstø",
      "state": "Nordland",
      "country": "Brazil",
      "postcode": "6813",
      "coordinates": {
        "latitude": "51.7345",
        "longitude": "121.6569"
      },
      "timezone": {
        "offset": "+2:00",
        "description": "Kaliningrad, South Africa"
      }
    },
    "email": "tunico@bol.com.br",
    "login": {
      "uuid": "8ce84d48-dec8-462e-b90b-882e33d9ff83",
      "username": "tunicao123",
      "password": "1234567890",
      "salt": "4XIzi5nM",
      "md5": "11dfa8b2d1369680b7d3913dc1c58184",
      "sha1": "a9acd32d6e457d43ecf954ce746787e26f1acb6b",
      "sha256": "4602b181943ebd2118c8e0bfcde0d8bef031fc0520ea21e68832cad25936d1ad"
    },
    "dob": {
      "date": "1952-02-29T00:21:20.926Z",
      "age": 69
    },
    "registered": {
      "date": "2018-08-16T19:22:59.932Z",
      "age": 3
    },
    "phone": "38599523",
    "cell": "99382466",
    "id": {
      "name": "FN",
      "value": "29025248617"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/23.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
    },
    "nat": "NO"
  };
  
  test('verifica se o usuário é o tunico', async () => {
    apiURL.mockResolvedValue(user);

    expect(user.gender).toEqual('male');
    expect(user.name.first).toEqual('Antônio');
    expect(user.name.last).toEqual('Britto');
    expect(user.location.country).toEqual('Brazil');
    expect(user.email).toEqual('tunico@bol.com.br');
    expect(user.login.username).toEqual('tunicao123');
    expect(user.login.password).toEqual('1234567890');
  });
});
