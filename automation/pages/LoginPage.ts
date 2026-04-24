import { BasePage } from "./base/BasePage";

export class LoginPage extends BasePage {
  username = this.page.locator("#user-name");
  password = this.page.locator("#password");
  loginBtn = this.page.locator("#login-button");
  error = this.page.locator('[data-test="error"]');

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
