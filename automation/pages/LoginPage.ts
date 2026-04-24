import { Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class LoginPage extends BasePage {
  private username = this.page.locator("#user-name");
  private password = this.page.locator("#password");
  private loginBtn = this.page.locator("#login-button");
  private error = this.page.locator('[data-test="error"]');

  async open() {
    await this.visit("/");
  }

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }

  async getError() {
    return this.getText(this.error);
  }
}
