import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { users } from "../data/user.data";
import { Logger } from "../utils/logger";

export default class AuthSteps {
  @Step("User navigates to login page")
  public async openLogin() {
    Logger.step("Navigate to login page");

    await BaseSteps.loginPage.open();

    Logger.action("Login page opened");
  }

  @Step("User logs in with <type> credentials")
  public async login(type: string) {
    Logger.step(`Login with ${type} credentials`);

    const user = users[type as keyof typeof users];

    if (!user) {
      throw new Error(`Invalid user type: ${type}`);
    }

    Logger.action(`Username: ${user.username}`);

    await BaseSteps.loginPage.login(user.username, user.password);
  }

  @Step("User should be redirected to inventory page")
  public async verifyInventory() {
    Logger.step("Verify redirect to inventory");

    const url = BaseSteps.page.url();

    expect(
      url.includes("inventory"),
      `Expected URL to contain 'inventory' but got: ${url}`,
    ).toBeTruthy();

    Logger.action("Inventory page verified");
  }

  @Step("Error message should be displayed")
  public async verifyError() {
    Logger.step("Verify login error message");

    const err = await BaseSteps.loginPage.getError();

    expect(
      err,
      "Expected error message to be displayed but got empty/null",
    ).toBeTruthy();

    Logger.action(`Error displayed: ${err}`);
  }
}
