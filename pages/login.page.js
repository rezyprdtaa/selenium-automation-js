const { By, until, Key } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameInput = By.id("user-name");
    this.passwordInput = By.id("password");
    this.loginButton = By.id("login-button");
    this.errorMessage = By.css(".error-message-container");
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com/");
  }

  async waitUntilLoaded() {
    const el = await this.driver.wait(
      until.elementLocated(this.usernameInput),
      10000
    );
    await this.driver.wait(until.elementIsVisible(el), 10000);
  }

  async login(username, password) {
    await this.waitUntilLoaded();

    const userInput = await this.driver.findElement(this.usernameInput);
    await userInput.clear();
    await userInput.sendKeys(username);

    const passInput = await this.driver.findElement(this.passwordInput);
    await passInput.clear();
    await passInput.sendKeys(password);

    const loginBtn = await this.driver.findElement(this.loginButton);
    await loginBtn.click();
  }

  async loginWithEnter(username, password) {
    await this.waitUntilLoaded();

    const userInput = await this.driver.findElement(this.usernameInput);
    await userInput.clear();
    await userInput.sendKeys(username);

    const passInput = await this.driver.findElement(this.passwordInput);
    await passInput.clear();
    await passInput.sendKeys(password, Key.ENTER);
  }

  async getErrorMessage() {
    const el = await this.driver.wait(
      until.elementLocated(this.errorMessage),
      10000
    );
    return await el.getText();
  }
}

module.exports = LoginPage;