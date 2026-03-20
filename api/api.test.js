const axios = require("axios");
const assert = require("assert");
const { BASE_URL, API_KEY } = require("./config");

describe("API Automation - Reqres", () => {

  const headers = {
    "x-api-key": API_KEY
  };

  it("API_01 - Get users page=2", async () => {
    const res = await axios.get(`${BASE_URL}/users?page=2`, { headers });

    assert.equal(res.status, 200);
    assert.equal(res.data.page, 2);
  });

  it("API_02 - Invalid page=999", async () => {
    const res = await axios.get(`${BASE_URL}/users?page=999`, { headers });

    assert.equal(res.status, 200);
    assert.equal(res.data.data.length, 0);
  });

  it("API_03 - Wrong method POST", async () => {
    try {
      await axios.post(`${BASE_URL}/users?page=2`, {}, { headers });
    } catch (err) {
      assert.ok(err.response.status === 404 || err.response.status === 405);
    }
  });

  it("API_04 - Response schema validation", async () => {
    const res = await axios.get(`${BASE_URL}/users?page=2`, { headers });

    const user = res.data.data[0];
    assert.equal(res.status, 200);
    assert.ok(user.hasOwnProperty("id"));
    assert.ok(user.hasOwnProperty("email"));
    assert.ok(user.hasOwnProperty("first_name"));
    assert.ok(user.hasOwnProperty("last_name"));
    assert.ok(user.hasOwnProperty("avatar"));
  });

  it("API_05 - Request without API Key", async () => {
    try {
      await axios.get(`${BASE_URL}/users?page=2`);
    } catch (err) {
      assert.equal(err.response.status, 403);
    }
  });

});