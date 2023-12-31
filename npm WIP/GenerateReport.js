const fs = require('fs');
const path = require('path');
const Chart = require('chart.js/auto');
const express = require('express');

function readConfig() {
  const configPath = 'reportconfig.json';

  if (fs.existsSync(configPath)) {
    const configFile = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configFile);
  } else {
    return {
      title: 'Automation Test Report',
      logo: 'https://5a6a246dfe17a1aac1cd-b99970780ce78ebdd694d83e551ef810.ssl.cf1.rackcdn.com/orgsrichtextimages/1515/cypress_logo_round.jpg'
    };
  }
}

function generateHTMLReport(result, config) {
  const startTime = result.startedTestsAt;
  const totalDurationInSeconds = result.totalDuration / 1000; // convert milliseconds to seconds
  const minutes = Math.floor(totalDurationInSeconds / 60);
  const seconds = Math.floor(totalDurationInSeconds % 60);
  const totalDurationFormatted = `${minutes} min ${seconds} sec`;
  const totalPass = result.totalPassed || 0;
  const totalFail = result.totalFailed || 0;
  const totalSkipped = result.totalPending || 0;
  const totalTests = result.totalTests || 0;
  const osName = result.osName;

  function parseTestStartTime(dateToParse) {
    const date = new Date(dateToParse);

    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/New_York',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  const menubarContent = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src="${config.logo}" alt="Logo" class="mr-2" style="height: 30px;">
    <span class="navbar-brand mb-0 h1">${config.title}</span>
  </nav>
  <div class="container mt-3">
    <div class="navbar-text" style="font-size: medium; color: #888;">
      Browser: ${result.browserName} - ${result.browserVersion}  |  Platform: ${osName}  |
      Passed: ${totalPass}  | Failed: ${totalFail} |  Skipped: ${totalSkipped} |
      Total Tests: ${totalTests}
    </div>
  </div>
`;

  const chartCanvas = `<canvas id="testChart" width="250" height="250"></canvas>`;

  const summaryTable = `
  <table class="table mt-3">
    <tbody>
      <tr>
        <th class="shaded-label">Passing %</th>
        <td>${Math.round((result.totalPassed / result.totalTests) * 100)}%</td>
      </tr>
      <tr>
        <th class="shaded-label">Failing %</th>
        <td>${Math.round((result.totalFailed / result.totalTests) * 100)}%</td>
      </tr>
      <tr>
        <th class="shaded-label">Start Time</th>
        <td>${formatDateString(result.startedTestsAt)} </td>
      </tr>
      <tr>
        <th class="shaded-label">End Time</th>
        <td>${formatDateString(result.endedTestsAt)}</td>
      </tr>
      <tr>
        <th class="shaded-label">Execution time</th>
        <td>${totalDurationFormatted}</td>
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
        th.shaded-label {
          color: #A0A0A0; /* shade of grey */
        }
        .passed {
          color: green;
        }
        .failed {
          color: red;
        }
        .skipped {
          color: #FEBE10;
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
                backgroundColor: ['#568203', '#CD5C5C', '#FFC72C'], // Customize colors if needed
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

function formatDateString(inputDate) {
  // Parse the input date string
  const dateObject = new Date(inputDate);

  // Format the date
  const formattedDate = dateObject.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  });

  return formattedDate;
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
      //Enable for shading failed tests red
      //const rowColor = isFailed ? 'style="background-color: #ffcccc;"' : '';
      const rowColor = isFailed ? '' : '';

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

      const actualDuration = run.stats.duration / 1000;
      const roundedDuration = Math.round(actualDuration);

      const duration = roundedDuration !== 0 ? roundedDuration : actualDuration;
      const durationFormatted = `${duration} sec`;

      const videoLink = run.video
        ? `<a href="${convertToLocalUrl(run.video)}" target="_blank">Video</a>`
        : '';

      const screenshotLink = run?.screenshots[0]?.path
        ? `<a href="${convertToLocalUrl(run?.screenshots[0]?.path)}" target="_blank">Screenshot</a>`
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
          <td style="width: 5%;">${durationFormatted}</td>
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

  function convertToLocalUrl(filePath, port = 5500) {
    // Assuming the videos are served from the root of the server
    const baseUrl = `http://127.0.0.1:${port}`;

    // Replace the local path with an empty string and replace any backslashes with forward slashes
    const relativePath = filePath.replace(/.*cypress/, '/cypress').replace(/\\/g, '/');

    // Combine the base URL and the relative path
    const url = `${baseUrl}${relativePath}`;

    return url;
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

    //----------------- START REPORT SERVER ------------------ 
    //Host a server for viewing the report and screenshots/videos
  });
};
