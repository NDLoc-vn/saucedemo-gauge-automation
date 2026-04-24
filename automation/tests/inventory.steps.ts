import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { Logger } from "../utils/logger";

export default class InventorySteps {
  @Step("Product list should be displayed")
  public async verifyList() {
    Logger.step("Verify product list");

    const count = await BaseSteps.inventoryPage.getItemCount();

    expect(
      count,
      `Expected product count > 0 but got ${count}`,
    ).toBeGreaterThan(0);

    Logger.action(`Product count: ${count}`);
  }

  @Step("Each product should have name, price, and add button")
  public async verifyProductUI() {
    Logger.step("Verify product UI structure");

    const items = await BaseSteps.inventoryPage.getAllItems();

    expect(items.length, "Expected at least 1 product item").toBeGreaterThan(0);

    for (const [index, item] of items.entries()) {
      expect(item.name, `Item ${index} missing name`).toBeTruthy();
      expect(item.price, `Item ${index} invalid price`).toBeGreaterThan(0);
      expect(
        item.hasAddButton,
        `Item ${index} missing add button`,
      ).toBeTruthy();
    }

    Logger.action(`Validated ${items.length} items`);
  }

  @Step("User sorts products by <type>")
  public async sort(type: string) {
    Logger.step(`Sort products: ${type}`);

    const map: Record<string, string> = {
      "price-low-high": "lohi",
      "price-high-low": "hilo",
    };

    const value = map[type];

    if (!value) {
      throw new Error(`Invalid sort type: ${type}`);
    }

    await BaseSteps.inventoryPage.sortBy(value);

    Logger.action(`Applied sort: ${value}`);
  }

  @Step("Product prices should be sorted ascending")
  public async verifySortingAscending() {
    Logger.step("Verify sorting ascending");

    const prices = await BaseSteps.inventoryPage.getPrices();

    const sorted = [...prices].sort((a, b) => a - b);

    expect(
      prices,
      `Expected sorted prices but got ${prices.join(",")}`,
    ).toEqual(sorted);

    Logger.action("Sorting validated");
  }
}
