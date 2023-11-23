import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video:true,
    defaultCommandTimeout:1000,
    retries:{
      runMode:2,
      openMode:0
    },
    setupNodeEvents(on, config) {
      require('./ResultPlugin')(on,config)
    },
  },
});
