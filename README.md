# 🚀 Cypress E2E Automation Portfolio

Este projeto foi desenvolvido com o objetivo de demonstrar habilidades em **automação de testes E2E (End-to-End)** utilizando **Cypress**, aplicando boas práticas usadas no dia a dia de times de QA.

O projeto cobre fluxos reais de aplicação, validações funcionais e testes negativos, além de integração com pipeline CI/CD via **GitHub Actions**.

---

## 🧪 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome (Relatórios)
- GitHub Actions (CI/CD)

---

## 📌 Cenários automatizados

### 🔐 Login
✅ Login com sucesso  
✅ Login com senha inválida  
✅ Login com campos vazios  
✅ Validação de mensagens de erro  

### 📝 Cadastro
✅ Cadastro de usuário válido  
✅ Validação de campos obrigatórios  
✅ Cadastro com email inválido  

### 🛒 Fluxo de Compra (E-commerce)
✅ Adicionar produto ao carrinho  
✅ Remover produto do carrinho  
✅ Finalizar checkout  
✅ Validar total da compra  

### 🌐 Testes com API
✅ Validação de status code e response body  
✅ Criação de massa via API (quando aplicável)    
✅ Integração UI + API  

---

## 📂 Estrutura do projeto

```bash
cypress/
  e2e/
    login/
    cadastro/
    checkout/
  fixtures/
  support/
    commands.js
    e2e.js ```
⚙️ Pré-requisitos

Antes de iniciar, você precisa ter instalado:

Node.js (versão recomendada 18+)

Git

Visual Studio Code (opcional)

📥 Instalação

Clone o projeto:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git ```

Entre na pasta:

```bash
cd NOME_DO_REPO ```

Instale as dependências:

```bash
npm install ```

▶️ Como rodar os testes
Rodar no modo Headless (terminal)
```bash
npx cypress run ```

Rodar no modo interativo
```bash
npx cypress open ```

📊 Relatórios (Mochawesome)

Após rodar os testes, o relatório será gerado automaticamente em:
```bash
cypress/reports/html/index.html```


Para abrir o relatório:

Vá até a pasta do projeto

Abra o arquivo index.html no navegador

🤖 Pipeline CI/CD (GitHub Actions)

Este projeto possui integração com GitHub Actions, executando os testes automaticamente em:

✅ Push na branch main
✅ Pull Requests

🏆 Boas práticas aplicadas

✔ Uso de seletores estáveis (data-cy)
✔ Commands customizados (support/commands.js)
✔ Separação por módulos (login, cadastro, checkout)
✔ Fixtures para massa de dados
✔ Testes negativos e positivos
✔ Relatórios automatizados
✔ Execução em CI/CD

👨‍💻 Autor

Thales Barbosa
📌 QA / Automação de Testes

🔗 LinkedIn: (adicione aqui seu linkedin)
🔗 GitHub: https://github.com/FalcoNzada



