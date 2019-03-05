# Template
[![npm version](https://badge.fury.io/js/%40rcmedeiros%2Ftslint-config.svg)](https://badge.fury.io/js/%40rcmedeiros%2Ftslint-config)
[![CircleCI](https://circleci.com/gh/rcmedeiros/template.svg?style=svg&circle-token=0cbb60bd086a80279822859c0ed2610d5428a223)](https://circleci.com/gh/rcmedeiros/template)
[![Known Vulnerabilities](https://snyk.io/test/github/rcmedeiros/template/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rcmedeiros/template?targetFile=package.json)
[![codecov](https://codecov.io/gh/rcmedeiros/template/branch/master/graph/badge.svg?token=CJcGrQ0S58)](https://codecov.io/gh/rcmedeiros/template)
[![Coverage Status](https://coveralls.io/repos/github/rcmedeiros/template/badge.svg?branch=master)](https://coveralls.io/github/rcmedeiros/template?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/37e2987f72bc13b00e5a/test_coverage)](https://codeclimate.com/github/rcmedeiros/template/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/37e2987f72bc13b00e5a/maintainability)](https://codeclimate.com/github/rcmedeiros/template/maintainability)
[![dependencies Status](https://david-dm.org/rcmedeiros/template/status.svg)](https://david-dm.org/rcmedeiros/template)
[![devDependencies Status](https://david-dm.org/rcmedeiros/template/dev-status.svg)](https://david-dm.org/rcmedeiros/template?type=dev)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

A [TypeScript](https://github.com/trending/typescript) project that does very little other than to demonstrate how to setup a proper [CI](https://en.wikipedia.org/wiki/Continuous_integration)/[CD](https://en.wikipedia.org/wiki/Continuous_delivery) project.

* It generates [npmjs](https://www.npmjs.com/) packages at the deployment step (dry run in this case);
* It expects the repository to follow [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).
  * branch develop submits a package marked with the @dev tag;
  * branch release/ deploys with [@alpha, @beta or @next](https://docs.npmjs.com/cli/dist-tag) (release candidate) tags;
  * branch master submits to @latest. Those require manual approval.
* Vulnerability checks by [npm-audit](https://docs.npmjs.com/cli/audit) and [Snyk](https://snyk.io/)
* The versioning complies with [SemVer](https://semver.org/);
* Tests are implemented with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
* Test coverage assessed with [Istanbul.js](https://istanbul.js.org/).
* Coverage reports by [Codecov](https://codecov.io/) and [Coveralls](https://coveralls.io/)
* Maintainability and code coverage by [Code Climate: Quality](https://codeclimate.com/quality/pricing/)

## Up Next

* Documentation hosted by [ReadTheDocs](https://readthedocs.org/).
* Spies, Stubs and Mocks by [Sinon.JS](https://sinonjs.org/) (or maybe [JsMockito](https://jsmockito.org/))
* [Sonarcloud](https://sonarcloud.io)
* [Greenkeeper](https://greenkeeper.io)
