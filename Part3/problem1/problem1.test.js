const playWithAsterik = require("./problem1");

test("Text 1", () => {
  expect(playWithAsterik(5)).toEqual(
    "   *\n * *\n * * *\n * * * *\n * * * * *\n"
  );
});
