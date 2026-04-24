import { chromium, Browser, Page } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Header } from "../pages/components/Header";

class World {
  browser!: Browser;
  page!: Page;

  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;
  header!: Header;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();

    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.header = new Header(this.page);
  }

  async dispose() {
    await this.browser.close();
  }
}

export const world = new World();
