const fs = require('fs');
const path = require('path');

function readConfig() {
  const configPath = 'reportconfig.json';

  if (fs.existsSync(configPath)) {
    const configFile = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configFile);
  } else {
    return {
      title: 'Automation Test Report',
      logo: 'https://cdn1.iconfinder.com/data/icons/testing-8/128/Set16-02-1024.png'
    };
  }
}

function generateHTMLReport(result, config) {
  const startTime = new Date(result.startedTestsAt).toLocaleString();
  const totalDuration = result.totalDuration / 1000; // convert milliseconds to seconds
  const totalPass = result.totalPassed || 0;
  const totalFail = result.totalFailed || 0;
  const totalSkipped = result.totalSkipped || 0;
  const totalTests = result.totalTests || 0;

  const menubarContent = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="${config.logo}" alt="Logo" class="mr-2" style="height: 30px;">
      <span class="navbar-brand mb-0 h1">${config.title}</span>
    </nav>
    <div class="container mt-3">
      <div class="navbar-text" style="font-size: smaller; color: #888;">
        Time: ${startTime} | Duration: ${totalDuration.toFixed(3)} seconds |
        Passed: ${totalPass} | Failed: ${totalFail} | Skipped: ${totalSkipped} |
        Total Tests: ${totalTests}
      </div>
    </div>
  `;

  const reportContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        th, td {
          text-align: center;
        }
        .passed {
          color: green;
        }
        .failed {
          color: red;
        }
      </style>
      <title>${config.title}</title>
    </head>
    <body>
      ${menubarContent}
      <div class="container mt-3 text-center"></div>
      <div class="container mt-3">
        <table class="table mt-3">
          <thead>
            <tr>
              <th style="width: 20%;">Test</th>
              <th style="width: 30%;">Result</th>
              <th style="width: 20%;">Screenshot/Video</th>
              <th style="width: 15%;">Duration</th>
            </tr>
          </thead>
          <tbody>
            ${generateRows(result.runs)}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;

  fs.writeFileSync('TestReport/Report.html', reportContent);
}

function generateRows(runs) {
  let passedTests = '';
  let failedTests = '';

  for (const run of runs) {
    for (const test of run.tests) {
      const isFailed = test.state === 'failed';
      const rowColor = isFailed ? 'style="background-color: #ffcccc;"' : '';
      const statusClass = isFailed ? 'failed' : 'passed';

      const attempts = test.attempts || [];
      const lastAttempt = attempts[attempts.length - 1] || {};

      // Extract just the first line of the error and append error file info
      let displayError = run.tests[0]?.displayError || 'Pass';
      displayError = displayError.split("\n")[0];
      const errorFile = run.tests[0]?.displayError ?
        getErrorFileInfo(run.tests[0]?.displayError) : "";
      displayError = displayError + `\n ${errorFile}`;

      const duration =run.stats.duration/1000;

      const videoLink = run.video
        ? `<a href="file://${run.video}" target="_blank">Video</a>`
        : '';

      const screenshotLink = run?.screenshots[0]?.path
        ? `<a href="file://${run?.screenshots[0]?.path}" target="_blank">Screenshot</a>`
        : '';

      // Display "Video / Screenshot" and remove slash if there is no screenshot
      const screenshotAndVideoLink = screenshotLink
        ? `${videoLink} / ${screenshotLink}`
        : videoLink;

      const row = `
        <tr ${rowColor}>
          <td style="width: 20%; text-align: left;">${test.title.join(' - ')}</td>
          <td style="width: 30%; text-align: left;" class="${statusClass}">${displayError}</td>
          <td style="width: 20%; text-align: center;">${screenshotAndVideoLink}</td>
          <td style="width: 15%;">${duration}</td>
        </tr>
      `;

      if (isFailed) {
        failedTests += row;
      } else {
        passedTests += row;
      }
    }
  }

  function getErrorFileInfo(errorMessage) {
    const regex = /(?:at\s.+?\()(.*?\))(?=\s|$)/;
    const match = errorMessage.match(regex);
    // If there is a match, return the file info; otherwise, return null
    return match ? match[1] : null;
    }

  return `${failedTests}${passedTests}`;
}

module.exports = (on, config) => {
  on('after:run', (results) => {

    const jsonResults = JSON.stringify(results, null, 2);
    const testReportDirectory = path.join(process.cwd(), 'TestReport');

    // Create the TestReport directory if it doesn't exist
    if (!fs.existsSync(testReportDirectory)) {
      fs.mkdirSync(testReportDirectory, { recursive: true });
    }

    fs.writeFile('TestReport/results.json', jsonResults, (err) => {
      if (err) {
        console.error('Failed to write the test results:', err);
      } else {
        console.log('Test results written successfully results.json');
      }
    });

    const config = readConfig();
    generateHTMLReport(results, config);

  });
};
