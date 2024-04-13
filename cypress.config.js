const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    /**Configuaração do ambiente de tela*/
    "viewportWidth": 1800,
    "viewportHeight": 1050,
    "defaultCommandTimeout": 10000,
  
    "baseUrl": "http://127.0.0.1:8000/",
    //"specPattern": "cypress/integration/*.js",
      
  
    /**REPORT - Gerando relatório com ALLURE */
      //setupNodeEvents(on, config) {
        //allureWriter(on, config);
        //return config;
    },
   
  
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
    
    
    },
);
