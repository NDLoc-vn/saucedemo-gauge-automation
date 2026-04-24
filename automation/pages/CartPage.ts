import { BasePage } from "./base/BasePage";

export class CartPage extends BasePage {
  private items = this.page.locator(".cart_item");
  private checkout = this.page.locator('[data-test="checkout"]');

  async getItemCount() {
    return this.items.count();
  }

  async proceedToCheckout() {
    await this.click(this.checkout);
  }
}
