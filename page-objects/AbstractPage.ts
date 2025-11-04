import { Page } from '@playwright/test';
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
}
