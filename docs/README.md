# CircleCI 2.1 Usage

* [Introduction](#introduction)
* [Requirements](#requirements)
* [Usage](#usage)
  * [Running the app](#running-the-app)
  * [Using the API](#using-the-api)
* [Walkthrough](#walkthrough)

## Introduction

How to setup Continuous Integration (CI) via CircleCI.

* https://app.circleci.com/projects/project-setup/github/seriouslysean/circle-ci-usage
* https://circle-ci-usage.herokuapp.com/

## Requirements

* [Node](https://nodejs.org/) (version `>=10.13.0`)
* [NPM](https://www.npmjs.com/get-npm) (version `>=6.4.1`)
* [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli)

## Usage

### Running the app

* Run `npm ci` to install the required packages
* Run `npm run start` to run the server (port `8080` locally or `5000` via `heroku local`)

### Using the API

The routes can be tested via the project hosted on Heroku, http://circle-ci-usage.herokuapp.com/.

* Addition
  * http://circle-ci-usage.herokuapp.com/add/1/2
  * `{ answer: 3 }`
* Subtraction
  * http://circle-ci-usage.herokuapp.com/subtract/2/1
  * `{ answer: 1 }`
* Multiplication
  * http://circle-ci-usage.herokuapp.com/multiply/2/2
  * `{ answer: 4 }`

## Walkthrough

For more information, [see the guide](./Walkthrough.md).
