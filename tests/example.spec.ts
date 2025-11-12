import { test, expect } from '@playwright/test';

import { LandingPage } from '../page-objects/LandingPage';
import { normalizeWhiteSpace } from '../utils/text-utils';
import { footerData } from '../test-data/footer-data';
import { expectCount } from '../utils/assertions';

test('footer is visible on the home page', async ({ page }) => {
  const home = new LandingPage(page);
  await home.goto();

  const isVisible = await home.footer.root.isVisible();
  const text = await home.footer.root.allInnerTexts();
  console.log(text);
  console.log(await home.footer.root.innerText());
  expect(isVisible).toBeTruthy();
});

test('FOOTER - download webInspect is visible on homepage', async ({
  page,
}) => {
  const home = new LandingPage(page);
  await home.goto();

  const isVisible = await home.footer.getDownloadWebInspectText();
  const actualText = await home.footer.getDownloadWebInspectText();
  const expectedText = 'Download WebInspect';
  console.log(actualText);
  expect(isVisible).toBeTruthy();
  await expect(home.footer.downloadWebInspect).toHaveText(expectedText);
});

test('Footer - assert disclaimer text content', async ({ page }) => {
  const home = new LandingPage(page);
  await home.goto();

  const actualDisclaimerText = await home.footer.getDisclaimerText();

  expect(actualDisclaimerText).toBeTruthy();
  const actualTextNormalized = normalizeWhiteSpace(actualDisclaimerText);

  footerData.disclaimer.expectedPhrases.forEach((phrase) => {
    expect(actualTextNormalized).toContain(phrase);
  });
});

test.only('type a search term', async ({ page }) => {
  const home = new LandingPage(page);
  await home.goto();

  const isVisible = await home.search.isVisible();
  const text = 'account';
  console.log(text);
  await home.typeSearchTerm(text);
  await home.pressEnterForSearch();
  await expectCount(home.searchResults, 2);
  expect(isVisible).toBeTruthy();
});
