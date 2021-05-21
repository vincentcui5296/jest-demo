// jest will automatically use mocks of global node_modules. So axios.js should be used automatically
// if use axios.js mock function, comment this line.
jest.mock("./http");

const { loadTitle } = require("./util1");

test("should print an uppercase text", () => {
  return loadTitle().then((title) => {
    console.log(title);
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});
