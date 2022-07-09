const ok = require("./problem6");

test("Text 1", () => {
  expect(fullPrima(2)).toEqual(true);
});
test("Text 2", () => {
  expect(fullPrima(3)).toEqual(true);
});
test("Text 3", () => {
  expect(fullPrima(11)).toEqual(false);
});
test("Text 4", () => {
  expect(fullPrima(13)).toEqual(false);
});
test("Text 5", () => {
  expect(fullPrima(23)).toEqual(true);
});
test("Text 6", () => {
  expect(fullPrima(29)).toEqual(false);
});
test("Text 7", () => {
  expect(fullPrima(37)).toEqual(true);
});
test("Text 8", () => {
  expect(fullPrima(41)).toEqual(false);
});
test("Text 9", () => {
  expect(fullPrima(43)).toEqual(false);
});
test("Text 10", () => {
  expect(fullPrima(53)).toEqual(true);
});
