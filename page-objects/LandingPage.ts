import { type Locator, type Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LandingPage extends AbstractPage {
  readonly signIn: Locator;
  readonly search: Locator;

  constructor(page: Page) {
    super(page);
    this.signIn = page.locator('#signin_button');
    this.search = page.locator('#searchTerm');
  }

  async goto() {
    await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
  }

  async enterSearchTerm(searchTerm: string) {
    await this.search.fill(searchTerm);
  }
  async clickSearch() {
    await this.page.keyboard.press('Enter');
  }
}
