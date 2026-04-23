# Bug ID: BUG_01

## Title

User can access checkout page without items in cart

## Environment

- Browser: Chrome
- OS: Windows
- URL: https://www.saucedemo.com/

## Precondition

- User is logged in
- Cart is empty

## Steps to Reproduce

1. Manually navigate to /checkout-step-one.html
2. Observe the page

## Actual Result

- Checkout page is accessible even though cart is empty

## Expected Result

- User should be redirected to cart page
- Or display message indicating cart is empty

## Severity

Medium

## Priority

High
