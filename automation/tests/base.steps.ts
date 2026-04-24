import { BeforeScenario, AfterScenario, Step } from "gauge-ts";
import { chromium, Browser, Page } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Header } from "../pages/components/Header";

export default class BaseSteps {
  public static browser: Browser;
  public static page: Page;

  public static loginPage: LoginPage;
  public static inventoryPage: InventoryPage;
  public static cartPage: CartPage;
  public static checkoutPage: CheckoutPage;
  public static header: Header;

  @Step("Initialize test context")
  public async dummy() {}

  @BeforeScenario()
  public async setup() {
    BaseSteps.browser = await chromium.launch();
    BaseSteps.page = await BaseSteps.browser.newPage();

    BaseSteps.loginPage = new LoginPage(BaseSteps.page);
    BaseSteps.inventoryPage = new InventoryPage(BaseSteps.page);
    BaseSteps.cartPage = new CartPage(BaseSteps.page);
    BaseSteps.checkoutPage = new CheckoutPage(BaseSteps.page);
    BaseSteps.header = new Header(BaseSteps.page);
  }

  @AfterScenario()
  public async teardown() {
    await BaseSteps.browser.close();
  }
}
