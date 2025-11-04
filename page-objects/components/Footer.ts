import { Page, Locator } from '@playwright/test';

export class Footer {
  readonly page: Page;
  readonly root: Locator;
  readonly downloadWebInspect: Locator;
  readonly termsOfUse: Locator;
  readonly contactMicroFocus: Locator;
  readonly privacyStatement: Locator;
  readonly disclaimer: Locator;
  readonly firstPrivacyLink: Locator;
  readonly secondPrivacyLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator('div.extra');
    this.downloadWebInspect = this.root.locator('#download_webinspect_link');
    this.termsOfUse = this.root.locator('#terms_of_use_link');
    this.contactMicroFocus = this.root.locator('span#contact_hp_link');
    this.privacyStatement = this.root.locator('span#privacy_statement_link');
    this.disclaimer = this.root.locator('div.disclaimer');
    this.firstPrivacyLink = this.disclaimer.locator('> a').nth(0);
    this.secondPrivacyLink = this.disclaimer.locator('> a').nth(1);
  }

  async getDownloadWebInspectText() {
    return this.downloadWebInspect.innerText();
  }
  async getTermsOfUseText() {
    return this.termsOfUse.innerText();
  }
  async getDisclaimerText() {
    return this.disclaimer.textContent();
  }
}
