# Test Scenarios

## 1. Authentication

- Verify user can login with valid credentials
- Verify user can logout successfully
- Verify error message is shown for invalid credentials
- Verify user cannot login with empty fields
- Verify system behavior when refreshing after login
- Verify login state when opening multiple tabs
- Verify session is cleared after logout

---

## 2. Product Listing

- Verify product list is displayed after login
- Verify product details are shown correctly
- Verify product list consistency after page refresh
- Verify sorting functionality with different options
- Verify behavior when navigating back from product detail

---

## 3. Cart

- Verify user can add a product to cart
- Verify user can add multiple products to cart
- Verify user can remove product from cart
- Verify cart updates correctly after adding/removing items
- Verify cart retains items after navigation
- Verify cart state after page refresh
- Verify user cannot add the same product multiple times
- Verify behavior when cart is empty

---

## 4. Checkout

- Verify user can proceed to checkout from cart
- Verify user can complete checkout with valid information
- Verify order is completed successfully
- Verify validation error when checkout information is incomplete
- Verify user cannot proceed with invalid input
- Verify checkout behavior with empty cart
- Verify input field boundaries (e.g., very long text)
- Verify special characters in input fields
- Verify user flow interruption (refresh during checkout)
