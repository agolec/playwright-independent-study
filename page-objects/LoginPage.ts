import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly zeroBankHomePageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.zeroBankHomePageLink = page.locator('div.navbar-inner div a');
  }

  async goto() {
    await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
  }
}
