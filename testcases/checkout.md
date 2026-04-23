# Test Cases – Checkout

---

### TC_CHECKOUT_01

**Title:** Proceed to checkout from cart
**Priority:** High

**Steps:**

1. Add product to cart
2. Click cart
3. Click "Checkout"

**Expected Result:**

- User navigates to checkout page

---

### TC_CHECKOUT_02

**Title:** Complete checkout successfully
**Priority:** Critical

**Steps:**

1. Enter valid information
2. Continue
3. Finish

**Expected Result:**

- Order confirmation is displayed

---

### TC_CHECKOUT_03

**Title:** Validation when fields are empty
**Priority:** High

**Steps:**

1. Leave fields empty
2. Click Continue

**Expected Result:**

- Error message is shown

---

### TC_CHECKOUT_04

**Title:** Validation with partially missing fields
**Priority:** High

**Steps:**

1. Fill First Name only
2. Click Continue

**Expected Result:**

- Error message for missing fields

---

### TC_CHECKOUT_05

**Title:** Checkout with long input
**Priority:** Medium

**Steps:**

1. Enter very long text
2. Continue

**Expected Result:**

- No crash or UI break

---

### TC_CHECKOUT_06

**Title:** Special characters input
**Priority:** Medium

**Steps:**

1. Enter special characters
2. Continue

**Expected Result:**

- System handles input properly

---

### TC_CHECKOUT_07

**Title:** Refresh during checkout
**Priority:** Medium

**Steps:**

1. Go to checkout step
2. Refresh page

**Expected Result:**

- Flow is maintained or handled without error

---

### TC_CHECKOUT_08

**Title:** Checkout with empty cart
**Priority:** Medium

**Steps:**

1. Open checkout without items

**Expected Result:**

- User cannot proceed or is redirected appropriately
