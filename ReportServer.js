const path = require('path');
const express = require('express');
const { log } = require('console');

module.exports = function () {
    // Server instance
    const app = express();

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'TestReport/Report.html'));
    });

    //Accept all the incoming file requests and host the screenshots/images
    app.get('*', function (req, res) {
        //Screenshot files contain blank spaces, encoded with %20
        if ((req.url).includes("screenshots")) {
            res.sendFile(replaceSpacesInUrls(req.url), { root: __dirname })
        } else {
            res.sendFile(req.url, { root: __dirname });
        }
    });

    const port = process.env.PORT || 5500; // Use an environment variable or a default port
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

    function replaceSpacesInUrls(url) {
        return url.replace(/%20/g, ' ');
    }
}

// const startServer = require('./StartServer')
// startServer()
