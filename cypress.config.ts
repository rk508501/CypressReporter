import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video:true,

    setupNodeEvents(on, config) {
      require('./ResultPlugin')(on,config)
    },
  },
});
