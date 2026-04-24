import { BasePage } from "./base/BasePage";

export class CartPage extends BasePage {
  items = this.page.locator(".cart_item");
  checkout = this.page.locator('[data-test="checkout"]');
  remove = this.page.locator('button:has-text("Remove")');

  async getItemCount() {
    return this.items.count();
  }

  async removeItem() {
    await this.click(this.remove.first());
  }

  async proceedToCheckout() {
    await this.click(this.checkout);
  }
}
