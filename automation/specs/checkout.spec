# Checkout

tags: regression

## Successful checkout

tags: smoke, regression, e2e

* User navigates to login page
* User logs in with "valid" credentials
* User adds a product to cart
* User navigates to cart
* User proceeds to checkout
* User fills checkout info with "valid" data
* User completes checkout
* Order confirmation should be displayed

## Checkout with empty data

tags: regression

* User navigates to login page
* User logs in with "valid" credentials
* User adds a product to cart
* User navigates to cart
* User proceeds to checkout
* User fills checkout info with "empty" data
* User continues checkout without filling info
* Validation error should be displayed

## Checkout with random data

tags: regression, e2e

* User navigates to login page
* User logs in with "valid" credentials
* User adds a product to cart
* User navigates to cart
* User proceeds to checkout
* User fills checkout info with "random" data
* User completes checkout
* Order confirmation should be displayed
