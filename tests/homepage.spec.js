const { test, expect } = require('@playwright/test');
// const sel = require('./common_selectors');
const fs = require('fs');

if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}



test.describe('Homepage sanity', () => {

  test('HP - load UI + full page screenshot', async ({ page }) => {

  await page.setViewportSize({ width: 1280, height: 720 });

    // -------- Go to Homepage --------
    await page.goto('https://www.liquid-iv.ca/', {
      waitUntil: 'domcontentloaded'
    });


    const heroBanner = page.locator(
    '//img[@alt="LIV-DCOMMS-HomePageBanner-TropicalPunch-Desktop.jpg"]'
      );

  await expect(heroBanner).toBeVisible({ timeout: 30000 });
    console.log("✅ Hero banner visible");


    const cookieBtn = page.locator('#onetrust-accept-btn-handler');

    await cookieBtn.click({ timeout: 6000 });
    console.log('Cookie banner accepted');

    const firstShopNow = page.locator(
      '(//a[@class="button button--primary"])[1]'
    );
    await firstShopNow.click();

    console.log('✅ Banner button clicked');

    const homeLogo = page.locator("//div[@class='header__heading-logo-wrapper']");
    await homeLogo.click();
    console.log('✅ Navigated back to homepage');

      const heading = page.locator('h1.title.inline-richtext');
      await expect(heading).toHaveText('HYDRATION FOR ANY OCCASION');
      console.log('✅ Verified heading text HYDRATION FOR ANY OCCASION');

        const nextButton = page.locator("//button[@class='btn-hex group swiper-button-next']");
          await nextButton.scrollIntoViewIfNeeded();

       await nextButton.click();
       console.log('✅ Clicked next button on featured products carousel');


    // -------- FULL PAGE SCREENSHOT --------
    // await page.screenshot({
    //   path: 'screenshots/homepage-fullpage.png',
    //   fullPage: true
    // });

    // console.log('📸 Final full page screenshot saved: homepage-fullpage.png');
  });

});
