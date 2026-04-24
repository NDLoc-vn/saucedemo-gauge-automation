import { BasePage } from "./base/BasePage";

export class CheckoutPage extends BasePage {
  private first = this.page.locator("#first-name");
  private continueBtn = this.page.locator("#continue");
  private error = this.page.locator('[data-test="error"]');

  async fillFirstName(name: string) {
    await this.fill(this.first, name);
  }

  async continue() {
    await this.click(this.continueBtn);
  }

  async getError() {
    return this.error.textContent();
  }
}
