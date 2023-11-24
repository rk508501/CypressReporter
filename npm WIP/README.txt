A simple Cypress HTML reporter

1. npm install cypress-html-reporter --save
2. Add following to the Cypress config

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,

    setupNodeEvents(on, config) {
      //Generate HTML report
      require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
});

3. A report will be generated under TestReport folder by name Report.html
4. This report can be viewed by launching a server (since browsers block screenshot/video files)
5. To launch a server, simply execute the following in any JS/TS module.

require('cypress-html-reporter/StartServer')()

6. Your report is served at : http://127.0.0.1:5500/

Happy Testing!

