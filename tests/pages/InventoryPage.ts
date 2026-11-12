import type { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.getByTestId("shopping-cart-link");
  }

  async addProductToCart(name: string) {
    const product= this.page.getByTestId('inventory-item').filter({hasText: name})
    const addToCartBtn = product.getByRole('button', {name: 'Add to cart', exact: true})

    await addToCartBtn.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }
}
