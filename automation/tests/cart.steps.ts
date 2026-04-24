import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { Logger } from "../utils/logger";

export default class CartSteps {
  @Step("User adds a product to cart")
  public async addProduct() {
    Logger.step("Add product to cart");

    await BaseSteps.inventoryPage.addFirstItem();

    Logger.action("Product added");
  }

  @Step("Cart badge should show <count> item")
  public async verifyBadge(count: number) {
    Logger.step("Verify cart badge");

    const badgeText = await BaseSteps.page
      .locator(".shopping_cart_badge")
      .textContent();

    const actual = Number(badgeText ?? 0);

    expect(actual, `Expected cart badge ${count} but got ${actual}`).toBe(
      Number(count),
    );

    Logger.action(`Badge value: ${actual}`);
  }

  @Step("User navigates to cart")
  public async goToCart() {
    Logger.step("Navigate to cart");

    await BaseSteps.header.goToCart();

    Logger.action("Cart opened");
  }

  @Step("User removes product from cart")
  public async remove() {
    Logger.step("Remove product from cart");

    await BaseSteps.cartPage.removeItem();

    Logger.action("Item removed");
  }

  @Step("Cart should be empty")
  public async emptyCart() {
    Logger.step("Verify cart empty");

    const count = await BaseSteps.cartPage.getItemCount();

    expect(count, `Expected empty cart but got ${count} items`).toBe(0);

    Logger.action("Cart is empty");
  }
}
