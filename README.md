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
    e2e.js
