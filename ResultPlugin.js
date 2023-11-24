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
      logo: 'https://cdn1.iconfinder.com/data/icons/testing-8/128/Set16-02-1024.png'
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
      <link rel="icon" href="/assets/CyLogo.ico">
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
      const isFailed = getStateFromLastJsonObject(test.attempts) === 'failed';
      const isSkipped = getStateFromLastJsonObject(test.attempts) === 'pending';
      const isPassed = getStateFromLastJsonObject(test.attempts) === 'passed';

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

      //Set the status to error if the displayError is not undefined, others statuses follow
      let testStatus = test?.displayError
      if ((testStatus == null) && (isPassed)) {
        testStatus = "Pass"
      } else if (isSkipped) {
        testStatus = "Skipped"
      }

      const videoLink = run.video
        ? `<a href="${convertToLocalUrl(run.video)}" target="_blank">Video</a>`
        : '';

      let screenshotPath = getScreenshotLink(test.title[1])
      const screenshotLink = screenshotPath
        ? `<a href="${convertToLocalUrl(screenshotPath)}" target="_blank">Screenshot</a>`
        : '';

      // Display "Video / Screenshot" and remove slash if there is no screenshot
      const screenshotAndVideoLink = screenshotLink
        ? `${videoLink} ${screenshotLink}`
        : videoLink;

      const row = `
        <tr ${rowColor}>
          <td style="width: 45%; text-align: left;">[${test.title[0] + "] " + test.title[1]}</td>
          <td style="width: 45%; text-align: center;" class="${statusClass}">${getShortErrorDescr(testStatus)}</td>
          <td style="width: 5%; text-align: center;">${screenshotAndVideoLink}</td>
          <td style="width: 5%;">${formatMilliseconds(test.duration)}</td>
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

  function convertToLocalUrl(filePath, port = 8080) {
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

  function getStateFromLastJsonObject(json) {
    let lastState = null;
    for (let obj of json) {
      if (obj.state) {
        lastState = obj.state;
      }
    }
    return lastState;
  }

  function extractPngLinks(obj) {
    let pngLinks = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (typeof value === 'object') {
          // Recursively search for .png links in nested objects
          pngLinks = pngLinks.concat(extractPngLinks(value));
        } else if (typeof value === 'string' && value.endsWith('.png')) {
          // Check if the string ends with .png and add it to the list
          pngLinks.push(value);
        }
      }
    }
    return pngLinks;
  }

  // Print the extracted PNG links
  function getScreenshotLink(testName) {
    let pngLinks = extractPngLinks(runs)
    console.log("DEBUG total scr links " + pngLinks.length)

    console.log("Searching for the testName " + testName);
    let searchResultsForScreenshot = pngLinks.filter(link => {
      return link.includes(testName)
    })
    return getLastElement(searchResultsForScreenshot)
  }

  function getLastElement(arr) {
    // Check if the array is not empty
    if (arr && arr.length > 0) {
      return arr[arr.length - 1]; // Return the last element
    } else {
      return undefined; // Return undefined for empty arrays
    }
  }

  function getShortErrorDescr(errorLog) {
    const lines = errorLog.split('\n');
    return lines.slice(0, 2).join('\n');
  };

  function formatMilliseconds(milliseconds) {
    const seconds = milliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.ceil(seconds % 60);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainderSeconds.toString().padStart(2, "0");
    return `${formattedMinutes} min ${formattedSeconds} sec`;
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
