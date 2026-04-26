# 📌 SauceDemo QA Project

End-to-end QA project covering **Manual Testing + Automation Testing (Playwright + Gauge) + CI/CD pipeline**

---

## 🎯 Objective

Validate core e-commerce flows of SauceDemo:

- Authentication (login/logout)
- Product listing
- Cart management
- Checkout process

---

## 🧩 Project Scope

### ✅ In Scope

- Functional testing (UI)
- End-to-end testing
- Automation (critical flows)
- CI/CD integration

### ❌ Out of Scope

- Performance testing
- Security testing
- Backend API testing (intentionally skipped)

---

## 🏗️ Project Structure

```
.
├── docs/
│   └── test-strategy.md
├── testcases/
│   ├── scenarios.md
│   └── test-cases.md
├── automation/
│   ├── pages/                # Page Object Model
│   ├── tests/                # Step definitions (Gauge)
│   ├── specs/                # Test specifications
│   ├── data/                 # Test data
│   ├── utils/                # Helpers (data factory, logger)
│   ├── reports/              # HTML reports
│   └── .github/workflows/
│       └── ci.yml            # CI pipeline
```

---

## 🧠 Test Strategy

Detailed in:
`docs/test-strategy.md`

### Key approach:

- Manual → define scenarios & test cases
- Automation → cover critical flows only
- CI → validate system continuously

---

## 🧪 Test Coverage

### Core flows (E2E)

- Login
- Add to cart
- Checkout

---

## 🏷️ Tag Strategy

| Tag          | Purpose           | When to run       |
| ------------ | ----------------- | ----------------- |
| `smoke`      | Critical flows    | Every PR / push   |
| `regression` | Full test suite   | Manual / nightly  |
| `e2e`        | Full user journey | Optional grouping |

---

## ⚙️ Automation Framework

### Stack

- Framework: Gauge
- Automation: Playwright
- Language: TypeScript

---

## 🤔 Why Gauge + Playwright?

### Gauge

- BDD-style specs → readable for stakeholders
- Separation of spec & implementation
- Tag-based execution → flexible CI

### Playwright

- Fast and stable automation
- Auto-waiting → reduce flaky tests
- Cross-browser ready

---

## 🏗️ Design Pattern

### Page Object Model (POM)

Each page contains:

- Locators
- Actions
- Assertions

**Benefits:**

- Reusability
- Maintainability
- Clean test logic

---

## 🧱 Base Step Design

- Centralized browser & page setup
- Shared state via static properties

**Trade-off:**

- Simpler setup
- Less flexible than DI-based approach

---

## 🧾 Logging Strategy

Custom logger implemented:

- Step-level logging
- Action-level logging
- Timestamped output

**Purpose:**

- Easier debugging
- Clear CI logs

---

## 🚀 CI/CD Pipeline

Implemented with GitHub Actions

---

## 🔄 Pipeline Design (Multi-layer)

### 1. Smoke Tests (Fast Feedback)

Triggered on:

- `push`
- `pull_request`

```bash
gauge run specs --tags smoke
```

**Purpose:**

- Validate critical flows
- Fail fast

---

### 2. Regression Tests (Manual)

Triggered via:

- `workflow_dispatch` (manual run on GitHub)

**Purpose:**

- Full system validation

---

### 3. Nightly Regression

Scheduled run:

```yaml
cron: "0 17 * * *"
```

Runs at:

- 00:00 Vietnam time

**Purpose:**

- Detect hidden regressions
- Long-running validation

---

## 📊 Reports

- HTML reports generated automatically
- Uploaded as CI artifacts

---

## 🧪 How to Run Tests

### Local

```bash
cd automation
npm install
npx playwright install
gauge run specs
```

### Run by tag

```bash
gauge run specs --tags smoke
gauge run specs --tags regression
```

### CI

- Auto: smoke tests
- Manual: regression
- Nightly: regression

---

## 💡 Key Decisions & Trade-offs

### Why only smoke in CI?

- Fast feedback
- Avoid long execution per commit

### Why regression manual + nightly?

- Expensive to run
- Still ensures full coverage regularly

### Why no API testing?

- SauceDemo does not expose stable public API
- Focus on UI E2E flows

---

## 📈 What This Project Demonstrates

- Real QA workflow
- Test strategy thinking
- Automation architecture
- CI/CD integration
- Maintainable design

---

## 🔥 Future Improvements

- Add API testing
- Add visual testing
- Add parallel execution
- Add retry for flaky tests

---

## 👤 Author

QA Engineer focused on:

- Automation
- Test strategy
- CI/CD
