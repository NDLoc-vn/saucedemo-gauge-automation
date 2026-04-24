import { Page, Locator } from "@playwright/test";

export class Header {
  private cartIcon: Locator;
  private menuBtn: Locator;
  private logoutBtn: Locator;

  constructor(private page: Page) {
    this.cartIcon = page.locator(".shopping_cart_link");
    this.menuBtn = page.locator("#react-burger-menu-btn");
    this.logoutBtn = page.locator("#logout_sidebar_link");
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async openMenu() {
    await this.menuBtn.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutBtn.click();
  }
}
