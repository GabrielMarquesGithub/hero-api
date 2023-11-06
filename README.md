# [Hero-Api](https://fanciful-bunny-93b7f4.netlify.app/)

## Deploy

Você pode acessar a versão implantada deste projeto [aqui](https://fanciful-bunny-93b7f4.netlify.app/).

## Imagens

![Imagem da página inicial do projeto](https://github.com/NikisGabriel/hero-api/blob/main/documents/hero-api.png)
![Imagem principal do projeto](https://github.com/NikisGabriel/hero-api/blob/main/documents/hero-api-cards.png)
![Imagem da página inicial do projeto](https://github.com/NikisGabriel/hero-api/blob/main/documents/hero-api-character.png)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o Node.js e o Git em sua máquina.

## Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/NikisGabriel/hero-api.git
   ```

2. Navegue até a pasta da aplicação:

   ```bash
   cd hero-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- JavaScript
- TypeScript
- Git
- Vite
- React
- Sass
- React Router

## API Externa

Este projeto consome a API externa Poké API para dados dos itens paginados. [Poké API ](https://pokeapi.co/)

## Padrões de Codificação

- **Nomenclatura:**

  - Componentes: Utilizam o padrão PascalCase.
  - Hooks: Seguem o padrão camelCase com o prefixo "use".
  - Funções: Seguem o padrão camelCase.
  - Constantes e variáveis: Seguem o padrão camelCase.
  - Tipos: Seguem o padrão camelCase com o sufixo "Type".

- **Estrutura de Arquivos:**
  - `src`: Contém o código-fonte da aplicação.
    - `assets`: Inclui recursos estáticos como imagens, fontes e estilos.
    - `components`: Reúne componentes React reutilizáveis.
    - `hooks`: Agrupa hooks personalizados do React.
    - `pages`: Mantém as páginas da aplicação.
    - `utils`: Mantém funções utilitárias da aplicação.
    - `types`: Contém tipos definidos em TypeScript.
    - `App.tsx`: O componente raiz da aplicação React, responsável pelo roteamento com React Router.
    - `main.tsx`: Ponto de entrada principal da aplicação, responsável por configurar os principais Providers.
  - `index.html`: A página principal da aplicação.
  - `vite.config.ts`: Configurações do Vite.
  - `tsconfig.json`: Configurações do TypeScript.
  - `documents`: Pasta destinada à documentação do projeto.
  - `package.json`: Arquivo para gerenciamento de dependências e informações do projeto.

## Possíveis Atualizações

Entre as ideias de atualização para o projeto, estão:

- Correções no estado dentro da página de Personagens no ambiente de produção.

## Observações

Este projeto é simplista quanto a sua estrutura, mas tem como enfoque além do trabalho com API’s o emprego de abordagens com `useReducer`. No Hero Api a parte de escolha de design e estilização foi um ponto focal no desenvolvimento.
