import { test, expect } from '@playwright/test'; //Import the selectors into a test file, called "tech-example.test.ts"

import {
  getDemoButtonByCssSelector,
  getByRoleSelector,
} from '../pages/tech-example.page';

test('Navigate to https://arkestro.com/ and check something on the page', async ({page, }) => {
        await page.goto('https://arkestro.com/');
        await expect(page.getByText('Arkestro drives better buying decisions, faster, at scale!')).toBeVisible();
        await getDemoButtonByCssSelector(page).click();
        await expect(page.getByText('Request a custom demo')).toBeVisible();
        await getIframeSelector(page).getByLabel('Email*').fill('test@gmail.com');
        await expect(getIframeSelector(page).getByText('Please enter a different email address. This form does not accept addresses from gmail.com.')).toBeVisible();
});