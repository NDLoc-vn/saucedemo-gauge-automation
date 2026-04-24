import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async click(locator: Locator) {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }
}
