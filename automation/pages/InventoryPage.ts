import { BasePage } from "./base/BasePage";

export class InventoryPage extends BasePage {
  private items = this.page.locator(".inventory_item");
  private addBtns = this.page.locator(".inventory_item button");
  private cart = this.page.locator(".shopping_cart_link");
  private sortDropdown = this.page.locator(".product_sort_container");

  async getItemCount() {
    return this.items.count();
  }

  async addFirstItem() {
    await this.click(this.addBtns.first());
  }

  async goToCart() {
    await this.click(this.cart);
  }

  async sortBy(value: string) {
    await this.sortDropdown.selectOption(value);
  }
}
