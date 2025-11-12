import { type Locator, type Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LandingPage extends AbstractPage {
  readonly signIn: Locator;
  readonly search: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);
    this.signIn = page.locator('#signin_button');
    this.search = page.locator('#searchTerm');
    this.searchResults = page.locator('ul li a');
  }

  async goto() {
    await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
  }

  async typeSearchTerm(searchTerm: string) {
    await this.typeText(this.search, searchTerm);
  }
  async pressEnterForSearch() {
    await this.page.keyboard.press('Enter');
  }
}
