# SauceDemo UI Test Automation

Automated end-to-end testing of the [SauceDemo](https://www.saucedemo.com/) e-commerce application using **Playwright and TypeScript**.

This project demonstrates UI test automation, cross-browser testing, and the Page Object Model (POM) design pattern.

## Tech Stack

- **Playwright** — End-to-end testing framework
- **TypeScript** — Programming language
- **Node.js** — JavaScript runtime
- **Page Object Model (POM)** — Test automation design pattern
- **Git** — Version control

## Test Coverage

The project currently includes five automated test scenarios.

### Authentication

1. **Successful Login**
   - Log in with valid credentials.
   - Verify navigation to the inventory page.
   - Verify that the inventory container is visible.

2. **Invalid Login**
   - Attempt to log in with invalid credentials.
   - Verify that the user remains on the login page.
   - Verify that the appropriate error message is displayed.

### Shopping Cart

3. **Add a Product to Cart**
   - Log in with valid credentials.
   - Add Sauce Labs Backpack to the cart.
   - Verify that the cart badge displays the correct quantity.
   - Verify that the selected product appears in the cart.

4. **Add Multiple Products to Cart**
   - Add two different products to the cart.
   - Verify that the cart badge displays the correct quantity.
   - Verify that both products appear in the cart.

5. **Remove a Product from Cart**
   - Add a product to the cart.
   - Navigate to the shopping cart.
   - Remove the selected product.
   - Verify that the product is no longer displayed.
   - Verify that the cart badge disappears.

## Project Structure

```text
playwright/
├── tests/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   └── CartPage.ts
│   ├── login.spec.ts
│   └── cart.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Page Object Model

The project uses the Page Object Model design pattern to separate UI interactions from test scenarios.

- **LoginPage** — Handles user authentication.
- **InventoryPage** — Handles adding products to the cart and navigating to the shopping cart.
- **CartPage** — Handles removing products from the cart.

Reusable methods support different input values, making the tests easier to maintain and extend.

## Installation

### Prerequisites

- Node.js
- npm

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

Replace the placeholders with the actual GitHub repository URL and folder name.

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in a Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a Specific Test File

```bash
npx playwright test tests/login.spec.ts
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### View HTML Test Report

```bash
npx playwright show-report
```

## Cross-Browser Testing

The test suite is configured to run in:

- Chromium
- Firefox
- WebKit

All five automated scenarios have been successfully executed across the three browser engines.

**Latest verified local execution: 15 passed tests.**

## Future Improvements

- Expand test coverage for the checkout process.
- Add API testing.
- Implement GitHub Actions for continuous integration.
- Improve test data management.
- Extend the test suite with additional negative scenarios.

## Project Purpose

This is an independent QA automation portfolio project developed to demonstrate practical skills in Playwright, TypeScript, UI testing, test maintainability, and cross-browser validation.

The application under test is the publicly available SauceDemo website.
