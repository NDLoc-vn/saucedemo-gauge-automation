import { test, expect } from "../fixtures/testFixture";
import { CartPage } from "../pages/CartPage";
import { Header } from "../pages/components/Header";

test("Add and remove item from cart", async ({
  loginPage,
  inventoryPage,
  page,
}) => {
  const header = new Header(page);
  const cart = new CartPage(page);

  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addFirstItem();
  await header.goToCart();

  expect(await cart.getItemCount()).toBe(1);

  await cart.removeItem();

  expect(await cart.getItemCount()).toBe(0);
});
