# TypeScript/JavaScript/Node CI/CD Template
[![npm version](https://badge.fury.io/js/%40rcmedeiros%2Ftslint-config.svg)](https://badge.fury.io/js/%40rcmedeiros%2Ftslint-config)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@rcmedeiros/tslint-config.svg)
![CircleCI branch](https://img.shields.io/circleci/project/github/rcmedeiros/template/master.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/rcmedeiros/template/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rcmedeiros/template?targetFile=package.json)
[![codecov](https://codecov.io/gh/rcmedeiros/template/branch/master/graph/badge.svg?token=CJcGrQ0S58)](https://codecov.io/gh/rcmedeiros/template)
[![Coverage Status](https://coveralls.io/repos/github/rcmedeiros/template/badge.svg?branch=master)](https://coveralls.io/github/rcmedeiros/template?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/37e2987f72bc13b00e5a/test_coverage)](https://codeclimate.com/github/rcmedeiros/template/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/37e2987f72bc13b00e5a/maintainability)](https://codeclimate.com/github/rcmedeiros/template/maintainability)
[![dependencies Status](https://david-dm.org/rcmedeiros/template/status.svg)](https://david-dm.org/rcmedeiros/template)
[![devDependencies Status](https://david-dm.org/rcmedeiros/template/dev-status.svg)](https://david-dm.org/rcmedeiros/template?type=dev)
[![Documentation Status](https://readthedocs.org/projects/cicd-template/badge/?version=latest)](https://cicd-template.readthedocs.io/en/latest/?badge=latest)
[![Greenkeeper badge](https://badges.greenkeeper.io/rcmedeiros/template.svg)](https://greenkeeper.io/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

A [TypeScript](https://github.com/trending/typescript) project that does very little other than demonstrate how to setup a [CI](https://en.wikipedia.org/wiki/Continuous_integration)/[CD](https://en.wikipedia.org/wiki/Continuous_delivery) project.

* It generates [npmjs](https://www.npmjs.com/) packages at the deployment step (dry run in this case);
* It expects the repository to follow [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).
  * branch develop submits a package marked with the @dev tag;
  * branch release/ deploys with [@alpha, @beta or @next](https://docs.npmjs.com/cli/dist-tag) (release candidate) tags;
  * branch master submits to @latest. Those require manual approval.
* Vulnerability checks by [npm-audit](https://docs.npmjs.com/cli/audit) and [Snyk](https://snyk.io/)
* Compliance with [SemVer](https://semver.org/);
* Tests are implemented with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
* Test coverage assessed with [Istanbul.js](https://istanbul.js.org/).
* Coverage reports by [Codecov](https://codecov.io/) and [Coveralls](https://coveralls.io/)
* Maintainability and code coverage by [Code Climate: Quality](https://codeclimate.com/quality/pricing/)
* Lots of fine grained measurements by [Sonarcloud](https://sonarcloud.io)
* Documentation hosted by [ReadTheDocs](https://readthedocs.org/).

## Up Next

* Spies, Stubs and Mocks by [Sinon.JS](https://sinonjs.org/) (or maybe [JsMockito](https://jsmockito.org/))
* [Greenkeeper](https://greenkeeper.io)

## And now Sonarcloud badges...
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=bugs)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=code_smells)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=coverage)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=ncloc)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=alert_status)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=security_rating)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=sqale_index)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=rcmedeiros_template&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=rcmedeiros_template)
