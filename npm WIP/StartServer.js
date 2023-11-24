const path = require('path');
const express = require('express');

module.exports = function () {
  console.log("Starting report server at => http://127.0.0.1:5500/")

  // Server instance
  const app = express();

  // Construct the path to Report.html relative to the module's directory
  const currentModuleDir = __dirname;
  const projectRoot = path.join(currentModuleDir, '..', '..');

  const reportPath = path.join(projectRoot, '/TestReport/Report.html');
  console.log("reportPath:", reportPath);

  app.get('/', function (req, res) {
    res.sendFile(reportPath);
  });

  // Accept all the incoming file requests and host the screenshots/images
  app.get('*', function (req, res) {
    // Screenshot files contain blank spaces, encoded with %20
    if (req.url.includes('screenshots')) {
      res.sendFile(replaceSpacesInUrls(req.url), { root: projectRoot });
    } else {
      res.sendFile(req.url, { root: projectRoot });
    }
  })

  const port = process.env.PORT || 5500; // Use an environment variable or a default port
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  function replaceSpacesInUrls(url) {
    return url.replace(/%20/g, ' ');
  }

}