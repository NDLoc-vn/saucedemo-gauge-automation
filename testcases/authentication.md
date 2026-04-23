# Test Cases – Authentication

---

### TC_AUTH_01

**Title:** Login with valid credentials
**Priority:** High

**Steps:**

1. Enter username: standard_user
2. Enter password: secret_sauce
3. Click "Login"

**Expected Result:**

- User is redirected to inventory page

---

### TC_AUTH_02

**Title:** Login with invalid credentials
**Priority:** High

**Steps:**

1. Enter valid username
2. Enter incorrect password
3. Click "Login"

**Expected Result:**

- Error message is displayed
- User remains on login page

---

### TC_AUTH_03

**Title:** Login with empty fields
**Priority:** High

**Steps:**

1. Leave username and password empty
2. Click "Login"

**Expected Result:**

- Error message is displayed

---

### TC_AUTH_04

**Title:** Session persists after refresh
**Priority:** Medium

**Steps:**

1. Login successfully
2. Refresh page

**Expected Result:**

- User remains logged in

---

### TC_AUTH_05

**Title:** Login state across multiple tabs
**Priority:** Medium

**Steps:**

1. Login
2. Open a new tab with inventory page

**Expected Result:**

- User remains logged in in new tab

---

### TC_AUTH_06

**Title:** Logout clears session
**Priority:** High

**Steps:**

1. Login
2. Click Logout
3. Try to access inventory page

**Expected Result:**

- User is redirected to login page
