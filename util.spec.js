const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

// Unit test
test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should output date-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("should output date-less text", () => {
  const text = generateText();
  expect(text).toBe("undefined (undefined years old)");
});

// Integration test: Test Whether Units work together correctly.
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false, // Run a browser with user interfaces
    slowMo: 80, // slow down the animation operation to see what's happening
    args: ["--window-size=1920,1080"],
  });
  // const browser = await puppeteer.launch({
  //   headless: true,
  // });
  const page = await browser.newPage();
  await page.goto("file:///C:/Users/vincent/Downloads/jest-demo/index.html");
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent); // $eval gets an element
  expect(finalText).toBe("Anna (28 years old)");
}, 10000);
