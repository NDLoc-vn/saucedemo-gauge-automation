import { BasePage } from "./base/BasePage";

export class InventoryPage extends BasePage {
  private items = this.page.locator(".inventory_item");
  private addBtns = this.page.locator(".inventory_item button");

  async addFirstItem() {
    await this.click(this.addBtns.first());
  }

  async getItemCount() {
    return this.items.count();
  }
}
