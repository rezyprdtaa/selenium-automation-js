const { By, until } = require("selenium-webdriver");

class DashboardPage {
  constructor(driver) {
    this.driver = driver;

    this.inventoryList = By.className("inventory_list");
    this.menuButton = By.id("react-burger-menu-btn");
    this.logoutButton = By.id("logout_sidebar_link");
    this.loginButton = By.id("login-button");
  }

  async isLoaded() {
    const el = await this.driver.wait(
      until.elementLocated(this.inventoryList),
      10000
    );
    await this.driver.wait(until.elementIsVisible(el), 10000);
    return true;
  }

  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }

  async logout() {
    const menuBtn = await this.driver.wait(
      until.elementLocated(this.menuButton),
      10000
    );
    await this.driver.wait(until.elementIsVisible(menuBtn), 10000);
    await menuBtn.click();

    const logoutBtn = await this.driver.wait(
      until.elementLocated(this.logoutButton),
      10000
    );
    await this.driver.wait(until.elementIsVisible(logoutBtn), 10000);
    await logoutBtn.click();

    await this.driver.wait(
      until.elementLocated(this.loginButton),
      10000
    );
  }
}

module.exports = DashboardPage;