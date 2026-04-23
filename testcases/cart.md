# Test Cases – Cart

---

### TC_CART_01

**Title:** Add product to cart
**Priority:** High

**Steps:**

1. Click "Add to Cart" on a product

**Expected Result:**

- Cart icon shows 1 item

---

### TC_CART_02

**Title:** Add multiple products
**Priority:** High

**Steps:**

1. Add multiple different products

**Expected Result:**

- Cart count reflects correct number

---

### TC_CART_03

**Title:** Remove product from cart
**Priority:** High

**Steps:**

1. Add product
2. Click "Remove"

**Expected Result:**

- Product is removed

---

### TC_CART_04

**Title:** Cart persists after navigation
**Priority:** Medium

**Steps:**

1. Add product
2. Navigate between pages

**Expected Result:**

- Cart retains items

---

### TC_CART_05

**Title:** Cart persists after refresh
**Priority:** Medium

**Steps:**

1. Add product
2. Refresh page

**Expected Result:**

- Cart still contains product

---

### TC_CART_06

**Title:** Prevent adding duplicate product
**Priority:** Medium

**Steps:**

1. Click "Add to Cart"

**Expected Result:**

- Button changes to "Remove"
- Product cannot be added again

---

### TC_CART_07

**Title:** Empty cart behavior
**Priority:** Medium

**Steps:**

1. Open cart with no items

**Expected Result:**

- Cart page shows no products
- No errors occur
