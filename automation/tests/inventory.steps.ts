import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";

export default class InventorySteps {
  @Step("Product list should be displayed")
  public async verifyList() {
    const count = await BaseSteps.inventoryPage.getItemCount();
    expect(count).toBeGreaterThan(0);
  }

  @Step("Each product should have name, price, and add button")
  public async verifyProductUI() {
    const items = await BaseSteps.inventoryPage.getAllItems();

    for (const item of items) {
      expect(item.name).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.hasAddButton).toBeTruthy();
    }
  }

  @Step("User sorts products by <type>")
  public async sort(type: string) {
    const map: Record<string, string> = {
      "price-low-high": "lohi",
      "price-high-low": "hilo",
    };

    await BaseSteps.inventoryPage.sortBy(map[type]);
  }

  @Step("Product prices should be sorted ascending")
  public async verifySortingAscending() {
    const prices = await BaseSteps.inventoryPage.getPrices();
    const sorted = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sorted);
  }
}
