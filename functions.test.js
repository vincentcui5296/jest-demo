const functions = require("./functions");

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CEHCK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// tobeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBe is for primitive type. Object and array is reference types, use toEqual()
test("User should be Vincent object", () => {
  expect(functions.createUser()).toEqual({ firstName: "Vincent" });
});

test("Should be under 1600, equal 1500 and greater than 1400", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1500);
  expect(load1 + load2).toBeGreaterThan(1400);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

test("User fetched name should be Leanne Graham", () => {
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

test("User fetched name should be Leanne Graham", async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe("Leanne Graham");
});

const nameCheck = () => console.log("Checking Name...");
describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
});
