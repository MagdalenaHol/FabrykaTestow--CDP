const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1100,


  e2e: {
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/'
  },
});
