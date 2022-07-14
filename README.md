# [Hero-Api](https://hero-api-lilac.vercel.app/)
O hero API é um projeto visando a implementação das melhores práticas de otimização tanto no consumo de uma API quanto em sua exibição 

### Ferramentas
* **React** - Como base
* **SASS** - Para estilização 
* **React-Router** - Para as rotas da aplicação

### Mais Detalhes 
A aplicação foi construída consumindo a API da Marvel, foi utilizado o useReducer para gerenciamento dos  estados complexos e foi criando um Hook para o consumo de APIs 

### Contratempos
A rota para requisições disponibilizadas pela Marvel API entrou em conflito com o método HTTPs tanto no deploy na Netlify quanto na Vercel impossibilitando uma das funcionalidades relacionadas a rolagem das histórias em quadrinhos 

## Home
![Imagem da pagina inicial](https://github.com/NikisGabriel/Hero-Api/blob/main/public/initialBG.png)

## Cards Dinâmicos
![Imagem dos caris obtidos da API](https://github.com/NikisGabriel/Hero-Api/blob/main/public/heroCards.png)

## Paginas Individuais 
![Imagem dos caris obtidos da API](https://github.com/NikisGabriel/Hero-Api/blob/main/public/character.png)

### Auto avaliação 
Foi particularmente um projeto interessante para  desenvolver, pois deu para revisitar conhecimentos que não utilizava a um tempinho como o useReducer, porém o foco total foi no consumo de uma API, fazer requisições mais gerais ou com a adição de filtros como na barra de pesquisa, requisições individuais baseadas nos parâmetros passados e recebidos por URL como nas páginas individuais, e requisições baseadas em ações dos usuários como nas páginas individuais na parte de comics 
