import { BasePage } from "./base/BasePage";

export class CartPage extends BasePage {
  private items = this.page.locator(".cart_item");
  private removeBtn = this.page.locator('button:has-text("Remove")');
  private checkoutBtn = this.page.locator('[data-test="checkout"]');

  async getItemCount() {
    return this.items.count();
  }

  async removeItem() {
    await this.click(this.removeBtn.first());
  }

  async proceedToCheckout() {
    await this.click(this.checkoutBtn);
  }
}
