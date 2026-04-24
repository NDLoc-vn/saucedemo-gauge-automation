import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";

export default class CartSteps {
  @Step("User adds a product to cart")
  public async addProduct() {
    await BaseSteps.inventoryPage.addFirstItem();
  }

  @Step("Cart badge should show <count> item")
  public async verifyBadge(count: number) {
    const badge = await BaseSteps.page
      .locator(".shopping_cart_badge")
      .textContent();

    expect(Number(badge)).toBe(Number(count));
  }

  @Step("User navigates to cart")
  public async goToCart() {
    await BaseSteps.header.goToCart();
  }

  @Step("User removes product from cart")
  public async remove() {
    await BaseSteps.cartPage.removeItem();
  }

  @Step("Cart should be empty")
  public async emptyCart() {
    const count = await BaseSteps.cartPage.getItemCount();
    expect(count).toBe(0);
  }
}
