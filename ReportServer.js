const path = require('path');
const express = require('express');
const { log } = require('console');
const fs = require('fs');

console.log("Launching server from the directory => " + __dirname);

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'TestReport/Report.html'));
});

// Accept all the incoming file requests and host the screenshots/images
app.get('*', function (req, res) {
  // Screenshot files contain blank spaces, encoded with %20
  if ((req.url).includes("screenshots")) {
    res.sendFile(replaceSpacesInUrls(req.url), { root: __dirname })
  } else {
    res.sendFile(req.url, { root: __dirname });
  }
});

app.listen(getServerPort(), () => {
  console.log(`View the test report at http://127.0.0.1:${getServerPort()}`);
});

function replaceSpacesInUrls(url) {
  return url.replace(/%20/g, ' ');
}

function getServerPort() {
  let port = 8080;
  try {
    const reporterConfig = JSON.parse(fs.readFileSync('reportconfig.json'));
    if (reporterConfig.port) {
      port = reporterConfig.port;
    }
  } catch (err) {
    console.error('No reporterconfig.json file found, using default port 8080.');
  }
  return port
}