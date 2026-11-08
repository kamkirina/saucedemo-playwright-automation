import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test("should login successfully with valid credentials", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);

  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.getByTestId("inventory-container")).toBeVisible();
});

test("should login unsuccessfully with invalid credentials", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);

  await loginPage.login("user", "12345");

  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.getByRole("alert")).toContainText(
    "Username and password do not match any user in this service",
  );
});
