# CircleCI 2.1 Usage

* **Overview**
  * [Introduction](#introduction)
  * [Requirements](#requirements)
  * [Usage](#usage)
* [Walkthrough](./Walkthrough.md)
* [Other Dependencies](./Other-Dependencies.md)

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

* Addition
  * http://localhost:8080/add/:number1/:number2
* Subtraction
  * http://localhost:8080/subtract/:number1/:number2
* Multiplication
  * http://localhost:8080/multiply/:number1/:number2
