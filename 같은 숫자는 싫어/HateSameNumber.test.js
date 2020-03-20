const hate = require("./HateSameNumber");

describe("작동하나?", () => {
  it("1, 1, 3, 3, 0, 1, 1", () => {
    expect(hate.solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  });
  it("4, 4, 4, 3, 3", () => {
    expect(hate.solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
  });
  it("1, 3, 3, 5, 5, 5, 5, 6, 7, 7, 9, 9", () => {
    expect(hate.solution([1, 3, 3, 5, 5, 5, 5, 6, 7, 7, 9, 9])).toEqual([
      1,
      3,
      5,
      6,
      7,
      9
    ]);
  });
});
