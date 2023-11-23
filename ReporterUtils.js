let result = {
    "browserName": "electron",
    "browserPath": "",
    "browserVersion": "114.0.5735.289",
    "config": {
        "video": true,
        "defaultCommandTimeout": 1000,
        "retries": {
            "runMode": 2,
            "openMode": 0
        },
        "projectRoot": "/Users/garu/Downloads/CypressReporter",
        "projectName": "CypressReporter",
        "configFile": "cypress.config.ts",
        "isTextTerminal": true,
        "animationDistanceThreshold": 5,
        "arch": "x64",
        "baseUrl": null,
        "blockHosts": null,
        "chromeWebSecurity": true,
        "clientCertificates": [],
        "downloadsFolder": "/Users/garu/Downloads/CypressReporter/cypress/downloads",
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
        "fileServerFolder": "/Users/garu/Downloads/CypressReporter",
        "fixturesFolder": "/Users/garu/Downloads/CypressReporter/cypress/fixtures",
        "excludeSpecPattern": "*.hot-update.js",
        "includeShadowDom": false,
        "keystrokeDelay": 0,
        "modifyObstructiveCode": true,
        "numTestsKeptInMemory": 0,
        "platform": "darwin",
        "pageLoadTimeout": 60000,
        "port": 49425,
        "projectId": null,
        "redirectionLimit": 20,
        "reporter": "spec",
        "reporterOptions": null,
        "requestTimeout": 5000,
        "resolvedNodePath": "/usr/local/bin/node",
        "resolvedNodeVersion": "18.17.0",
        "responseTimeout": 30000,
        "screenshotOnRunFailure": true,
        "screenshotsFolder": "/Users/garu/Downloads/CypressReporter/cypress/screenshots",
        "slowTestThreshold": 10000,
        "scrollBehavior": "top",
        "supportFile": "/Users/garu/Downloads/CypressReporter/cypress/support/e2e.ts",
        "taskTimeout": 60000,
        "testIsolation": true,
        "trashAssetsBeforeRuns": true,
        "userAgent": null,
        "videoCompression": false,
        "videosFolder": "/Users/garu/Downloads/CypressReporter/cypress/videos",
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
                "path": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                "version": "119.0.6045.159"
            },
            {
                "channel": "stable",
                "displayName": "Firefox",
                "family": "firefox",
                "majorVersion": "119",
                "name": "firefox",
                "path": "/Applications/Firefox.app/Contents/MacOS/firefox",
                "version": "119.0.1"
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
        "cypressBinaryRoot": "/Users/garu/Library/Caches/Cypress/13.5.0/Cypress.app/Contents/Resources/app",
        "hosts": null,
        "isInteractive": true,
        "version": "13.5.0",
        "testingType": "e2e",
        "browser": null,
        "cypressInternalEnv": "production"
    },
    "cypressVersion": "13.5.0",
    "endedTestsAt": "2023-11-23T04:59:37.274Z",
    "osName": "darwin",
    "osVersion": "21.6.0",
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
                "start": "2023-11-23T04:57:15.507Z",
                "end": "2023-11-23T04:57:16.129Z",
                "duration": 622
            },
            "screenshots": [],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/API.cy.ts",
                "fileExtension": ".ts",
                "fileName": "API",
                "name": "API.cy.ts",
                "relative": "cypress/e2e/API.cy.ts"
            },
            "stats": {
                "duration": 626,
                "endedAt": "2023-11-23T04:57:16.117Z",
                "failures": 0,
                "passes": 0,
                "pending": 1,
                "skipped": 0,
                "startedAt": "2023-11-23T04:57:15.491Z",
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
                    "duration": 474,
                    "state": "pending",
                    "title": [
                        "API Tests",
                        "Verify the HTTP calls"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/API.cy.ts.mp4"
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
                "start": "2023-11-23T04:57:23.052Z",
                "end": "2023-11-23T04:57:50.302Z",
                "duration": 27250
            },
            "screenshots": [
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Billing Page Tests -- Verify the billing methods (failed).png",
                    "takenAt": "2023-11-23T04:57:33.429Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Verify the billing methods -- after each hook.png",
                    "takenAt": "2023-11-23T04:57:34.019Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Billing Page Tests -- Verify the billing methods (failed) (attempt 2).png",
                    "takenAt": "2023-11-23T04:57:40.733Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Verify the billing methods -- after each hook (attempt 2).png",
                    "takenAt": "2023-11-23T04:57:41.689Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Billing Page Tests -- Verify the billing methods (failed) (attempt 3).png",
                    "takenAt": "2023-11-23T04:57:48.330Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Billing.cy.ts/Verify the billing methods -- after each hook (attempt 3).png",
                    "takenAt": "2023-11-23T04:57:49.111Z",
                    "width": 1000
                }
            ],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Billing.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Billing",
                "name": "Billing.cy.ts",
                "relative": "cypress/e2e/Billing.cy.ts"
            },
            "stats": {
                "duration": 27259,
                "endedAt": "2023-11-23T04:57:50.291Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T04:57:23.032Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Billing.cy.ts:5:51)",
                    "duration": 21381,
                    "state": "failed",
                    "title": [
                        "Billing Page Tests",
                        "Verify the billing methods"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Billing.cy.ts.mp4"
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
                "start": "2023-11-23T04:57:55.694Z",
                "end": "2023-11-23T04:58:02.653Z",
                "duration": 6959
            },
            "screenshots": [
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 1 -- after each hook.png",
                    "takenAt": "2023-11-23T04:57:56.320Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 2 -- after each hook.png",
                    "takenAt": "2023-11-23T04:57:57.164Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 3 -- after each hook.png",
                    "takenAt": "2023-11-23T04:57:57.925Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout tests -- Checkout Happy Test 4 (failed).png",
                    "takenAt": "2023-11-23T04:57:58.778Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 4 -- after each hook.png",
                    "takenAt": "2023-11-23T04:57:59.090Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout tests -- Checkout Happy Test 4 (failed) (attempt 2).png",
                    "takenAt": "2023-11-23T04:58:00.199Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 4 -- after each hook (attempt 2).png",
                    "takenAt": "2023-11-23T04:58:00.544Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout tests -- Checkout Happy Test 4 (failed) (attempt 3).png",
                    "takenAt": "2023-11-23T04:58:01.438Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Checkout.cy.ts/Checkout Happy Test 4 -- after each hook (attempt 3).png",
                    "takenAt": "2023-11-23T04:58:01.883Z",
                    "width": 1000
                }
            ],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Checkout.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Checkout",
                "name": "Checkout.cy.ts",
                "relative": "cypress/e2e/Checkout.cy.ts"
            },
            "stats": {
                "duration": 6964,
                "endedAt": "2023-11-23T04:58:02.637Z",
                "failures": 1,
                "passes": 3,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T04:57:55.673Z",
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
                    "duration": 1166,
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
                    "duration": 742,
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
                    "duration": 779,
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
                        },
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: expected true to be false\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Checkout.cy.ts:30:0)",
                    "duration": 3754,
                    "state": "failed",
                    "title": [
                        "Checkout tests",
                        "Checkout Happy Test 4"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Checkout.cy.ts.mp4"
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
                "start": "2023-11-23T04:58:08.642Z",
                "end": "2023-11-23T04:58:09.133Z",
                "duration": 491
            },
            "screenshots": [],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Database.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Database",
                "name": "Database.cy.ts",
                "relative": "cypress/e2e/Database.cy.ts"
            },
            "stats": {
                "duration": 483,
                "endedAt": "2023-11-23T04:58:09.101Z",
                "failures": 0,
                "passes": 0,
                "pending": 1,
                "skipped": 0,
                "startedAt": "2023-11-23T04:58:08.618Z",
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
                    "duration": 382,
                    "state": "pending",
                    "title": [
                        "Database Tests",
                        "Verify if the data is returned from the backend"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Database.cy.ts.mp4"
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
                "start": "2023-11-23T04:58:14.362Z",
                "end": "2023-11-23T04:58:37.919Z",
                "duration": 23557
            },
            "screenshots": [
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Landing Page Tests -- Verify the landing page elements (failed).png",
                    "takenAt": "2023-11-23T04:58:22.680Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Verify the landing page elements -- after each hook.png",
                    "takenAt": "2023-11-23T04:58:23.202Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Landing Page Tests -- Verify the landing page elements (failed) (attempt 2).png",
                    "takenAt": "2023-11-23T04:58:29.437Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Verify the landing page elements -- after each hook (attempt 2).png",
                    "takenAt": "2023-11-23T04:58:30.113Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Landing Page Tests -- Verify the landing page elements (failed) (attempt 3).png",
                    "takenAt": "2023-11-23T04:58:36.135Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Landing.cy.ts/Verify the landing page elements -- after each hook (attempt 3).png",
                    "takenAt": "2023-11-23T04:58:36.691Z",
                    "width": 1000
                }
            ],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Landing.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Landing",
                "name": "Landing.cy.ts",
                "relative": "cypress/e2e/Landing.cy.ts"
            },
            "stats": {
                "duration": 23572,
                "endedAt": "2023-11-23T04:58:37.911Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T04:58:14.339Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Landing.cy.ts:5:51)",
                    "duration": 18410,
                    "state": "failed",
                    "title": [
                        "Landing Page Tests",
                        "Verify the landing page elements"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Landing.cy.ts.mp4"
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
                "start": "2023-11-23T04:58:43.223Z",
                "end": "2023-11-23T04:59:10.575Z",
                "duration": 27352
            },
            "screenshots": [
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Login Tests -- Verify the login tests (failed).png",
                    "takenAt": "2023-11-23T04:58:51.873Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook.png",
                    "takenAt": "2023-11-23T04:58:52.332Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook (1).png",
                    "takenAt": "2023-11-23T04:58:53.043Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Login Tests -- Verify the login tests (failed) (attempt 2).png",
                    "takenAt": "2023-11-23T04:58:59.199Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook (attempt 2).png",
                    "takenAt": "2023-11-23T04:59:00.108Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook (attempt 2) (1).png",
                    "takenAt": "2023-11-23T04:59:00.820Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Login Tests -- Verify the login tests (failed) (attempt 3).png",
                    "takenAt": "2023-11-23T04:59:06.666Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook (attempt 3).png",
                    "takenAt": "2023-11-23T04:59:07.145Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/Verify the login tests -- after each hook (attempt 3) (1).png",
                    "takenAt": "2023-11-23T04:59:07.836Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/UUID Test -- after each hook.png",
                    "takenAt": "2023-11-23T04:59:09.282Z",
                    "width": 1000
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Login.cy.ts/UUID Test -- after each hook (1).png",
                    "takenAt": "2023-11-23T04:59:09.929Z",
                    "width": 1000
                }
            ],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Login.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Login",
                "name": "Login.cy.ts",
                "relative": "cypress/e2e/Login.cy.ts"
            },
            "stats": {
                "duration": 27285,
                "endedAt": "2023-11-23T04:59:10.480Z",
                "failures": 1,
                "passes": 1,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T04:58:43.195Z",
                "suites": 1,
                "tests": 2
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": "AssertionError: Timed out retrying after 10ms: Expected to find content: 'Non Existent' but never did.\n    at Context.eval (webpack://cypress_ts/./cypress/e2e/Login.cy.ts:8:51)",
                    "duration": 20758,
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
                    "duration": 1748,
                    "state": "passed",
                    "title": [
                        "Login Tests",
                        "UUID Test"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Login.cy.ts.mp4"
        },
        {
            "error": null,
            "reporter": "spec",
            "reporterStats": {
                "suites": 1,
                "tests": 1,
                "passes": 0,
                "pending": 0,
                "failures": 0,
                "start": "2023-11-23T04:59:15.696Z",
                "end": "2023-11-23T04:59:37.281Z",
                "duration": 21585
            },
            "screenshots": [
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Transactions.cy.ts/Transaction Tests -- Verify the transactions (failed).png",
                    "takenAt": "2023-11-23T04:59:24.030Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Transactions.cy.ts/Verify the transactions -- after each hook.png",
                    "takenAt": "2023-11-23T04:59:24.503Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Transactions.cy.ts/Transaction Tests -- Verify the transactions (failed) (attempt 2).png",
                    "takenAt": "2023-11-23T04:59:30.441Z",
                    "width": 1280
                },
                {
                    "height": 660,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Transactions.cy.ts/Verify the transactions -- after each hook (attempt 2).png",
                    "takenAt": "2023-11-23T04:59:31.177Z",
                    "width": 1000
                },
                {
                    "height": 720,
                    "name": null,
                    "path": "/Users/garu/Downloads/CypressReporter/cypress/screenshots/Transactions.cy.ts/Transaction Tests -- Verify the transactions (failed) (attempt 3).png",
                    "takenAt": "2023-11-23T04:59:37.179Z",
                    "width": 1280
                }
            ],
            "spec": {
                "absolute": "/Users/garu/Downloads/CypressReporter/cypress/e2e/Transactions.cy.ts",
                "fileExtension": ".ts",
                "fileName": "Transactions",
                "name": "Transactions.cy.ts",
                "relative": "cypress/e2e/Transactions.cy.ts"
            },
            "stats": {
                "duration": 21614,
                "endedAt": "2023-11-23T04:59:37.274Z",
                "failures": 1,
                "passes": 0,
                "pending": 0,
                "skipped": 0,
                "startedAt": "2023-11-23T04:59:15.660Z",
                "suites": 1,
                "tests": 1
            },
            "tests": [
                {
                    "attempts": [
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        },
                        {
                            "state": "failed"
                        }
                    ],
                    "displayError": null,
                    "duration": 18926,
                    "state": "failed",
                    "title": [
                        "Transaction Tests",
                        "Verify the transactions"
                    ]
                }
            ],
            "video": "/Users/garu/Downloads/CypressReporter/cypress/videos/Transactions.cy.ts.mp4"
        }
    ],
    "startedTestsAt": "2023-11-23T04:57:15.491Z",
    "totalDuration": 107803,
    "totalFailed": 5,
    "totalPassed": 4,
    "totalPending": 2,
    "totalSkipped": 0,
    "totalSuites": 7,
    "totalTests": 11
}

function generateRows() {

    let runs = result.runs
    runs.map(run => {
        let specFile = run.spec.relative
        console.log(`---- ${specFile} -----`);

        let tests = run.tests
        tests.map(test => {

            let runScreenshots = run?.screenshots
            let screenshotPath
            if (runScreenshots.length > 0) {
                screenshotPath = getScreenshotPath(test.title[1], runScreenshots)
            } else {
                screenshotPath = ""
            }

            let errorDescr = test?.displayError
            if (errorDescr == null) {
                errorDescr = ""
            }

            console.log(test.title[0] + " :: " + test.title[1] + " :: " + getStateFromLastJsonObject(test.attempts) + " :: " + run.video + " :: " + getShortErrorDescr(errorDescr) + " :: " + screenshotPath + " :: " + formatMilliseconds(test.duration));
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

function getScreenshotPath(testName, screenshots) {
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

function formatMilliseconds(milliseconds) {
    const seconds = milliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.ceil(seconds % 60);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainderSeconds.toString().padStart(2, "0");
    return `${formattedMinutes} min ${formattedSeconds} sec`;
}
