# CypressReporter

This project is used for generating a HTML report for the Cypress tests (Ver. 13.5 and above)

## Installation
Clone [https://github.com/rk508501/CypressReporter.git](https://github.com/rk508501/CypressReporter.git)

Do a npm install
```bash
npm install
```

## Usage
Add the following to the cypress.config(js/ts) file
```python
setupNodeEvents(on, config) {
  require('./ReporterPlugin')(on, config)
}
```

Once all the tests are executed, a HTML file will be generated under TestReport folder (at the project root level)

In order to view the report, launch a web server using the ReporterServer.js module. 

```python
node ReporterServer.js
```
The report can be viewed at http://127.0.0.1:8080

A sample report screenshot can be found here:

[Image of a sample report screenshot](https://github.com/rk508501/CypressReporter/blob/main/assets/Sample_Report.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first.
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
