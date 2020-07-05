<h1 align="center">
  SmartEnvios Challenge - 🚛🚚
</h1>

<h2 align="center">
  💻🚛 Aplicação para consulta de fretes
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/allanneto/smartenvios-challenge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/allanneto/smartenvios-challenge">

  <a href="https://github.com/allanneto/smartenvios-challenge/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/allanneto/smartenvios-challenge">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalacao">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

## :rocket: Tecnologias

Esse projeto tem como base as seguintes tecnologias:

- [React](https://reactjs.org)
- [NextJS](https://nextjs.org/)
- [Jest](https://jestjs.io/)

Extras:

- Main Libs
  - [Axios](https://github.com/axios/axios)
  - [Yup](https://github.com/jquense/yup)
  - [Express](https://expressjs.com/pt-br/)
- Estilos
  - [AntDesign](https://ant.design/)
  - [React-Icons](https://react-icons.github.io/react-icons/)
  - [Styled-Components](https://styled-components.com/)
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Softwares
  - [VSCode](https://code.visualstudio.com/)

## 🚚 Projeto

O **SmartEnvios Challenge** é um projeto de teste para uma vaga de Fullstack JS.

O projeto foi desenvolvido de acordo com as instruções contidas no arquivo de base para a aplicação dos testes.

## :computer: Instalação

O **Backend** foi feito com TS e utilizando um banco PostgreSQL.
<br>
Iniciando o backend: <br>

Primeiro cria um container PostgreSQL para o backend:

```bash
docker run --name smart_api -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Feito isso agora instale as dependencias e inicie o backend:

```bash
npm install / yarn install
npm run dev:server / yarn dev:server
```

Deixe o servidor rodando e vamos para o Frontend!

Iniciando o **Frontend** em **ReactJS**:
<br>

```bash
npm install / yarn install
npm run dev / yarn dev
```

Assim que o processo terminar, abra no seu navegador a página `localhost:3000` contendo o Projeto, recomendo que cadastre para ter continuar a utilizar a aplicação.

Preencha as informações dos campos de Cep e informações de volume para prosseguir para o cadastro de usuário, dentro do modal de cadastro preencha as informações para ser redirecionado para o painel de fretes disponíveis 🚚🚚.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by **Allan Neto**
