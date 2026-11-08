import type { Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async removeProduct(productName: string) {
    const locatorName = productName.toLowerCase().replaceAll(" ", "-");
    const product = this.page.getByTestId(`remove-${locatorName}`);
    await product.click();
  }
}
