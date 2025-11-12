# Cypress E2E Framework

## Description
This is an end-to-end (E2E) testing framework built using Cypress. The framework is designed to test web applications by simulating user interactions and verifying the expected outcomes. It follows the **Page Object Model (POM)** design pattern, which promotes reusability, maintainability, and scalability of test scripts. The framework is written in **TypeScript** to leverage static typing and modern JavaScript features.

## Features
- **Cypress**: A fast, reliable, and easy-to-use testing tool for modern web applications.
- **TypeScript**: Ensures type safety and better code maintainability.
- **Page Object Model (POM)**: Organizes locators and methods for interacting with web pages into separate classes.
- **Cucumber Integration**: Supports BDD-style test cases using Gherkin syntax.
- **Allure Reports**: Generates detailed and interactive test execution reports.

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A modern web browser (e.g., Chrome, Edge)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/marianamon/movie-search-cypress-framework.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cypress-e2e-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Project Structure
- `e2e/cypress/pages/`: Contains Page Object classes for different pages.
- `e2e/cypress/e2e/`: Contains feature files written in Gherkin syntax.
- `e2e/cypress/integration/`: Contains test scripts.
- `e2e/cypress/plugins/`: Contains custom Cypress plugins.
- `e2e/cypress/support/`: Contains custom commands and step definitions.
- `e2e/cypress/report/`: Stores test execution reports.

## Commands
### Open Cypress Test Runner
```bash
npx cypress open
```

### Run Tests in Headless Mode
```bash
npx cypress run
```

### Generate Allure Report
1. Run tests with Allure results:
   ```bash
   npx cypress run --env allure=true
   ```
2. Generate the report:
   ```bash
   allure generate e2e/cypress/report/allure-result -o e2e/cypress/report/allure-report --clean
   ```
3. Open the report:
   ```bash
   allure open e2e/cypress/report/allure-report
   ```

### Run Specific Feature File
```bash
npx cypress run --spec "e2e/cypress/e2e/movie-search/movie-search.feature"
```

## Environment Variables
Environment variables are stored in the `.env` file. Update the following variables as needed:
```env

CYPRESS_AUTH_BASE_URL=
```

## Writing Tests
1. Define the feature in a `.feature` file using Gherkin syntax.
2. Implement step definitions in `e2e/cypress/support/step_definitions/`.
3. Use Page Object classes from `e2e/cypress/pages/` to interact with the application.

## Example
### Feature File
```gherkin
Feature: Movie Search
    Scenario: Search for a movie
        Given that the user is in the "Movie Search" page
        When the user enters the movie "Romantic" to the search bar
        And the user clicks on the "Search" button
        Then the movies are returned to the movie list
```

### Step Definition
```typescript
import { MovieSearchPage } from '../../pages/movie-search.page';
const movieSearchPage = new MovieSearchPage();

Given('that the user is in the {string} page', (pageName) => {
    cy.visit('/movie-search');
});

When('the user enters the movie {string} to the search bar', (movieName) => {
    cy.get(movieSearchPage.searchMoviesInput).type(movieName);
});

Then('the movies are returned to the movie list', () => {
    cy.get('.movie-list').should('be.visible');
});
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Create a pull request.

## License
This project is licensed under the MIT License.
