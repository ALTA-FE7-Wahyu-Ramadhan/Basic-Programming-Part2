const test = require("./problem2.1");

test("Text 1", () => {
  expect(test(6)).toEqual("1\n2\n3\n6");
});
test("Text 2", () => {
  expect(test(20)).toEqual("1\n2\n4\n5\n10\n20");
});
