const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

async function createDriver() {
  const service = new chrome.ServiceBuilder(chromedriver.path);

  const options = new chrome.Options();

  options.addArguments("--start-maximized");
  options.addArguments("--incognito");
  options.addArguments("--disable-notifications");
  options.addArguments("--disable-infobars");
  options.addArguments("--disable-extensions");

  options.setUserPreferences({
    "credentials_enable_service": false,
    "profile.password_manager_enabled": false
  });

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .setChromeOptions(options)
    .build();

  return driver;
}

module.exports = { createDriver };