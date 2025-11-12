import { Page, Locator, expect } from '@playwright/test';

export async function expectCount(locator: Locator, count: number) {
  await expect(locator).toHaveCount(count);
}
