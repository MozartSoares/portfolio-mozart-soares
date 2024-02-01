# Olá! Bem-vindo ao meu Portfólio 🚀

## Visão Geral

Meu portfólio é uma expressão inspirada na experiência do VScode. Desenvolvido com React, ele se conecta dinamicamente à API do GitHub, utilizando filtragem por tópicos para destacar projetos específicos. Além disso, um algoritmo que classifica os repositórios com base nas estrelas, eliminando a necessidade de atualizações manuais e garantindo uma organização por relevância.

## Navegação Suave

Para proporcionar uma experiência de usuário fluida, adotei o `react-router-dom`, permitindo transições suaves entre as seções sem carregamentos desnecessários. Isso permite que os visitantes explorem meu trabalho de forma intuitiva e eficiente.

## Elemento Canvas - Jogo da Snake 🐍 ( momentaneamente não disponível em dispositivos móveis (touchscreen) )

Destaco um elemento canvas no hero principal do meu portfólio, onde você pode desfrutar de um divertido jogo da Snake. Use as teclas de seta ou awsd para participar dessa interação única, adicionando uma pitada de diversão à sua visita.

## Formulário de Contato Funcional 📬

Destaco a inclusão de um formulário de contato totalmente funcional, implementado com `fetch AJAX` e método `POST`. Isso proporciona uma experiência eficiente, permitindo que os visitantes entrem em contato sem a necessidade de sair da página. Para garantir a segurança, integrei um captcha usando o `react-google-recaptcha`, protegendo contra spams e bots.

![image](https://github.com/MozartSoares/portfolio-mozart-soares/assets/142760312/3650b38f-d508-4ea0-8f01-329327b41289)

Sinta-se à vontade para compartilhar suas sugestões ou ideias de melhorias! Seu feedback é valioso. 🌟


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
