🚀 Cypress E2E Automation Portfolio - SauceDemo
Este projeto demonstra a aplicação de automação de testes End-to-End (E2E) no site SauceDemo, utilizando o framework Cypress. O objetivo é validar fluxos críticos de negócio aplicando padrões de arquitetura profissional como o Page Object Model (POM) e Data-Driven Testing.

🧪 Tecnologias e Padrões Utilizados
Cypress: Framework principal de automação.

JavaScript (ES6+): Linguagem base para os scripts.

Page Object Model (POM): Organização de elementos e ações por página para facilitar a manutenção.

Fixtures: Utilização de arquivos JSON para massa de dados de teste.

Custom Commands: Comandos personalizados para ações repetitivas como Login.

Mochawesome: Geração de relatórios interativos em HTML.

📌 Cenários Automatizados
🔐 Login e Autenticação
Login com sucesso: Validado via comandos customizados e via POM.

Testes Negativos: Validação de senha inválida, campos vazios e usuário bloqueado (locked_out_user).

Segurança: Garantia de que o acesso às áreas internas é bloqueado após o Logout.

🛒 Fluxo de Compra e Checkout
Gerenciamento de Carrinho: Adição de produtos e validação do contador dinâmico.

Checkout Completo: Preenchimento de informações de envio e confirmação final da compra com sucesso.

📂 Estrutura do Projeto
Abaixo, a organização das pastas baseada no padrão implementado:

cypress/
  ├── e2e/                 # Scripts de teste (.cy.js)
  │   ├── login/           # Testes de checkout e login
  │   ├── Fluxos/          # Fluxos de segurança e sessao
  ├── fixtures/            # Massa de dados (user.json)
  ├── pages/               # Page Objects (LoginPage.js, ProductsPage.js)
  ├── support/             # Commands.js e configurações globais
cypress.config.js          # Configurações do Cypress e Reporter
package.json               # Dependências e scripts de execução

▶️ Como Rodar os Testes
Pré-requisitos
Node.js instalado.

Instalação das dependências: npm install.

Execução dos Testes
Modo Interativo (UI):

Bash

npm run cypress:open
Modo Headless (Terminal):

Bash

npm run test
📊 Relatórios de Teste (Mochawesome)
Este projeto gera automaticamente relatórios visuais após a execução. Para gerar o relatório completo unido (Merge), utilize:

Bash

npm run test:report
O relatório final em HTML estará disponível em: cypress/reports/html/mochawesome.html.

👨‍💻 Autor: Thales Barbosa
🔗 LinkedIn: https://www.linkedin.com/in/thales-de-lima-barbosa



