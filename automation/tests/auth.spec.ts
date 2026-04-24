import { test, expect } from "../fixtures/testFixture";

test("Login success", async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL(/inventory/);
});
