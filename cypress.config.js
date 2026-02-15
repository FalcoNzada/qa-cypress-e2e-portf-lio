// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', 
    setupNodeEvents(on, config) { },
  },
  // CONFIGURAÇÃO DO RELATÓRIO
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Pasta onde os arquivos serão salvos
      overwrite: false,
      html: false, // Desativamos o HTML individual para gerar um único depois
      json: true,
    }
});