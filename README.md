🚀 Cypress E2E Automation Portfolio - SauceDemo

Este projeto demonstra a automação de testes End-to-End (E2E) na aplicação SauceDemo, utilizando o framework Cypress.
O objetivo é validar fluxos críticos de negócio aplicando boas práticas de arquitetura e padrões profissionais, como Page Object Model (POM) e Data-Driven Testing.

🧪 Tecnologias e Padrões Utilizados

Cypress → Framework principal de automação E2E

JavaScript (ES6+) → Linguagem utilizada nos testes

Page Object Model (POM) → Organização de páginas para facilitar manutenção

Fixtures (JSON) → Massa de dados reutilizável para testes

Custom Commands → Reutilização de ações repetitivas (ex: login)

Mochawesome Reporter → Relatórios HTML interativos e detalhados

📌 Cenários Automatizados
🔐 Login e Autenticação

Login com sucesso (usuário válido)

Login inválido (senha errada)

Login com campos vazios

Login com usuário bloqueado (locked_out_user)

Validação de logout e bloqueio de sessão

🛒 Fluxo de Compra e Checkout

Adição de produtos ao carrinho

Validação do contador dinâmico do carrinho

Finalização do checkout com sucesso

Preenchimento de dados do comprador e confirmação do pedido

📂 Estrutura do Projeto

Estrutura baseada em organização profissional:

```bash
cypress/
  ├── e2e/                  # Scripts de teste (.cy.js)
  │   ├── login/            # Testes relacionados ao login
  │   ├── checkout/         # Testes relacionados ao fluxo de compra
  │   ├── fluxos/           # Testes adicionais (sessão, segurança, etc)
  │
  ├── fixtures/             # Massa de dados (JSON)
  │   └── user.json
  │
  ├── pages/                # Page Objects (POM)
  │   ├── LoginPage.js
  │   ├── ProductsPage.js
  │   └── CheckoutPage.js
  │
  ├── support/              # Comandos globais e configurações
  │   ├── commands.js
  │   └── e2e.js
  │
  └── reports/              # Relatórios Mochawesome (gerados automaticamente)
cypress.config.js           # Configurações do Cypress
package.json                # Dependências e scripts
```

▶️ Como Rodar o Projeto
✅ Pré-requisitos

Node.js instalado (recomendado versão 18+)

NPM ou Yarn

Editor recomendado: VS Code

📥 Instalação

Clone o repositório e instale as dependências:
```bash
npm install
```

🧪 Executando os Testes
🔹 Modo Interativo (Cypress GUI)
```bash
npm run cypress:open
```

🔹 Modo Headless (Terminal)
```bash
npm run test
```

📊 Relatórios (Mochawesome)

Após executar em modo headless, o projeto gera relatórios automaticamente.

Para gerar o relatório final completo:

```bash
npm run test:report
```


O arquivo HTML final estará disponível em:

cypress/reports/html/mochawesome.html

🧠 Boas Práticas Aplicadas

✔ Organização por pastas (login, checkout, fluxos)
✔ Reutilização de código via Custom Commands
✔ Page Objects para reduzir duplicação de seletores
✔ Dados externos via Fixtures JSON
✔ Relatórios profissionais com evidências

📌 Melhorias Futuras (Roadmap)

 Integração com CI/CD (GitHub Actions)

 Execução paralela de testes

 Integração com Allure Report

 Testes com API + UI combinados

 Implementação de Tags por suíte (@smoke, @regression)

👨‍💻 Autor

Thales Barbosa

🔗 LinkedIn: https://www.linkedin.com/in/thales-de-lima-barbosa

🔗 GitHub: https://github.com/FalcoNzada

