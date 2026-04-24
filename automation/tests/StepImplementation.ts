import { Step, BeforeScenario, AfterScenario } from "gauge-ts";
import { chromium, Browser, Page } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Header } from "../pages/components/Header";

export default class StepImplementation {
  private browser!: Browser;
  private page!: Page;

  private loginPage!: LoginPage;
  private inventoryPage!: InventoryPage;
  private cartPage!: CartPage;
  private checkoutPage!: CheckoutPage;
  private header!: Header;

  @BeforeScenario()
  public async beforeScenario() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();

    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.header = new Header(this.page);
  }

  @AfterScenario()
  public async afterScenario() {
    await this.browser.close();
  }

  // ===== AUTH =====

  @Step("User logs in")
  public async login() {
    await this.loginPage.open();
    await this.loginPage.login("standard_user", "secret_sauce");
  }

  @Step("User logs in with invalid credentials")
  public async loginInvalid() {
    await this.loginPage.open();
    await this.loginPage.login("wrong", "wrong");
  }

  // ===== PRODUCT =====

  @Step("User adds product")
  public async addProduct() {
    await this.inventoryPage.addFirstItem();
  }

  // ===== CART =====

  @Step("User goes to cart")
  public async goToCart() {
    await this.header.goToCart();
  }

  @Step("User proceeds to checkout")
  public async checkout() {
    await this.cartPage.proceedToCheckout();
  }

  // ===== CHECKOUT =====

  @Step("User fills info")
  public async fillInfo() {
    await this.checkoutPage.fillInfo("Test", "User", "12345");
  }

  @Step("User submits empty form")
  public async submitEmpty() {
    await this.checkoutPage.continue();
  }

  @Step("User completes checkout")
  public async completeCheckout() {
    await this.checkoutPage.continue();
    await this.checkoutPage.finish();
  }

  // ===== ASSERT =====

  @Step("Order success")
  public async verifySuccess() {
    const text = await this.checkoutPage.getSuccess();
    if (!text?.includes("Thank you")) {
      throw new Error("Order not successful");
    }
  }

  @Step("Error should be shown")
  public async verifyError() {
    const err = await this.loginPage.getError();
    if (!err) {
      throw new Error("Error not shown");
    }
  }
}
