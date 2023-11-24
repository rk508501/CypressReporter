const path = require('path');
const express = require('express');
const { log } = require('console');

//TODO
// module.exports = function () {
//     // Server instance
//     const app = express();

//     app.get('/', function (req, res) {
//         res.sendFile(path.join(__dirname, 'TestReport/Report.html'));
//     });

//     //Accept all the incoming file requests and host the screenshots/images
//     app.get('*', function (req, res) {
//         //Screenshot files contain blank spaces, encoded with %20
//         if ((req.url).includes("screenshots")) {
//             res.sendFile(replaceSpacesInUrls(req.url))
//         } else {
//             res.sendFile(req.url, { root: __dirname });
//         }
//     });

//     const port = process.env.PORT || 8080; // Use an environment variable or a default port
//     app.listen(port, () => {
//         console.log(`View the test report at http://127.0.0.1:${8080}`);
//     });

//     function replaceSpacesInUrls(url) {
//         return url.replace(/%20/g, ' ');
//     }
// }

// const startServer = require('./StartServer')
// startServer()

console.log("Launching server from the directory => " + __dirname);
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

const port = process.env.PORT || 8080; // Use an environment variable or a default port
app.listen(port, () => {
    console.log(`View the test report at http://127.0.0.1:${8080}`);
});

function replaceSpacesInUrls(url) {
    return url.replace(/%20/g, ' ');
}
