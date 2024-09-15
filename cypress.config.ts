import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://tv.test.io/api/v1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
