import { BasePage } from "./base/BasePage";

export class CheckoutPage extends BasePage {
  private firstName = this.page.locator("#first-name");
  private lastName = this.page.locator("#last-name");
  private postalCode = this.page.locator("#postal-code");
  private continueBtn = this.page.locator("#continue");
  private finishBtn = this.page.locator("#finish");
  private successMsg = this.page.locator(".complete-header");
  private error = this.page.locator('[data-test="error"]');

  async fillInfo(first: string, last: string, zip: string) {
    await this.fill(this.firstName, first);
    await this.fill(this.lastName, last);
    await this.fill(this.postalCode, zip);
  }

  async continue() {
    await this.click(this.continueBtn);
  }

  async finish() {
    await this.click(this.finishBtn);
  }

  async getSuccessMessage() {
    return this.getText(this.successMsg);
  }

  async getError() {
    return this.getText(this.error);
  }
}
