const k_number = require("./NumberOfK");

describe("작동하나?", () => {
  it("첫 배열", () => {
    expect(
      k_number.solution(
        [1, 5, 2, 6, 3, 7, 4],
        [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
      )
    ).toEqual([5, 6, 3]);
  });
});
