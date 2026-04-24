import { Step } from "gauge-ts";
import { expect } from "@playwright/test";
import BaseSteps from "./base.steps";
import { checkoutData } from "../data/checkout.data";
import { generateCheckout } from "../utils/dataFactory";

export default class CheckoutSteps {
  @Step("User proceeds to checkout")
  public async checkout() {
    await BaseSteps.cartPage.proceedToCheckout();
  }

  @Step("User fills checkout info with <type> data")
  public async fill(type: string) {
    let data;

    if (type === "random") {
      data = await generateCheckout();
    } else {
      data = checkoutData[type as keyof typeof checkoutData];
    }

    await BaseSteps.checkoutPage.fillInfo(
      data.firstName,
      data.lastName,
      data.zip,
    );
  }

  @Step("User completes checkout")
  public async complete() {
    await BaseSteps.checkoutPage.continue();
    await BaseSteps.checkoutPage.finish();
  }

  @Step("User continues checkout without filling info")
  public async continueWithoutFilling() {
    await BaseSteps.checkoutPage.continue();
  }

  @Step("Order confirmation should be displayed")
  public async success() {
    const text = await BaseSteps.checkoutPage.getSuccess();
    expect(text).toContain("Thank you");
  }

  @Step("Validation error should be displayed")
  public async error() {
    const err = await BaseSteps.checkoutPage.getError();
    expect(err).toBeTruthy();
  }
}
