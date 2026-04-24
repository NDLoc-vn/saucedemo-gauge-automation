import { Page } from "@playwright/test";

export class Header {
  constructor(private page: Page) {}

  private cart = this.page.locator(".shopping_cart_link");
  private menu = this.page.locator("#react-burger-menu-btn");
  private logout = this.page.locator("#logout_sidebar_link");

  async goToCart() {
    await this.cart.click();
  }

  async logoutUser() {
    await this.menu.click();
    await this.logout.click();
  }
}
