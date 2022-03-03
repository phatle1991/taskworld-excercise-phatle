# Overview of Cypress

## Design Pattern: We use cypress > support > commands to develop shared test steps
Cypress does not recommend using the Page Object Model pattern that most folk will be used to from the Selenium based
frameworks (see the article by Martin Fowler [Page Object](https://martinfowler.com/bliki/PageObject.html) ) the 
preferred option is to use Cypress Custom Commands.


# Installing Cypress from Scratch
Create a project directory
Open a Terminal in the project root directory

`npm init`

`npm install cypress --save-dev`

Further details see [Cypressio npm install](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install)

## How to run test cases

You can now open the Cypress console by running:
`npx cypress run --browser chrome`

Environment variables can be added via a cypress.env.json file and accessed
within the code so
 
`Cypress.env('keyValue')`
