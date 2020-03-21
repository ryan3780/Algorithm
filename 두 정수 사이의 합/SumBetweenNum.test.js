const SumBetweenNum = require("./SumBetweenNum");

describe("작동하나?", () => {
  it("3, 5", () => {
    expect(SumBetweenNum.solution(3, 5)).toBe(12);
  });
  it("3, 3", () => {
    expect(SumBetweenNum.solution(3, 3)).toBe(3);
  });
  it("5, 3", () => {
    expect(SumBetweenNum.solution(5, 3)).toBe(12);
  });
 
});
