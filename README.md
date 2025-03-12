# Code Test eSapiens

Este projeto é uma aplicação de listagem de produtos com funcionalidades como **scroll infinito**, **filtro de preço**, **busca por nome**, **PWA (Progressive Web App)** e **testes unitários** implementados. Foi desenvolvido utilizando **React.js**, **TypeScript**, **Vite**, **Tailwind CSS** e **Vitest**.

# Link do deploy no github pages

https://doubty.github.io/code-test-esapiens/

## Funcionalidades

- **Exibição de produtos**: A lista de produtos é exibida com suas imagens, nome, descrição e preço.
- **Scroll infinito**: Carregamento de novos produtos conforme o usuário rola para baixo.
- **Busca por nome**: Filtro de produtos através do nome.
- **Filtro de preço**: Filtro de produtos dentro de uma faixa de preço definida.
- **PWA**: A aplicação é uma Progressive Web App (PWA), permitindo ser instalada e usada offline.
- **Testes unitários**: Testes foram implementados utilizando o framework Vitest.

---

## 🛠 Tecnologias Usadas

- **React.js** - Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Vite** - Build tool moderna e de alto desempenho.
- **Tailwind CSS** - Framework CSS para estilização rápida e personalizada.
- **Vitest** - Framework de testes para aplicações em JavaScript/TypeScript.
- **PWA** - Progressive Web App, para que o app possa ser instalado e usado offline.

---

## 🚀 Como Configurar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente.

2. Instale as dependências do projeto utilizando o npm ou yarn:

npm install ou yarn install

3. Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

npm run dev ou yarn dev

4. Para rodar os testes, use o seguinte comando:

npm run test ou yarn test

5. Se quiser gerar os arquivos de build para produção, use o comando:

npm run build ou yarn build

## 📝 Considerações Finais

O projeto é altamente modular e pode ser facilmente estendido para incluir mais funcionalidades, como a adição de mais filtros, detalhes de produtos, ou até integração com uma API real.
Testes adicionais podem ser adicionados para cobrir mais componentes e funcionalidades, garantindo a qualidade e a confiabilidade do código.

## 📂 Estrutura do Projeto

Aqui está a estrutura do projeto para referência:

```bash
/code-test-esapiens
|-- /public              # Arquivos públicos, como ícones, imagens, etc.
|-- /src                 # Código fonte da aplicação
|   |-- /api             # Funções de API (simulação dos dados de produtos)
|   |-- /components      # Componentes React
|   |   |-- /ProductCard # Componente para exibir o card de produto
|   |-- /assets          # Arquivos de estilo e imagens
|   |-- App.tsx          # Componente principal
|   |-- main.tsx         # Arquivo de entrada da aplicação
|   |-- /setupTests.ts   # Configuração de testes
|-- /tests               # Testes unitários
|   |-- /ProductCard.test.tsx
|-- package.json         # Dependências e scripts do projeto
|-- vite.config.ts       # Configurações do Vite
|-- README.md            # Documentação do projeto
´´´

```
