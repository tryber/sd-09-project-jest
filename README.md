## Termos de acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto de Jest Assíncrono e Mocking!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário
- [Boas vindas ao repositório do projeto de Jest Assíncrono e Mocking!](#boas-vindas-ao-repositório-do-projeto-de-jest-assíncrono-e-mocking)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
    - [Revisando um pull request](#revisando-um-pull-request)
- [Como desenvolver](#como-desenvolver)
  - [Code Climate](#code-climate)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)
    - [1 - Crie testes para uma função assíncrona](#1-crie-testes-para-uma-função-assíncrona)
    - [2 - Crie um "Mock" no arquivo test/mockFunctions.spec.js](#2-Crie-um-"Mock"-no-arquivo-test/mockFunctions.spec.js)
    - [3 - Crie um Mock para o retorno da API](#3-Crie-um-Mock-para-o-retorno-da-API)
    - [4 - Crie funções no arquivo test/setupTeardown.spec.js](#4-Crie-funções-no-arquivo-test/setupTeardown.spec.js)
- [Avisos finais](#avisos-finais)

---

# Habilidades

Nesse projeto, você será capaz de:

- Escrever testes para funções assíncronas;
- Aplicar os seus conhecimentos acerca de testes utilizando o Jest;
- "Mockar" funções;
- "Mockar" APIs;

---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto, você irá implementar testes utilizando o **Jest** para verificar se uma série de funções estão funcionando corretamente. Você colocará em prática todo o conteúdo que aprendeu sobre Jest assíncrono e Mocks aplicados a testes em Javascript.

---

## Desenvolvimento

Este repositório contém a estrutura de pastas e arquivos que contém funções que deverão ser testadas por você. Após clonar o projeto e criar sua branch de trabalho, você poderá começar o desenvolvimentos dos testes.

Lembre-se de **não modificar** os arquivos da pasta `src`, o objetivo do projeto é que você trabalhe apenas com a pasta `test`. 

Para testar se os requisitos estão passando, você pode executar os testes na sua máquina com o comando `npm test nome-arquivo.test`. É muito importante que você **não modifique nenhum arquivo da pasta src**. Alterá-los pode fazer com que o seu requisito não passe no avaliador automático.

Lembre-se também de **não modificar** os describes dos tests na pasta `test`. Alterá-los pode fazer com que o seu requisito não passe no avaliador automático.

## Data de entrega

  - Projeto individual.

  - Serão dois dias de projeto.

  - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Instruções para entregar seu projeto:

## Antes de começar a desenvolver

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-project-jest.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-jest`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-jest`
  * Agora, crie uma branch onde você vai guardar os commits do seu projeto

--- 

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

## Depois de terminar o desenvolvimento (opcional)

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`

---

### Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀

---

# Como desenvolver

## Code Climate

Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o `Code Climate`. Para rodar o Code Climate localmente no seu projeto, execute o comando abaixo:

```bash
codeclimate analyze
```

* ⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

---

# Requisitos do projeto

## Lista de requisitos

### 1. Crie testes para uma função assíncrona

Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

### 2. Crie um "Mock" no arquivo test/mockFunctions.spec.js

Crie mock functions no arquivo `test/mockFunctions.spec.js` para que os testes mockados 'sobrescrevam' o código definido na pasta `src`. A idéia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

### 3. Crie um Mock para o retorno da API

Crie um API mock no arquivo `test/mockApi.spec.js` para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

Exemplo de resposta da API randomuser.me:

```js

{
  gender: 'female',
  name: { title: 'Ms', first: 'Deborah', last: 'Hanson' },
  location: {
    street: { number: 1299, name: 'Rochestown Road' },
    city: 'Birr',
    state: 'Wicklow',
    country: 'Ireland',
    postcode: 16223,
    coordinates: { latitude: '26.2451', longitude: '45.2995' },
    timezone: {
      offset: '+5:30',
      description: 'Bombay, Calcutta, Madras, New Delhi'
    }
  },
  email: 'deborah.hanson@example.com',
  login: {
    uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
    username: 'bluewolf366',
    password: 'iverson3',
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
}

```

### 4. Crie funções no arquivo test/setupTeardown.spec.js

Intercale funções entre os testes definidos no arquivo `test/setupTeardown.spec.js`.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
