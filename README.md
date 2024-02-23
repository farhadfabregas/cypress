# Cypress with Gherkin Cucumber

## How to setup
If you have any issues, please go to [Cypress Guide](https://docs.cypress.io/guides/getting-started/installing-cypress) to Installing Cypress and follow the instructions provided in the documentation. The steps will differ depending on your OS. However, the steps below will generally work for Windows

1. Install NodeJs & npm if you do not have them. You can check if you have them installed by running
```bash
node --version
npm --version
```

2. After ensuring you have NodeJs & npm installed, clone this repo into your local directory

3. From within this project directory, run the command
```bash
npm install
```

## How to run
In this project, there are two options for running tests:

Option 1: Running Cypress in 'GUI Mode' allows you to select which scenarios to run and view the results using Cypress's time-travel feature.

```bash
npm run cypress:open
```

Option 2: Running Tests Headless and Generating Reports

Running all scenarios and generating reports using Mochawesome.

```bash
npm run cypress:run
```

## Check HTML Report
In this project, you can see HTML report in mochawesome-report/mochawesome.html
