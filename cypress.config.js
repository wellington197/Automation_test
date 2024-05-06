/// <reference types="@shelex/cypress-allure-plugin" />


const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
//import allureWriter from "@shelex/cypress-allure-plugin/writer";


module.exports = defineConfig(
  
  {
      projectId: "o98qf6",


      "reporter": "mochawesome",
      "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
      },

     
  
  e2e: {

        /**REPORT - Gerando relatório com ALLURE */
        setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
     
         },



    /**Configuaração do ambiente de tela*/
    "viewportWidth": 1800,
    "viewportHeight": 1050,
    "defaultCommandTimeout": 10000,
  
    "baseUrl": "http://127.0.0.1:8000/",
    //"specPattern": "cypress/integration/*.js",
      
  

   
  
    /**Urls das páginas */
    env: { 
      // Adicione mais URLs conforme necessário

      login_url: '/wp-login',
       
    }, 
  
  
      hideCredentials: true, //serve para não vazar access token
      requestMode: true, //Tenha feedback visual ao executar request
      //experimentalRunAllSpecs: true, // Permite executar todos os testes de uma única vez.    
     // integrationFolder:true, // Cria arquivos de testes de integração
      fixturesFolder: false, //não executa pasta fixture
      video: false, //não cria os vídeos na pasta
    
  },//Fim do e2e
}); //Fim do Module exports
