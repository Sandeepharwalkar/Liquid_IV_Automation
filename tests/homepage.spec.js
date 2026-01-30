// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';
import fs from 'fs';


if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}



test.describe('Homepage Validation', () => {

  test('Homepage - Validate components', async ({ page }) => {

    await page.setViewportSize({ width: 1280, height: 720 });

    // -------- Go to Homepage --------
    await page.goto('https://www.liquid-iv.ca/', {
      waitUntil: 'domcontentloaded'
    });


    // const heroBanner = page.locator(
    //   `//div[1]/div[1]/img[1]`

  

    // await expect(heroBanner).toBeVisible({ timeout: 100000 });
    // console.log("✅ Hero banner visible");


    const cookieBtn = page.locator('#onetrust-accept-btn-handler');

    await cookieBtn.click({ timeout: 6000 });
    console.log('✅ Cookie banner accepted');

    const firstShopNow = page.locator(
      '(//a[@class="button button--primary"])[1]'
    );
    await firstShopNow.click({ timeout: 6000 });

    console.log('✅ Banner button clicked');

    const homeLogo = page.locator("//div[@class='header__heading-logo-wrapper']");

    await homeLogo.click({ timeout: 120000 });
    console.log('✅ Navigated back to homepage');

    const heading = page.locator('h1.title.inline-richtext');
    await expect(heading).toHaveText('HYDRATION FOR ANY OCCASION');
    console.log('✅ Verified heading text HYDRATION FOR ANY OCCASION');

    const element = page.locator("(//a[@class='product-card-link'])[6]");

    await element.scrollIntoViewIfNeeded();
    await element.hover();


    const nextButton = page
      .locator('button.swiper-button-next')
      .first();

    await nextButton.scrollIntoViewIfNeeded();
    await expect(nextButton).toBeVisible();

    const isDisabled =
      (await nextButton.getAttribute('aria-disabled')) === 'true';

    if (isDisabled) {
      console.log('⚠️ Next button is disabled – carousel is at end or static');
    } else {
      await nextButton.click();
      console.log('✅ Clicked next button on featured products carousel');
    }


    // const nextButton = page.locator("//button[@class='btn-hex group swiper-button-next']");
    // await nextButton.scrollIntoViewIfNeeded();

    // await nextButton.click();
    // console.log('✅ Clicked next button on featured products carousel');

    const ourCommunityHeading = page.locator('h2:has-text("OUR COMMUNITY")');
    await ourCommunityHeading.scrollIntoViewIfNeeded();
    await expect(ourCommunityHeading).toBeVisible();
    console.log('✅ Our Community heading is visible');



    // Step 1: Scroll to the HYDRATION FOR heading
    await page.locator('h2:has-text("HYDRATION FOR")').scrollIntoViewIfNeeded();;
    await page.waitForTimeout(3000); // Wait for scroll to complete
    console.log('✅ Hydratiion for heading is visible');

    // Step 2: Click on Performance
    await page.locator('li:has-text("PERFORMANCE")').click();
    // await page.waitForTimeout(2000);
    console.log('✅ Performance tab clicked');

    // Step 3: Click on Travel
    await page.locator('li:has-text("TRAVEL")').click();
    await page.waitForTimeout(2000);
    console.log('✅ Travel tab clicked');

    // Step 4: Click on Heat/Sun
    await page.locator('li:has-text("HEAT/SUN")').click();
    await page.waitForTimeout(2000);
    console.log('✅ Heat/Sun tab clicked');

    // Step 5: Click on Adventure
    await page.locator('li:has-text("ADVENTURE")').click();
    await page.waitForTimeout(2000);
    console.log('✅ Adventure tab clicked');

    await page.waitForSelector('h2:has-text("OUR IMPACT")');

    // Get the OUR IMPACT heading element
    const headingText1 = page.locator('h2:has-text("OUR IMPACT")');

    // Get the text content of the heading
    const headingText = await heading.textContent();

    // Print the heading
    console.log('Found heading: ' + 'OUR IMPACT');

     await page.locator('.link.animate-arrow').first().click();
     console.log('✅ Animated arrow link clicked');

  
  await page.getByRole('heading', { name: 'The 2024 Impact Report' }).click();
  await expect(page.getByRole('heading', { name: 'The 2024 Impact Report' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The 2024 Impact Report' })).toBeVisible();
  await page.getByRole('link', { name: 'Learn More' }).click();

    // Optional: Take a screenshot to verify the final state
    // await page.screenshot({ path: 'hydration-adventure.png' });



    //  const heading2 = page.locator('h1.rich-text__heading rte inline-richtext hxxl scroll-trigger animate--slide-in');
    // await expect(heading).toHaveText('Our Community');
    // console.log('✅ Verified heading text Our Community');


    // -------- FULL PAGE SCREENSHOT --------
    // await page.screenshot({
    //   path: 'screenshots/homepage-fullpage.png',
    //   fullPage: true
    // });

    // console.log('📸 Final full page screenshot saved: homepage-fullpage.png');
  });

});
