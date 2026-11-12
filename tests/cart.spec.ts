import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { InventoryPage } from "./pages/InventoryPage";
import { CartPage } from "./pages/CartPage";

 
test("verify that a logged-in user can add a product to the shopping cart", async ({
  page,
}, testInfo) => {
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productCard = page.getByTestId('inventory-item').filter({hasText: 'Sauce Labs Backpack'});
 

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addProductToCart("Sauce Labs Backpack");
  
  await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
  await expect(productCard.getByRole('button', {name: 'Remove', exact: true})).toBeVisible();
  
  await productCard.screenshot({path: testInfo.outputPath('product-card.png')    
  });

  await testInfo.attach("Backpack product card screenshot", {
    path: testInfo.outputPath("product-card.png"),
    contentType: "image/png",
  });

  await inventoryPage.openCart();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  
});

test("verify that a logged-in user can add two different products to the cart", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addProductToCart("Sauce Labs Backpack");
  await inventoryPage.addProductToCart("Sauce Labs Bike Light");
  await expect(page.getByTestId("shopping-cart-badge")).toHaveText("2");

  await inventoryPage.openCart();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();
});

test("verify that a user can remove an item from the shopping cart correctly", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addProductToCart("Sauce Labs Backpack");
  await inventoryPage.openCart();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
  await cartPage.removeProduct("Sauce Labs Backpack");
  await expect(page.getByText("Sauce Labs Backpack")).toBeHidden();
  await expect(page.getByTestId("shopping-cart-badge")).toHaveCount(0);
});


