import { BasePage } from "./base/BasePage";

export class InventoryPage extends BasePage {
  items = this.page.locator(".inventory_item");
  addBtns = this.page.locator(".inventory_item button");
  prices = this.page.locator(".inventory_item_price");
  sort = this.page.locator(".product_sort_container");

  async addFirstItem() {
    await this.click(this.addBtns.first());
  }

  async getItemCount() {
    return this.items.count();
  }

  async sortBy(value: string) {
    await this.sort.selectOption(value);
  }

  async getPrices() {
    const texts = await this.prices.allTextContents();
    return texts.map((t) => parseFloat(t.replace("$", "")));
  }
}
