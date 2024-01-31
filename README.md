Olá! Apresento meu portfólio, inspirado na experiência do VScode.

![Preview](https://private-user-images.githubusercontent.com/142760312/301278740-36eb1e4d-f783-4fa4-84a1-2bcf5dda2dd5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3Mjg3MTIsIm5iZiI6MTcwNjcyODQxMiwicGF0aCI6Ii8xNDI3NjAzMTIvMzAxMjc4NzQwLTM2ZWIxZTRkLWY3ODMtNGZhNC04NGExLTJiY2Y1ZGRhMmRkNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEzMVQxOTEzMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYmJlYTIzYjYyODRhMGQ4MWRlYzQzYjZhZDhiZmI0MTIzN2IwMDhlMDMwNjNlZGRiN2I1NDQ3NDNkZGNlODM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uMDItnNQbp_E-MPaCy7wxWW03sCwAeCzOth2ef3AZ8o)

Desenvolvido com React, meu portfólio se integra dinamicamente à API do GitHub, utilizando filtragem por tópicos para exibir projetos específicos e utilizando também um algoritmo para sortear os repositórios com base na quantidade de estrelas, assim eliminando a necessidade de atualizações manuais e garantindo uma organização adequada por relevância.

Para garantir uma navegação suave, adotei o react-router-dom, permitindo transições fluidas entre as seções, sem carregamentos desnecessários.

Destaco, ainda, o elemento canvas no herói principal, onde você encontrará um divertido jogo da snake. Utilize as teclas de seta para participar dessa interação única!

Destaco a inclusão de um formulário de contato funcional, implementado com fetch AJAX e método POST, proporcionando uma experiência eficiente sem a necessidade de sair da página. Adicionei um captcha usando o react-google-recaptcha para proteger contra spams e bots.

Fique à vontade para compartilhar sugestões ou melhorias!





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
