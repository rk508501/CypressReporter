import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video:true,
    defaultCommandTimeout:1000,
    retries:{
      runMode:1,
      openMode:0
    },
    setupNodeEvents(on, config) {
      require('./ReporterPlugin')(on,config)
    },
  },
});
