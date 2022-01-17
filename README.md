# Teste front-end d1

Teste de conhecimentos em React e seu ecossistema.

Projeto publicado na seguinte url: https://d1-frontend-test.vercel.app

##  Principais tecnologias

- [Next.js](https://nextjs.org)
  Como framework React, pilar do projeto.
- [Styled-components](https://styled-components.com)
  Para estilização.
- [SWR](https://swr.vercel.app/docs/getting-started)
  Para consumo das APIs.


## Algumas Features a mais

- O Site é responsivo, então fique a vontade para testar em diferentes tamanhos de telas de computadores.

- O menu de filtros vem da API, mas é carregado estáticamente então quando a página carrega ele já está carregado.

- O uso da biblioteca SWR para consumo da API dá uma experiencia muito melhor ao usuário, já que após a primeira requisição os dados ficam em cache e são revalidados no background.

- É possível trocar o tema de cores entre light e dark, basta clicar no icone de lua/sol no menu lateral.

- Também há um teste de integração, bem como testes unitários para os componentes.

## Como executar o projeto localmente:

Mas caso queira executar em sua máquina siga os seguintes passos

```bash
# Clone este repositório
git clone https://github.com/DanielSLucas/d1-frontend-test.git

# Entre na pasta do projeto
cd d1-frontend-test

# Instale as depencias do projeto
yarn
# ou
npm i

# Execute o script de ambiente de desenvolvimento
yarn dev
# ou
npm run dev
```

## Testes

A aplicação tem alguns testes automatizados com [cypress](https://www.cypress.io),
para executá-los basta executar os scripts:

```bash
  # Para testes de integração
  yarn test

  # Para testes unitários
  yarn test:components
```
