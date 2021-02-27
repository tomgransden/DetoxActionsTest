describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('AppText'))).toBeVisible();
  });

  it('Should show visible text after pressing button', async () => {
    await element(by.id('Button')).tap();
    await expect(element(by.id('VisibleText'))).toBeVisible();
  });

  it('Should hide visible text after pressing button twice', async () => {
    await element(by.id('Button')).tap();
    await element(by.id('Button')).tap();
    await expect(element(by.id('VisibleText'))).not.toBeVisible();
  })

});
