# Playwright POM Automation

![Playwright Tests](https://github.com/sinemayk/playwright-pom/actions/workflows/playwright.yml/badge.svg)

📊 [Canlı Test Raporu](https://sinemayk.github.io/playwright-pom/)


This project is a UI automation test setup built with Playwright + TypeScript using the Page Object Model (POM) approach. It includes sample scenarios for Sauce Demo, OrangeHRM, and other demo applications.

## Overview

- UI automation with Playwright
- Page Object Model structure
- Custom fixture usage
- Data-driven testing with JSON and Excel
- Dynamic user data generation with Faker
- HTML and Allure reporting
- GitHub Actions CI workflow

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
├── .github/
│   └── workflows/
│       └── playwright.yml
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
├── test-data/
│   └── login-test-data.json
├── allure-results/
├── allure-report/
├── playwright-report/
├── test-results/
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── package-lock.json
```

## Example Test Coverage

This project includes examples for:

- Sauce Demo login flow
- Inventory page validation
- Invalid username/password scenarios
- OrangeHRM open-source login
- LambdaTest registration form test
- Random user generation with Faker
- Data-driven login tests from JSON
- Excel-based data usage
- Reusable page objects via custom fixtures

## How It Works

The test logic is separated from page interactions. Each page has its own Page Object class inside the `pages/` directory, and repeated test setup is centralized through custom fixtures in `fixtures/`.

Examples:

- `SauceLoginPage` → login screen operations
- `SauceInventoryPage` → product list validations
- `RegisterPage` → registration form actions
- `OpenSourcePage` → OrangeHRM login flow

## Requirements

- Node.js 18+
- npm
- Playwright browser dependencies

## Installation

```bash
npm install
npx playwright install --with-deps
```

## Environment Variables

Some tests read environment variables using `dotenv`. Create a `.env` file in the project root and define the following variables:

```env
SAUCE_DEMO_URL=https://www.saucedemo.com
SAUCE_DEMO_USERNAME=your_username
SAUCE_DEMO_PASSWORD=your_password
OPENSOURCE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
OPENSOURCE_USERNAME=your_username
OPENSOURCE_PASSWORD=your_password
SNACK_URL=your_snack_url
SNACK_USERNAME=your_username
SNACK_PASSWORD=your_password
BASE_URL=https://www.saucedemo.com
```

Note: In CI, these values are stored as GitHub Secrets and used via GitHub Actions.

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run a specific folder:

```bash
npx playwright test tests/day31
```

Run a single file:

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

## Scripts

The following scripts are available in `package.json`:

```bash
npm run day32
npm run report
```

`day32` runs a specific test group, and `report` generates and opens the Allure report.

## Reporting

The project generates the following report outputs:

- `playwright-report/`
- `allure-results/`
- `allure-report/`
- `test-results/`

The configuration in `playwright.config.ts` includes both HTML and Allure reporting.

## CI/CD

The GitHub Actions workflow is defined in `.github/workflows/playwright.yml`. It includes:

- Node setup
- dependency installation
- Playwright browser installation
- test execution
- Playwright report publishing
- Allure results deployment to GitHub Pages

## Example Usage

```ts
import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

test("login test", async ({ page }) => {
  const loginPage = new SauceLoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
```
## Related Projects
This repo is the part of a three-part Playwright learning series that focuses on the Page Object Model.
- [playwright_code](https://github.com/sinemayk/playwright_code) — Advanced fixture/auth strategies and API tests
- [playwright_bdd](https://github.com/sinemayk/playwright_bdd) — Business-Driven Scenarios with BDD/Gherkin
  
## Notes

This is an educational and sample Playwright workspace focused on learning POM structure, data-driven testing, custom fixture design, and reporting workflows.
