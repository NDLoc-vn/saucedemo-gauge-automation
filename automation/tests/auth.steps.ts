import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { users } from "../data/user.data";

export default class AuthSteps {
  @Step("User navigates to login page")
  public async openLogin() {
    await BaseSteps.loginPage.open();
  }

  @Step("User logs in with <type> credentials")
  public async login(type: string) {
    const user = users[type as keyof typeof users];
    await BaseSteps.loginPage.login(user.username, user.password);
  }

  @Step("User should be redirected to inventory page")
  public async verifyInventory() {
    await expect(BaseSteps.page).toHaveURL(/inventory/);
  }

  @Step("Error message should be displayed")
  public async verifyError() {
    const err = await BaseSteps.loginPage.getError();
    expect(err).toBeTruthy();
  }
}
