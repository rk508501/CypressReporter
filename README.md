# CypressReporter

This project is used for generating a HTML report for the Cypress tests (Ver. 13.5 and above)

## Installation
Clone [https://github.com/rk508501/CypressReporter.git](https://github.com/rk508501/CypressReporter.git)

Do a npm install
```bash
npm install
```

## Usage
As of now three things a user can configure i.e. title of the test report, logo appearing next to the test report title and port at which the report server will be hosted.
A reportconfig.json sample can be found at https://github.com/rk508501/CypressReporter/blob/main/reportconfig.json

Add the following to the cypress.config(js/ts) file
```python
setupNodeEvents(on, config) {
  require('./ReporterPlugin')(on, config)
}
```

Once all the tests are executed, a HTML file will be generated under TestReport folder (at the project root level)

In order to view the report, launch a web server using the ReporterServer.js module. The embedded screenshot/video links from the tests are blocked from opening by a browser hence a server is required for hosting these static files.

```python
node ReporterServer.js
```
The HTML report can be viewed at http://127.0.0.1:8080 (or the custom port specified via reportconfig.json)

A sample report screenshot can be found here:

[Sample Report Screenshot](https://github.com/rk508501/CypressReporter/blob/main/assets/Sample_Report.png)


## Contributing

Pull requests are welcome. For major changes, please open an issue first.
to discuss what you would like to change.

Email at ruku508501@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
