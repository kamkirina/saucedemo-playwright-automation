import { test, expect } from "@playwright/test";

test("homepage displays expected content", async ({ page }) => {
  await page.goto("https://example.com");

  await expect(page).toHaveURL("https://example.com");
  await expect(
    page.getByText("This domain is for use in documentation examples"),
  ).toBeVisible();
});
