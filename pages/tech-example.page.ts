import type { Page } from 'playwright';

const cssSelectorDemoButton = '.et_pb_button_0_tb_header'; // 1.1 Define a selector using CSS - Demo
export const getDemoButtonByCssSelector = (page: Page) => {  //Use the selectors in a function within the page file & Export the selectors  made in 1.1 and 1.2 from the "tech-example.page.ts"
  return page.locator(cssSelectorDemoButton);
};

const frameLocatorSelector = 'iframe[title="Form 0"]'; // 1.2. Define a selector using the selectors native to Playwright
export const getIframeSelector = (page: Page) => {  //Use the selectors in a function within the page file
  return page.frameLocator(frameLocatorSelector);
};