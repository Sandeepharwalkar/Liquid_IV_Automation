import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wiproconsumerlighting.com/');
  await page.getByText('Shop').first().click();
  await page.getByText('Smart Home').first().click();
  await page.goto('https://www.wiproconsumerlighting.com/');
  await page.getByText('Shop').first().click();
  await page.getByRole('link', { name: 'Menu Images Smart Home Lights' }).click();
  await page.locator('div').filter({ hasText: /^Compare Products$/ }).first().click();
  await page.getByRole('checkbox', { name: 'Price Range Clear' }).check();
  await page.getByRole('link', { name: 'Wipro 9W Wi-Fi LED Smart Bulb' }).locator('#check').check();
  await page.getByRole('button', { name: 'Compare' }).click();
  await page.getByRole('link', { name: 'Wipro 12.5W Wi-Fi LED Smart' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed to Buy' }).click();
  await page.getByRole('button', { name: 'CHECKOUT' }).click();
});