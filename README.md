# 🧪 Swag Playwright Practice

A lightweight end-to-end automation practice suite using **Playwright + TypeScript** for the Sauce Demo app: [https://www.saucedemo.com](https://www.saucedemo.com)

---

## ✨ What This Project Covers

- 🧱 **Page Object Model (POM)** structure for clean test organization
- 🔐 **Login scenarios** including locked-out user validation
- 🛒 **Cart and checkout journeys** with realistic user flows
- ✅ **Checkout Step One field validations**
  - missing first name
  - missing last name
  - missing postal code
- 🔁 **End-to-end purchase verification** across multiple item combinations
- ⚙️ **CI-ready setup** with GitHub Actions support

---

## 🚀 Quick Start

### 1) Install dependencies
```bash
yarn install
```

### 2) Run all tests
```bash
yarn playwright test
```

### 3) Run tests in headed mode
```bash
yarn playwright test --headed
```

### 4) Open Playwright HTML report
```bash
yarn playwright show-report
```

---

## 📁 Suggested Project Structure

- `tests/` - test specs
- `pages/` - page object classes
- `utils/` - helper methods and reusable data
- `playwright.config.ts` - Playwright configuration

---

## 🧠 Why This Repo?

- Practice writing maintainable UI automation
- Learn robust validation and assertion patterns
- Build confidence with real-world Playwright workflows

---