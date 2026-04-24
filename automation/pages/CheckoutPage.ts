import { BasePage } from "./base/BasePage";

export class CheckoutPage extends BasePage {
  first = this.page.locator("#first-name");
  last = this.page.locator("#last-name");
  zip = this.page.locator("#postal-code");
  continueBtn = this.page.locator("#continue");
  finishBtn = this.page.locator("#finish");
  success = this.page.locator(".complete-header");
  error = this.page.locator('[data-test="error"]');

  async fillInfo(f: string, l: string, z: string) {
    await this.fill(this.first, f);
    await this.fill(this.last, l);
    await this.fill(this.zip, z);
  }

  async continue() {
    await this.click(this.continueBtn);
  }

  async finish() {
    await this.click(this.finishBtn);
  }

  async getSuccess() {
    return this.success.textContent();
  }

  async getError() {
    return this.error.textContent();
  }
}
