## CYPRESS TESTING PROJECT

Cypress test project to validate e2e scenarios and API tests.


### Requirements
Install node v20.X.

### Installation
Clone this repository:
```bash
git clone git@github.com:monicataisee/test-automation-cypress-e2e-api.git
```

Navigate to the project directory:
```bash
cd test-automation-cypress-e2e-api
````

Install project dependencies:
```bash
npm install
```

### Execution
To run the tests in headless mode (no graphical interface), run the following command:

- MacOs
```bash
npm run cy-run
```

- Windows
```bash
npx cypress run
```

This will run the tests in headless mode and output the results to the directory `cypress/reports`


To run the tests using the graphical interface through Cypress Test Runner, where you can select and run the tests manually. Run the following command:

- MacOs
```bash
npm run cy-open
```

- Windows
```bash
npx cypress open
```

After the cypress interface is displayed, choose the option `E2E Testing`, choose the browser and click on `Start E2E Testing in Chrome` and then run `tests.feature`

### Project Structure
The project is structured as follows:
- `cypress/e2e/tests`: Contains the .feature files where we can see the tests in BDD format. Here is also the file with the step definitions .js
- `cypress/support/pages/Test`: In this folder we have the file responsible for mapping the elements used in the e2e tests. Here we also have the page file where the test actions are performed.
- `cypress/fixtures`: Contains test data files such as JSON.
- `cypress/reports`: Contains test execution results files, these files are generated in headless execution.
- `cypress/screenshots`: Contains screenshots of evidence taken during the execution of the tests. These files are generated in headless execution.

### Testing evidence
To have a better view of the test execution results, on your computer go to the folder where the project is located, navigate to cypress/reports/html and open the index.html file in the browser of your choice

