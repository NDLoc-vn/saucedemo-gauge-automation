import { Step, BeforeScenario, AfterScenario } from "gauge-ts";
import { chromium, Browser, Page, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Header } from "../pages/components/Header";

import { users } from "../data/user.data";
import { checkoutData } from "../data/checkout.data";
import { generateCheckout } from "../utils/dataFactory";

export default class StepImplementation {
  private browser!: Browser;
  private page!: Page;

  private loginPage!: LoginPage;
  private inventoryPage!: InventoryPage;
  private cartPage!: CartPage;
  private checkoutPage!: CheckoutPage;
  private header!: Header;

  // ===== HOOKS =====

  @BeforeScenario()
  public async setup() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();

    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.header = new Header(this.page);
  }

  @AfterScenario()
  public async teardown() {
    await this.browser.close();
  }

  // ===== NAVIGATION =====

  @Step("User navigates to login page")
  public async openLogin() {
    await this.loginPage.open();
  }

  // ===== AUTH =====

  @Step("User logs in with <type> credentials")
  public async login(type: string) {
    const user = users[type as keyof typeof users];
    await this.loginPage.login(user.username, user.password);
  }

  @Step("User should be redirected to inventory page")
  public async verifyInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  @Step("Error message should be displayed")
  public async verifyLoginError() {
    const err = await this.loginPage.getError();
    expect(err).toBeTruthy();
  }

  // ===== PRODUCT =====

  @Step("User adds a product to cart")
  public async addProduct() {
    await this.inventoryPage.addFirstItem();
  }

  @Step("Cart badge should show <count> item")
  public async verifyCartBadge(count: number) {
    const badge = await this.page.locator(".shopping_cart_badge").textContent();
    expect(Number(badge)).toBe(count);
  }

  // ===== CART =====

  @Step("User navigates to cart")
  public async goToCart() {
    await this.header.goToCart();
  }

  @Step("User removes product from cart")
  public async removeProduct() {
    await this.cartPage.removeItem();
  }

  @Step("Cart should be empty")
  public async verifyEmptyCart() {
    const count = await this.cartPage.getItemCount();
    expect(count).toBe(0);
  }

  @Step("User proceeds to checkout")
  public async goCheckout() {
    await this.cartPage.proceedToCheckout();
  }

  // ===== CHECKOUT =====

  @Step("User fills checkout info with <type> data")
  public async fillCheckout(type: string) {
    let data;

    if (type === "random") {
      data = generateCheckout();
    } else {
      data = checkoutData[type as keyof typeof checkoutData];
    }

    await this.checkoutPage.fillInfo(data.firstName, data.lastName, data.zip);
  }

  @Step("User completes checkout")
  public async completeCheckout() {
    await this.checkoutPage.continue();
    await this.checkoutPage.finish();
  }

  @Step("Order confirmation should be displayed")
  public async verifySuccess() {
    const text = await this.checkoutPage.getSuccess();
    expect(text).toContain("Thank you");
  }

  @Step("Validation error should be displayed")
  public async verifyCheckoutError() {
    const err = await this.checkoutPage.getError();
    expect(err).toBeTruthy();
  }
}
