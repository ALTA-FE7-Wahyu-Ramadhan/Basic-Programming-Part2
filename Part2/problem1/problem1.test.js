const cekNilai = require("./problem1");

test("Text 1", () => {
  expect(cekNilai(80)).toEqual("Nilai A");
});
test("Text 2", () => {
  expect(cekNilai(79)).toEqual("Nilai B+");
});
test("Text 3", () => {
  expect(cekNilai(64)).toEqual("Nilai B");
});
test("Text 4", () => {
  expect(cekNilai(49)).toEqual("Nilai C");
});
test("Text 5", () => {
  expect(cekNilai(34)).toEqual("Nilai D");
});
test("Text 6", () => {
  expect(cekNilai(-1)).toEqual("Invalid");
});
test("Text 7", () => {
  expect(cekNilai(101)).toEqual("Invalid");
});
