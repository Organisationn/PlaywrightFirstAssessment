🚀 PlaywrightFirstAssessment

A modern end-to-end test automation framework built using Playwright, designed to validate real-world user workflows with scalable architecture, data-driven testing, and clean code practices.

## 📌 Project Overview

This project demonstrates a robust UI automation framework using:

This framework demonstrates real-world automation practices including CI/CD integration, environment variable management, and database-driven testing.

 ✅ Page Object Model (POM) for maintainability
 ✅ Data-driven testing using JSON and Database
 ✅ Environment variable management using `.env` and `.env.example`
 ✅ Browser configuration is scalable and can be extended to support cross-browser execution (Chromium, Firefox, WebKit)
 ✅ Clean and modular test design

The framework is structured to simulate real-world automation needs and can be easily extended for enterprise-level applications.

## 🏗️ Framework Architecture

PlaywrightFirstAssessment/
│
├── pages/                 # Page Object Model (POM) classes
│   ├── loginPage.js
│   ├── homePage.js
│   ├── cartPage.js
│   └── checkoutPage.js
│
├── tests/                 # Test specifications
│   ├── checkoutDb.spec.js
│   └── checkoutJson.spec.js
│
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies & scripts
└── README.md              # Project documentation

## 🔥 Key Features

✅ Page Object Model (POM)
* Encapsulates UI elements and actions in reusable classes
* Improves readability, reusability, and maintenance
* Separates test logic from UI interactions

✅ Data-Driven Testing

📄 JSON-Based Testing
* Test data stored in external JSON files
* Enables easy modification of test scenarios without code changes

🗄️ Database-Based Testing
* Fetches test data dynamically from a database
* Simulates real-world enterprise testing scenarios
* Ensures validation against live or structured data sources

✅ Browser Configuration
* Currently configured to run on Chromium for stable and fast execution
* Framework is designed to support cross-browser execution (Chromium, Firefox, WebKit) via Playwright configuration

✅ Playwright Advantages Used
* Auto-waiting mechanism (reduces flaky tests)
* Fast parallel execution
* Built-in test runner and assertions

## ⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/Organisationn/PlaywrightFirstAssessment.git
cd PlaywrightFirstAssessment

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

## ▶️ Running Tests
Run all tests:
npx playwright test

Run specific test:
npx playwright test tests/checkoutJson.spec.js

Run in headed mode:
npx playwright test --headed

## 🔄 CI/CD Integration
The framework is integrated with GitHub Actions to enable automated test execution on every code push and pull request.

* Executes Playwright tests in a CI environment
* Uses a MySQL service container for database-driven testing
* Seeds test data dynamically before execution
* Stores sensitive configuration using GitHub Secrets
* Uploads HTML test reports as build artifacts

## 📊 Reporting
The framework uses Playwright's built-in HTML reporter for test execution results.

* Generates detailed HTML reports after test execution
* Includes test steps, logs, and execution status
* Reports are automatically uploaded as artifacts in CI runs

## 📊 Test Execution Flow
1. Test starts from `tests/`
2. Calls respective Page Object methods
3. Interacts with browser via Playwright
4. Executes assertions for validation
5. Generates execution results

## 🧠 Design Principles
* Clean code structure
* Reusability via POM
* Separation of concerns
* Scalable and maintainable design

## 🚀 Future Enhancements (Scalable Design)
* Support for multiple environments (QA, staging, production) using dynamic configuration
* Implementation of advanced Playwright fixtures for reusable test setup and teardown

## 💼 Resume Highlights
* Designed and implemented a Playwright-based automation framework
* Applied Page Object Model (POM) for scalable test design
* Implemented data-driven testing using JSON and database
* Designed scalable browser configuration with support for cross-browser execution
* Executed automation suite using CI tools like GitHub Actions and Jenkins
* Managed environment configuration using .env and secrets
* Built a maintainable and extensible automation solution

## 🤝 Conclusion
This project reflects a practical, industry-relevant automation framework that balances simplicity and scalability, making it ideal for real-world QA automation scenarios.

⭐ If you like this project, consider giving it a star!
