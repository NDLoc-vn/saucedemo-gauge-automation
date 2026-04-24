import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { checkoutData } from "../data/checkout.data";
import { generateCheckout } from "../utils/dataFactory";
import { Logger } from "../utils/logger";

export default class CheckoutSteps {
  @Step("User proceeds to checkout")
  public async checkout() {
    Logger.step("Proceed to checkout");

    await BaseSteps.cartPage.proceedToCheckout();

    Logger.action("Checkout started");
  }

  @Step("User fills checkout info with <type> data")
  public async fill(type: string) {
    Logger.step(`Fill checkout form: ${type}`);

    let data;

    if (type === "random") {
      data = await generateCheckout();
    } else {
      data = checkoutData[type as keyof typeof checkoutData];
    }

    if (!data) {
      throw new Error(`Invalid checkout data type: ${type}`);
    }

    await BaseSteps.checkoutPage.fillInfo(
      data.firstName,
      data.lastName,
      data.zip,
    );

    Logger.action(`Filled: ${data.firstName} ${data.lastName}`);
  }

  @Step("User completes checkout")
  public async complete() {
    Logger.step("Complete checkout");

    await BaseSteps.checkoutPage.continue();
    await BaseSteps.checkoutPage.finish();

    Logger.action("Checkout completed");
  }

  @Step("User continues checkout without filling info")
  public async continueWithoutFilling() {
    Logger.step("Submit empty checkout form");

    await BaseSteps.checkoutPage.continue();

    Logger.action("Submitted empty form");
  }

  @Step("Order confirmation should be displayed")
  public async success() {
    Logger.step("Verify order success");

    const text = await BaseSteps.checkoutPage.getSuccess();

    expect(text, "Expected success message after checkout").toContain(
      "Thank you",
    );

    Logger.action("Order success confirmed");
  }

  @Step("Validation error should be displayed")
  public async error() {
    Logger.step("Verify validation error");

    const err = await BaseSteps.checkoutPage.getError();

    expect(
      err,
      "Expected checkout validation error but none found",
    ).toBeTruthy();

    Logger.action(`Error shown: ${err}`);
  }
}
