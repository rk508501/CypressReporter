let result = {
    "browserName": "edge",
    "browserPath": "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "browserVersion": "119.0.2151.72",
    "config": {
        "video": true,
        "defaultCommandTimeout": 1000,
        "projectRoot": "C:\\Automation\\CypressReporter",
        "projectName": "CypressReporter",
        "configFile": "cypress.config.ts",
        "isTextTerminal": true,
        "animationDistanceThreshold": 5,
        "arch": "x64",
        "baseUrl": null,
        "blockHosts": null,
        "chromeWebSecurity": true,
        "clientCertificates": [],
        "downloadsFolder": "C:\\Automation\\CypressReporter\\cypress\\downloads",
        "env": {},
        "execTimeout": 60000,
        "experimentalCspAllowList": false,
        "experimentalFetchPolyfill": false,
        "experimentalInteractiveRunEvents": false,
        "experimentalRunAllSpecs": false,
        "experimentalMemoryManagement": false,
        "experimentalModifyObstructiveThirdPartyCode": false,
        "experimentalSkipDomainInjection": null,
        "experimentalOriginDependencies": false,
        "experimentalSourceRewriting": false,
        "experimentalSingleTabRunMode": false,
        "experimentalStudio": false,
        "experimentalWebKitSupport": false,
        "fileServerFolder": "C:\\Automation\\CypressReporter",
        "fixturesFolder": "C:\\Automation\\CypressReporter\\cypress\\fixtures",
        "excludeSpecPattern": "*.hot-update.js",
        "includeShadowDom": false,
        "keystrokeDelay": 0,
        "modifyObstructiveCode": true,
        "numTestsKeptInMemory": 0,
        "platform": "win32",
        "pageLoadTimeout": 60000,
        "port": 51583,
        "projectId": null,
        "redirectionLimit": 20,
        "reporter": "spec",
        "reporterOptions": null,
        "requestTimeout": 5000,
        "resolvedNodePath": "C:\\Program Files (x86)\\nodejs\\node.exe",
        "resolvedNodeVersion": "18.16.1",
        "responseTimeout": 30000,
        "retries": {
            "runMode": 0,
            "openMode": 0
        },
        "screenshotOnRunFailure": true,
        "screenshotsFolder": "C:\\Automation\\CypressReporter\\cypress\\screenshots",
        "slowTestThreshold": 10000,
        "scrollBehavior": "top",
        "supportFile": "C:\\Automation\\CypressReporter\\cypress\\support\\e2e.ts",
        "taskTimeout": 60000,
        "testIsolation": true,
        "trashAssetsBeforeRuns": true,
        "userAgent": null,
        "videoCompression": false,
        "videosFolder": "C:\\Automation\\CypressReporter\\cypress\\videos",
        "viewportHeight": 660,
        "viewportWidth": 1000,
        "waitForAnimations": true,
        "watchForFileChanges": false,
        "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        "browsers": [
            {
                "channel": "stable",
                "displayName": "Chrome",
                "family": "chromium",
                "majorVersion": "119",
                "name": "chrome",
                "path": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                "version": "119.0.6045.160"
            },
            {
                "channel": "stable",
                "displayName": "Edge",
                "family": "chromium",
                "majorVersion": "119",
                "name": "edge",
                "path": "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
                "version": "119.0.2151.72"
            },
            {
                "channel": "stable",
                "displayName": "Electron",
                "family": "chromium",
                "majorVersion": 114,
                "name": "electron",
                "path": "",
                "version": "114.0.5735.289"
            }
        ],
        "cypressBinaryRoot": "C:\\Users\\kulka\\AppData\\Local\\Cypress\\Cache\\13.5.0\\Cypress\\resources\\app",
        "hosts": null,
        "isInteractive": true,
        "version": "13.5.0",
        "testingType": "e2e",
        "browser": null,
        "cypressInternalEnv": "production"
    },
    "cypressVersion": "13.5.0",
    "endedTestsAt": "2023-11-23T02:34:17.786Z",
    "osName": "win32",
    "osVersion": "10.0.19045",
    "runs": [
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 1,
                "failures": 0,
                "start": "2023-11-23T02:33:21.332Z",
                "end": "2023-11-23T02:33:21.468Z",
                "duration": 136
            },
            "screenshots": [],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/API.cy.ts",
                "fileExtension": ".ts",
                "fileName": "API",
                "name": "API.cy.ts",
                "relative": "cypress\\e2e\\API.cy.ts"
            },
            "stats": {
                "duration": 134,
                "endedAt": "2023-11-23T02:33:21.457Z",
                "failures": 0,
                "passes": 0,
                "pending": 1,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:21.323Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "pending"
                        }
                    ],
                    "displayError": null,
                    "duration": 124,
                    "state": "pending",
                    "title": [
                        "API Tests",
                        "Verify the HTTP calls"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\API.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 0,
                "failures": 1,
                "start": "2023-11-23T02:33:27.373Z",
                "end": "2023-11-23T02:33:33.544Z",
                "duration": 6171
            },
            "screenshots": [
                {
                    "height": 582,
                    "name": null,
                    "path": "C:\\Automation\\CypressReporter\\cypress\\screenshots\\Billing.cy.ts\\Billing Page Tests -- Verify the billing methods (failed).png",
                    "takenAt": "2023-11-23T02:33:32.986Z",
                    "width": 1216
                }
            ],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Billing.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Billing",
                "name": "Billing.cy.ts",
                "relative": "cypress\\e2e\\Billing.cy.ts"
            },
            "stats": {
                "duration": 6142,
                "endedAt": "2023-11-23T02:33:33.509Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:27.367Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Billing.cy.ts:5:51)",
                    "duration": 3072,
                    "state": "failed",
                    "title": [
                        "Billing Page Tests",
                        "Verify the billing methods"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Billing.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 4,
                "passes": 3,
                "pending": 0,
                "failures": 1,
                "start": "2023-11-23T02:33:37.362Z",
                "end": "2023-11-23T02:33:38.365Z",
                "duration": 1003
            },
            "screenshots": [
                {
                    "height": 582,
                    "name": null,
                    "path": "C:\\Automation\\CypressReporter\\cypress\\screenshots\\Checkout.cy.ts\\Checkout tests -- Checkout Happy Test 4 (failed).png",
                    "takenAt": "2023-11-23T02:33:37.967Z",
                    "width": 1216
                }
            ],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Checkout.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Checkout",
                "name": "Checkout.cy.ts",
                "relative": "cypress\\e2e\\Checkout.cy.ts"
            },
            "stats": {
                "duration": 1001,
                "endedAt": "2023-11-23T02:33:38.356Z",
                "failures": 1,
                "passes": 3,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:37.355Z",
                "suites": 1,
                "tests": 4
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "passed"
                        }
                    ],
                    "displayError": null,
                    "duration": 428,
                    "state": "passed",
                    "title": [
                        "Checkout tests",
                        "Checkout Happy Test 1"
                    ]
                },
                {
                    "attempts": [
                        {
                            "state": "passed"
                        }
                    ],
                    "displayError": null,
                    "duration": 43,
                    "state": "passed",
                    "title": [
                        "Checkout tests",
                        "Checkout Happy Test 2"
                    ]
                },
                {
                    "attempts": [
                        {
                            "state": "passed"
                        }
                    ],
                    "displayError": null,
                    "duration": 46,
                    "state": "passed",
                    "title": [
                        "Checkout tests",
                        "Checkout Happy Test 3"
                    ]
                },
                {
                    "attempts": [
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: expected true to be false\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Checkout.cy.ts:30:0)",
                    "duration": 380,
                    "state": "failed",
                    "title": [
                        "Checkout tests",
                        "Checkout Happy Test 4"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Checkout.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 1,
                "failures": 0,
                "start": "2023-11-23T02:33:41.785Z",
                "end": "2023-11-23T02:33:41.912Z",
                "duration": 127
            },
            "screenshots": [],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Database.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Database",
                "name": "Database.cy.ts",
                "relative": "cypress\\e2e\\Database.cy.ts"
            },
            "stats": {
                "duration": 128,
                "endedAt": "2023-11-23T02:33:41.906Z",
                "failures": 0,
                "passes": 0,
                "pending": 1,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:41.778Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "pending"
                        }
                    ],
                    "displayError": null,
                    "duration": 104,
                    "state": "pending",
                    "title": [
                        "Database Tests",
                        "Verify if the data is returned from the backend"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Database.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 0,
                "failures": 1,
                "start": "2023-11-23T02:33:45.250Z",
                "end": "2023-11-23T02:33:49.808Z",
                "duration": 4558
            },
            "screenshots": [
                {
                    "height": 582,
                    "name": null,
                    "path": "C:\\Automation\\CypressReporter\\cypress\\screenshots\\Landing.cy.ts\\Landing Page Tests -- Verify the landing page elements (failed).png",
                    "takenAt": "2023-11-23T02:33:49.412Z",
                    "width": 1216
                }
            ],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Landing.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Landing",
                "name": "Landing.cy.ts",
                "relative": "cypress\\e2e\\Landing.cy.ts"
            },
            "stats": {
                "duration": 4558,
                "endedAt": "2023-11-23T02:33:49.802Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:45.244Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Landing.cy.ts:5:51)",
                    "duration": 2233,
                    "state": "failed",
                    "title": [
                        "Landing Page Tests",
                        "Verify the landing page elements"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Landing.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 2,
                "passes": 1,
                "pending": 0,
                "failures": 1,
                "start": "2023-11-23T02:33:53.895Z",
                "end": "2023-11-23T02:33:59.164Z",
                "duration": 5269
            },
            "screenshots": [
                {
                    "height": 582,
                    "name": null,
                    "path": "C:\\Automation\\CypressReporter\\cypress\\screenshots\\Login.cy.ts\\Login Tests -- Verify the login tests (failed).png",
                    "takenAt": "2023-11-23T02:33:58.595Z",
                    "width": 1216
                }
            ],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Login.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Login",
                "name": "Login.cy.ts",
                "relative": "cypress\\e2e\\Login.cy.ts"
            },
            "stats": {
                "duration": 5265,
                "endedAt": "2023-11-23T02:33:59.151Z",
                "failures": 1,
                "passes": 1,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T02:33:53.886Z",
                "suites": 1,
                "tests": 2
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Login.cy.ts:8:51)\n    at runnable.fn (https://www.google.ca/__cypress/runner/cypress_runner.js:138887:19)\n    at callFn (https://www.google.ca/__cypress/runner/cypress_runner.js:157726:21)\n    at Runnable.run (https://www.google.ca/__cypress/runner/cypress_runner.js:157713:7)\n    at <unknown> (https://www.google.ca/__cypress/runner/cypress_runner.js:163637:30)\n    at PassThroughHandlerContext.finallyHandler (https://www.google.ca/__cypress/runner/cypress_runner.js:4072:23)\n    at PassThroughHandlerContext.tryCatcher (https://www.google.ca/__cypress/runner/cypress_runner.js:1807:23)\n    at Promise._settlePromiseFromHandler (https://www.google.ca/__cypress/runner/cypress_runner.js:1519:31)",
                    "duration": 2318,
                    "state": "failed",
                    "title": [
                        "Login Tests",
                        "Verify the login tests"
                    ]
                },
                {
                    "attempts": [
                        {
                            "state": "passed"
                        }
                    ],
                    "displayError": null,
                    "duration": 169,
                    "state": "passed",
                    "title": [
                        "Login Tests",
                        "UUID Test"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Login.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 0,
                "failures": 1,
                "start": "2023-11-23T02:34:03.576Z",
                "end": "2023-11-23T02:34:17.791Z",
                "duration": 14215
            },
            "screenshots": [
                {
                    "height": 582,
                    "name": null,
                    "path": "C:\\Automation\\CypressReporter\\cypress\\screenshots\\Transactions.cy.ts\\Transaction Tests -- Verify the transactions (failed).png",
                    "takenAt": "2023-11-23T02:34:17.504Z",
                    "width": 1216
                }
            ],
            "spec": {
                "absolute": "C:/Automation/CypressReporter/cypress/e2e/Transactions.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Transactions",
                "name": "Transactions.cy.ts",
                "relative": "cypress\\e2e\\Transactions.cy.ts"
            },
            "stats": {
                "duration": 14217,
                "endedAt": "2023-11-23T02:34:17.786Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T02:34:03.569Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Transactions.cy.ts:5:51)",
                    "duration": 11725,
                    "state": "failed",
                    "title": [
                        "Transaction Tests",
                        "Verify the transactions"
                    ]
                }
            ],
            "video": "C:\\Automation\\CypressReporter\\cypress\\videos\\Transactions.cy.ts.mp4"
        }
    ],
    "startedTestsAt": "2023-11-23T02:33:21.323Z",
    "totalDuration": 31445,
    "totalFailed": 5,
    "totalPassed": 4,
    "totalPending": 2,
    "totalSkipped": 0,
    "totalSuites": 7,
    "totalTests": 11
}

function generateRows() {
    console.log(result.runs.length);

    let runs = result.runs
    runs.map(run => {
        let specFile = run.spec.relative
        console.log(`---- ${specFile} -----`);

        let tests = run.tests
        tests.map(test => {

            let errorDescr = test?.displayError
            let runScreenshots = run?.screenshots

            console.log(runScreenshots.length);

            if(runScreenshots.length > 0){
               runScreenshots.forEach(scrObj =>{
                console.log(scrObj.path);
               })
            }


            if (errorDescr == null) {
                errorDescr = ""
            }

            console.log(test.title[0] + " :: " + test.title[1] + " :: " + getStateFromLastJsonObject(test.attempts) + " :: " + run.video + " :: " + getShortErrorDescr(errorDescr) + " :: ");
            //console.log(test.attempts);
        })
    })

}

generateRows()


function getStateFromLastJsonObject(json) {
    let lastState = null;
    for (let obj of json) {
        if (obj.state) {
            lastState = obj.state;
        }
    }
    return lastState;
}

function getScreenshotPath(testName,screenshots) {
    let matchingScreenshotObjs = screenshots.filter(screenshot => {
        if ((screenshot.path).includes(testName)) {
            return screenshot.path
        }
    })

    return (matchingScreenshotObjs[matchingScreenshotObjs.length - 1].path);
}

function getShortErrorDescr(errorLog) {
    const lines = errorLog.split('\n');
    return lines.slice(0, 2).join('\n');
};
