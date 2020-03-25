const find = require("./FindPandY");

describe("작동하나?", () => {
  it("5월 24일", () => {
    expect(find.solution("pPoooyY")).toBe(true);
  });
  it("5월 25일", () => {
    expect(find.solution("Pyy")).toBe(false);
  });
});
