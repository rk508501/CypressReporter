# CypressReporter
HTML Reporter Generator for Cypress

Add following to the config file:
setupNodeEvents(on, config) {
      require('./ReporterPlugin')(on,config)
}

execute the tests with npx cypress run

once the execution is done, HTML report can be found under TestReport directory at the project root level.

run node ReportServer.js and report will be served at http://127.0.0.1:8080
(have to use a server since the screenshot/video files are blocked by the browsers)

A sample report screenshot: https://github.com/rk508501/CypressReporter/blob/main/assets/Sample_Report.png
