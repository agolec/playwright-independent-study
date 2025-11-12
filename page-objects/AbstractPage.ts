import { type Locator, type Page } from '@playwright/test';
import { Footer } from '../page-objects/components/Footer';

export class AbstractPage {
  readonly page: Page;
  readonly footer: Footer;
  constructor(page: Page) {
    this.page = page;
    this.footer = new Footer(page);
  }

  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }
  async click(selector: string) {
    await this.page.click(selector);
  }
  async typeText(selector: Locator, text: string) {
    await selector.fill(text);
  }
}
