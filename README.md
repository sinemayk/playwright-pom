# Playwright POM Automation

A modern end-to-end test automation project built with Playwright and TypeScript using the Page Object Model (POM) pattern.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-7A5AF8?style=for-the-badge&logo=allure&logoColor=white)

## Overview

This repository demonstrates how to structure a Playwright automation project with reusable page objects, custom fixtures, dynamic test data, and rich reporting. It is designed as a practical learning project and a foundation for more scalable UI automation suites.

## Features

- Cross-browser test execution with Chromium, Firefox, and WebKit
- Page Object Model architecture for maintainable tests
- Custom Playwright fixtures for shared page objects
- Faker-based test data generation
- Environment variable support for credentials and URLs
- Allure and HTML reporting
- Data-driven testing examples with JSON and Excel sources

## Tech Stack

- Playwright
- TypeScript
- Faker.js
- dotenv
- xlsx
- Allure Playwright

## Project Structure

```text
playwright-pom/
├── fixtures/
│   └── pageFixtures.ts
├── pages/
│   ├── OpenSourcePage.ts
│   ├── RegisterPage.ts
│   ├── SauceInventoryPage.ts
│   ├── SauceLoginPage.ts
│   └── SnackLoginPage.ts
├── tests/
│   ├── day29/
│   ├── day30/
│   ├── day31/
│   └── day32/
├── utils/
│   ├── excelHelper.ts
│   └── testDataHelper.ts
├── allure-results/
├── allure-report/
├── playwright-report/
├── test-data/
├── .env
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
├── package-lock.json
└── node_modules/
```

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18 or later
- npm
- A working browser environment for Playwright

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd playwright-pom
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the project root and add the required environment variables:

```env
SAUCE_DEMO_URL=https://www.saucedemo.com
SAUCE_DEMO_USERNAME=standard_user
SAUCE_DEMO_PASSWORD=secret_sauce

OPENSOURCE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
OPENSOURCE_USERNAME=Admin
OPENSOURCE_PASSWORD=admin123

SNACK_URL=https://snackattack.deployedprojects.xyz/
SNACK_USERNAME=your_username
SNACK_PASSWORD=your_password
```

## Configuration

The project configuration is defined in playwright.config.ts.

Key settings include:

- test directory: ./tests
- parallel execution enabled
- multiple browser projects configured
- trace captured on first retry
- HTML report enabled
- Allure reporter configured

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run a specific folder or group of tests:

```bash
npx playwright test tests/day32
```

Run a single test file:

```bash
npx playwright test tests/day32/03-custom-fixture.spec.ts
```

Run in UI mode:

```bash
npx playwright test --ui
```

Run in headed mode:

```bash
npx playwright test --headed
```

## Useful Scripts

The project includes the following scripts in package.json:

```json
{
  "scripts": {
    "day32": "npx playwright test day32",
    "report": "npx allure generate allure-results --clean -o allure-report && npx allure open"
  }
}
```

Run the day32 suite:

```bash
npm run day32
```

Generate and open the Allure report:

```bash
npm run report
```

## Reporting

The project generates reports in the following folders:

- playwright-report/
- allure-report/
- allure-results/
- test-results/

This makes it easy to review execution history, failures, and browser traces.

## Notes on the Architecture

The repository follows clean automation principles:

- Test logic is separated from page interaction logic
- Reusable selectors and actions are defined in page classes
- Data generation is centralized in utility helpers
- Fixtures reduce repetitive boilerplate in tests

## Sample Test Coverage

The suite includes examples for:

- login flows
- invalid credentials validation
- registration forms
- custom fixture usage
- dynamic data generation
- data-driven scenarios

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Add or update tests
4. Run the relevant Playwright suite
5. Open a pull request with a clear summary

## License

This project is intended for educational and automation practice purposes.
