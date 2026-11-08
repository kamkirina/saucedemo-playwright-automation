import type { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.getByTestId("shopping-cart-link");
  }

  async addProductToCart(name: string) {
    const locatorName = name.toLowerCase().replaceAll(" ", "-");
    const product = this.page.getByTestId(`add-to-cart-${locatorName}`);

    await product.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }
}
