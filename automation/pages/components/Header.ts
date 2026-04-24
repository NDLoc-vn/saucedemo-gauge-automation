import { Page } from "@playwright/test";

export class Header {
  constructor(private page: Page) {}

  private cart = this.page.locator(".shopping_cart_link");

  async goToCart() {
    await this.cart.click();
  }
}
