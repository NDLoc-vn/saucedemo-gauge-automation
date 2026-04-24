import { Step } from "@getgauge/ts";
import { world } from "../core/world";
import { expect } from "@playwright/test";

Step("User logs in", async () => {
  await world.loginPage.open();
  await world.loginPage.login("standard_user", "secret_sauce");
});

Step("User adds product", async () => {
  await world.inventoryPage.addFirstItem();
});

Step("User goes to cart", async () => {
  await world.header.goToCart();
});

Step("User proceeds to checkout", async () => {
  await world.cartPage.proceedToCheckout();
});

Step("User submits empty form", async () => {
  await world.checkoutPage.continue();
});

Step("Error should be shown", async () => {
  const err = await world.checkoutPage.getError();
  expect(err).toContain("First Name");
});
