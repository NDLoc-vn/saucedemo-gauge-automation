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

  async getAllItems() {
    const count = await this.items.count();
    const results = [];

    for (let i = 0; i < count; i++) {
      const item = this.items.nth(i);

      const name = await item.locator(".inventory_item_name").textContent();
      const priceText = await item
        .locator(".inventory_item_price")
        .textContent();
      const addButton = item.locator("button");

      results.push({
        name: name?.trim() || "",
        price: Number(priceText?.replace("$", "")),
        hasAddButton: await addButton.isVisible(),
      });
    }

    return results;
  }

  async sortBy(value: string) {
    await this.sort.selectOption(value);
  }

  async getPrices() {
    const texts = await this.prices.allTextContents();
    return texts.map((t) => parseFloat(t.replace("$", "")));
  }
}
