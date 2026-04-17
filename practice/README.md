# Swag Playwright Practice

This project is a lightweight end-to-end automation practice suite using Playwright and TypeScript, targeting the Sauce Demo site (`https://www.saucedemo.com`).

## What this project highlights

- Page Object Model structure with clear separation
- Realistic cart and checkout user flows (happy paths and negative validations)
- Form-validation coverage for checkout step one:
  - empty first name
  - empty last name
  - empty postal code
- Login validation coverage for a locked-out user
- End-to-end checkout verification with multiple item combinations (including all configured items)
- CI/CD set up on Git Action

## Quick start

1. Install dependencies:

```bash
yarn install
```

2. Run tests:

```bash
yarn headless-test
```

3. Run with browser UI:

```bash
yarn headed-test
```

4. Open the HTML report:

```bash
yarn report
```

5. Generate and open Allure report:

```bash
yarn report:allure:generate
yarn report:allure:open
```

## CI/CD

GitHub Actions is configured in `.github/workflows/playwright-ci.yml`.

- Triggers on `push`, `pull_request`, and manual runs (`workflow_dispatch`)
- Installs dependencies and Playwright browser
- Runs the Playwright suite in headless mode
- Uploads these artifacts for each run:
  - Playwright HTML report (`playwright-report`)
  - Allure raw results (`allure-results`)
  - Allure generated report (`allure-report`)

This gives quick feedback on each PR and makes reports easy to download and inspect.

## Notes

- Playwright config is in `playwright.config.ts`.
- Base URL is set to Sauce Demo and tests are located in `Swag/specs`.
- CI runs on Chromium in GitHub Actions, while local runs use Google Chrome channel.
