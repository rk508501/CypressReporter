const fs = require('fs');
const path = require('path');
const Chart = require('chart.js/auto');

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
  const totalSkipped = result.totalPending || 0;
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

  const chartCanvas = `<canvas id="testChart" width="250" height="250"></canvas>`;

  const summaryTable = `
  <table class="table mt-3">
    <tbody>
      <tr>
        <th>Passing %</th>
        <td>${((result.totalPassed / result.totalTests) * 100).toFixed(2)}%</td>
      </tr>
      <tr>
        <th>Failing %</th>
        <td>${((result.totalFailed / result.totalTests) * 100).toFixed(2)}%</td>
      </tr>
      <tr>
        <th>Browser</th>
        <td>${result.browserName}</td>
      </tr>
      <tr>
        <th>Browser Ver.</th>
        <td>${result.browserVersion}</td>
      </tr>
      <tr>
        <th>OS Platform</th>
        <td>${result.osName}</td>
      </tr>
    </tbody>
  </table>
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
        .skipped {
          color: #FFD580;
        }
      </style>
      <title>${config.title}</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body>
      ${menubarContent}
      <div class="container mt-3">
      <div class="row">
        <div class="col">
          <div class="text-center">
            ${chartCanvas}
          </div>
        </div>
        <div class="col">
          <div class="info-table-container">
            ${summaryTable}
          </div>
        </div>
      </div>
    </div>
      <div class="container mt-3">
        <table class="table mt-3">
          <thead>
            <tr>
              <th style="width: 45%;">Test</th>
              <th style="width: 45%;">Result</th>
              <th style="width: 5%;">Artifacts</th>
              <th style="width: 5%;">Duration</th>
            </tr>
          </thead>
          <tbody>
            ${generateRows(result.runs)}
          </tbody>
        </table>
      </div>

      <script>
        document.addEventListener('DOMContentLoaded', function () {
          // Call a function to draw the pie chart
          drawPieChart(${totalPass}, ${totalFail}, ${totalSkipped});
        });

        function drawPieChart(pass, fail, skipped) {
          var ctx = document.getElementById('testChart').getContext('2d');
          var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: ['Pass', 'Fail', 'Skipped'],
              datasets: [{
                data: [pass, fail, skipped],
                backgroundColor: ['#86af49', '#eca1a6', '#ffef96'], // Customize colors if needed
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            }
          });
        }
      </script>

    </body>
    </html>
  `;

  fs.writeFileSync('TestReport/Report.html', reportContent);
}

function calculatePassingPercentage(run) {
  return (passedTests / totalTests) * 100;
}

function generateRows(runs) {
  let passedTests = '';
  let failedTests = '';
  let skippedTests = '';

  for (const run of runs) {
    for (const test of run.tests) {
      const isFailed = test.state === 'failed';
      const isSkipped = test.state === 'pending';
      const isPassed = test.state === 'passed';
      const rowColor = isFailed ? 'style="background-color: #ffcccc;"' : '';
      let statusClass
      if (isFailed) {
        statusClass = "failed"
      } else if (isSkipped) {
        statusClass = "skipped"
      } else if (isPassed) {
        statusClass = "passed"
      }

      // Extract just the first line of the error and append error file info
      let displayError = run.tests[0]?.displayError || 'Pass';
      displayError = displayError.split("\n")[0];
      const errorFile = run.tests[0]?.displayError ?
        getErrorFileInfo(run.tests[0]?.displayError) : "";
      displayError = displayError + `\n ${errorFile}`;

      //If the status is pending update display text
      if (test.state === 'pending') {
        displayError = "Skipped"
      } else {
        //Test is not skipped
      }

      const duration = run.stats.duration / 1000;

      const videoLink = run.video
        ? `<a href="file://${run.video}" target="_blank">Video</a>`
        : '';

      const screenshotLink = run?.screenshots[0]?.path
        ? `<a href="file://${run?.screenshots[0]?.path}" target="_blank">Screenshot</a>`
        : '';

      // Display "Video / Screenshot" and remove slash if there is no screenshot
      const screenshotAndVideoLink = screenshotLink
        ? `${videoLink} ${screenshotLink}`
        : videoLink;

      const row = `
        <tr ${rowColor}>
          <td style="width: 45%; text-align: left;">${test.title.join(' - ')}</td>
          <td style="width: 45%; text-align: left;" class="${statusClass}">${displayError}</td>
          <td style="width: 5%; text-align: center;">${screenshotAndVideoLink}</td>
          <td style="width: 5%;">${duration}</td>
        </tr>
      `;

      if (isFailed) {
        failedTests += row;
      } else if (isPassed) {
        passedTests += row;
      } else if (isSkipped) {
        skippedTests += row;
      }
    }
  }

  function getErrorFileInfo(errorMessage) {
    const regex = /(?:at\s.+?\()(.*?\))(?=\s|$)/;
    const match = errorMessage.match(regex);
    // If there is a match, return the file info; otherwise, return null
    return match ? match[1] : null;
  }

  return `${failedTests}${passedTests}${skippedTests}`;
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
