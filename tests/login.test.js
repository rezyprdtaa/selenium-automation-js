const assert = require("assert");
const { createDriver } = require("../utils/driver");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");

describe("Saucedemo Login - POM", function () {
  let driver;
  let loginPage;
  let dashboardPage;

  this.timeout(30000);

  beforeEach(async () => {
    driver = await createDriver();
    loginPage = new LoginPage(driver);
    dashboardPage = new DashboardPage(driver);

    await loginPage.open();
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  // ✅ POSITIVE
  it("TC_POS_01 - Valid login", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    assert.ok(await dashboardPage.isLoaded());
  });

  it("TC_POS_02 - Login with Enter", async () => {
    await loginPage.loginWithEnter("standard_user", "secret_sauce");
    assert.ok(await dashboardPage.isLoaded());
  });

  it("TC_POS_03 - Verify URL", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    const url = await dashboardPage.getCurrentUrl();
    assert.ok(url.includes("inventory"));
  });

  it("TC_POS_04 - Refresh session", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await driver.navigate().refresh();
    assert.ok(await dashboardPage.isLoaded());
  });

  it("TC_POS_05 - Login multiple times", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await dashboardPage.isLoaded();

    await dashboardPage.logout();

    await loginPage.login("standard_user", "secret_sauce");
    assert.ok(await dashboardPage.isLoaded());
  });

  // ❌ NEGATIVE
  it("TC_NEG_01 - Wrong password", async () => {
    await loginPage.login("standard_user", "wrong_pass");
    const error = await loginPage.getErrorMessage();
    assert.ok(error.includes("Username and password do not match"));
  });

  it("TC_NEG_02 - Wrong username", async () => {
    await loginPage.login("wrong_user", "secret_sauce");
    const error = await loginPage.getErrorMessage();
    assert.ok(error.includes("Username and password do not match"));
  });

  it("TC_NEG_03 - Empty username", async () => {
    await loginPage.login("", "secret_sauce");
    const error = await loginPage.getErrorMessage();
    assert.ok(error.includes("Username is required"));
  });

  it("TC_NEG_04 - Empty password", async () => {
    await loginPage.login("standard_user", "");
    const error = await loginPage.getErrorMessage();
    assert.ok(error.includes("Password is required"));
  });

  it("TC_NEG_05 - Both empty", async () => {
    await loginPage.login("", "");
    const error = await loginPage.getErrorMessage();
    assert.ok(error.includes("Username is required"));
  });
});