const changeAlphabet = require("./problem4");
test("Text 1", () => {
  expect(ubahHuruf("SEPULSA OKE")).toEqual("COZEVCK YUO");
});
test("Text 2", () => {
  expect(ubahHuruf("ALTERRA ACADEMY")).toEqual("KVDOBBK KMKNOWI");
});
test("Text 3", () => {
  expect(ubahHuruf("INDONESIA")).toEqual("SXNYXOCSK");
});
test("Text 4", () => {
  expect(ubahHuruf("GOLANG")).toEqual("QYVKXQ");
});
test("Text 4", () => {
  expect(ubahHuruf("PROGRAMMER")).toEqual("ZBYQBKWWOB");
});
