import { test, expect } from "../fixtures/testFixture";
import { Header } from "../pages/components/Header";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Complete checkout flow", async ({ loginPage, inventoryPage, page }) => {
  const header = new Header(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addFirstItem();
  await header.goToCart();

  await cart.proceedToCheckout();

  await checkout.fillInfo("Test", "User", "12345");
  await checkout.continue();
  await checkout.finish();

  expect(await checkout.getSuccessMessage()).toContain("Thank you");
});

test("Checkout validation error", async ({
  loginPage,
  inventoryPage,
  page,
}) => {
  const header = new Header(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addFirstItem();
  await header.goToCart();

  await cart.proceedToCheckout();
  await checkout.continue();

  expect(await checkout.getError()).toContain("First Name is required");
});
