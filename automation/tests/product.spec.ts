import { test, expect } from "../fixtures/testFixture";

test("Product list displays", async ({ loginPage, inventoryPage }) => {
  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  const count = await inventoryPage.getItemCount();
  expect(count).toBeGreaterThan(0);
});
