const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 700,
  viewportWidth: 1080,


  e2e: {
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/'
  },
});
