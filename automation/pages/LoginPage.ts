import { BasePage } from "./base/BasePage";

export class LoginPage extends BasePage {
  private username = this.page.locator("#user-name");
  private password = this.page.locator("#password");
  private loginBtn = this.page.locator("#login-button");
  private error = this.page.locator('[data-test="error"]');

  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(u: string, p: string) {
    await this.fill(this.username, u);
    await this.fill(this.password, p);
    await this.click(this.loginBtn);
  }

  async getError() {
    return this.error.textContent();
  }
}
